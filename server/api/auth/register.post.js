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
      subject: 'SafeRoute - Verify Your Account',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #002455; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">SafeRoute</h1>
            <p style="color: #3B82F6; margin: 5px 0 0 0;">Emergency Response Network</p>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; margin: 0 0 10px 0;">Welcome, ${firstName}!</h2>
            <p style="color: #4b5563; margin: 0 0 20px 0; line-height: 1.6;">
              Thank you for joining SafeRoute! To complete your registration and help keep Nigerian roads safer,
              please verify your email address with the code below:
            </p>

            <div style="background: white; padding: 20px; border-radius: 6px; text-align: center; border: 2px solid #002455; margin: 20px 0;">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">Your verification code is:</p>
              <p style="color: #002455; font-size: 32px; font-weight: bold; letter-spacing: 4px; margin: 0;">${otp}</p>
            </div>

            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>Important:</strong> This code will expire in 1 hour for your security.
              </p>
            </div>

            <p style="color: #4b5563; margin: 20px 0 0 0; font-size: 14px; line-height: 1.6;">
              If you didn't request this verification, please ignore this email. Your account will remain inactive
              until verified.
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

    console.log('✅ OTP email sent successfully to:', email)
    return data
  } catch (error) {
    console.error('Email sending error:', error)
    throw error
  }
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { firstName, lastName, email, password, emergencyContacts } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      if (existingUser.isVerified) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Account already exists with this email'
        })
      } else {
        // User exists but not verified, generate new OTP
        const otp = generateOTP()
        const hashedOTP = await hashOTP(otp)
        const otpExpires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

        await User.updateOne(
          { email },
          {
            $set: {
              otpCode: hashedOTP,
              otpExpires,
              lastOtpSent: new Date(),
              otpAttempts: 0
            }
          }
        )

        await sendOTPEmail(email, otp, firstName)

        return {
          success: true,
          message: 'New OTP sent to your email',
          requiresVerification: true
        }
      }
    }

    // Create new user
    const otp = generateOTP()
    const hashedOTP = await hashOTP(otp)
    const otpExpires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    // Hash password before saving
    const bcrypt = await import('bcryptjs')
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      emergencyContacts: emergencyContacts || [],
      otpCode: hashedOTP,
      otpExpires,
      lastOtpSent: new Date(),
      otpAttempts: 0
    })

    // Send OTP email
    await sendOTPEmail(email, otp, firstName)

    return {
      success: true,
      message: 'Account created successfully! Please check your email for verification.',
      requiresVerification: true,
      userId: user._id
    }

  } catch (error) {
    console.error('Registration error:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Registration failed'
    })
  }
})