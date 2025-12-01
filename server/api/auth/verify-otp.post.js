import User from '../../models/User'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, otp } = body

    // Validate input
    if (!email || !otp) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email and OTP are required'
      })
    }

    // Find user with OTP fields included
    const user = await User.findOne({
      email: email.toLowerCase().trim()
    }).select('+otpCode +otpExpires +otpAttempts +isVerified')

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found'
      })
    }

    // Check if already verified
    if (user.isVerified) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Account is already verified'
      })
    }

    // Check OTP expiry
    if (!user.otpExpires || new Date() > user.otpExpires) {
      throw createError({
        statusCode: 400,
        statusMessage: 'OTP has expired. Please request a new one.'
      })
    }

    // Check max attempts (5 attempts)
    if (user.otpAttempts >= 5) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many failed attempts. Please request a new OTP.'
      })
    }

    // Verify OTP
    const bcrypt = await import('bcryptjs')
    const isValidOTP = await bcrypt.compare(otp, user.otpCode)

    if (!isValidOTP) {
      // Increment attempts
      await User.updateOne(
        { email: email.toLowerCase().trim() },
        { $inc: { otpAttempts: 1 } }
      )

      const remainingAttempts = 5 - (user.otpAttempts + 1)

      throw createError({
        statusCode: 400,
        statusMessage: `Invalid OTP. ${remainingAttempts} attempts remaining.`
      })
    }

    // OTP is correct - verify user and clear OTP fields
    await User.updateOne(
      { email: email.toLowerCase().trim() },
      {
        $set: { isVerified: true },
        $unset: {
          otpCode: 1,
          otpExpires: 1,
          otpAttempts: 1,
          lastOtpSent: 1
        }
      }
    )

    return {
      success: true,
      message: 'Account verified successfully! You can now log in.'
    }

  } catch (error) {
    console.error('OTP verification error:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'OTP verification failed'
    })
  }
})