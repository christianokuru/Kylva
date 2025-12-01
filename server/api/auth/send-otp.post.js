import User from '../../models/User'

// Generate 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Hash OTP for secure storage
async function hashOTP(otp) {
  const bcrypt = await import('bcryptjs')
  const salt = await bcrypt.genSalt(12)
  return await bcrypt.hash(otp, salt)
}

// Send OTP email
async function sendOTPEmail(email, otp, firstName) {
  try {
    const config = useRuntimeConfig()
    const { data, error } = await global.resend.emails.send({
      from: `${config.fromName} <${config.fromEmail}>`,
      to: [email],
      subject: 'SafeRoute - New Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #002455; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">SafeRoute</h1>
            <p style="color: #3B82F6; margin: 5px 0 0 0;">Emergency Response Network</p>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0;">New Verification Code</h2>
            <p style="color: #4b5563; margin: 0 0 20px 0; line-height: 1.6;">
              Here's your new verification code for SafeRoute:
            </p>

            <div style="background: white; padding: 20px; border-radius: 6px; text-align: center; border: 2px solid #002455; margin: 20px 0;">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">Your new verification code is:</p>
              <p style="color: #002455; font-size: 32px; font-weight: bold; letter-spacing: 4px; margin: 0;">${otp}</p>
            </div>

            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>Important:</strong> This code will expire in 1 hour for your security.
              </p>
            </div>

            <p style="color: #4b5563; margin: 20px 0 0 0; font-size: 14px; line-height: 1.6;">
              If you didn't request this code, please ignore this email.
            </p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 12px;">
                Building a safer Nigeria, together. 🇳🇬
              </p>
            </div>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Failed to send OTP email')
    }

    console.log('✅ New OTP email sent successfully to:', email)
    return data
  } catch (error) {
    console.error('Email sending error:', error)
    throw error
  }
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email } = body

    // Validate input
    if (!email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email is required'
      })
    }

    // Find user with OTP fields included
    const user = await User.findOne({
      email: email.toLowerCase().trim()
    }).select('+lastOtpSent +isVerified +otpAttempts')

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

    // Check rate limiting (must wait 1 minute between resends)
    if (user.lastOtpSent) {
      const timeSinceLastOtp = new Date() - new Date(user.lastOtpSent)
      const oneMinuteInMs = 60 * 1000

      if (timeSinceLastOtp < oneMinuteInMs) {
        const remainingTime = Math.ceil((oneMinuteInMs - timeSinceLastOtp) / 1000)
        throw createError({
          statusCode: 429,
          statusMessage: `Please wait ${remainingTime} seconds before requesting a new OTP.`
        })
      }
    }

    // Generate new OTP
    const otp = generateOTP()
    const hashedOTP = await hashOTP(otp)
    const otpExpires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    // Update user with new OTP
    await User.updateOne(
      { email: email.toLowerCase().trim() },
      {
        $set: {
          otpCode: hashedOTP,
          otpExpires,
          lastOtpSent: new Date(),
          otpAttempts: 0 // Reset attempts on new OTP
        }
      }
    )

    // Send OTP email
    await sendOTPEmail(email, otp, user.firstName)

    return {
      success: true,
      message: 'New OTP sent to your email successfully.',
      expiresIn: '1 hour'
    }

  } catch (error) {
    console.error('Send OTP error:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to send OTP'
    })
  }
})