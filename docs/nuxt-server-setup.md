# Nuxt 4 Server Setup Guide

This document provides comprehensive guidance for setting up backend services in a Nuxt 4 application using the Nitro server engine.

## Directory Structure

```
project-root/
├── app/                     # Frontend code
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   └── ...
├── server/                  # Backend code ✅
│   ├── api/              # API routes
│   │   └── auth/
│   │       ├── register.post.js
│   │       ├── send-otp.post.js
│   │       └── verify-otp.post.js
│   ├── models/           # Data models
│   │   └── User.js
│   ├── plugins/          # Nitro plugins
│   │   ├── mongodb.js
│   │   └── resend.js
│   └── middleware/        # Server middleware
├── public/                  # Static assets
├── .env                    # Environment variables
├── package.json
└── nuxt.config.js
```

## Configuration

### 1. Environment Variables

Create a `.env` file in your project root:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/saferoute

# Email Service
RESEND_API_KEY=your_resend_api_key

# App Configuration
NODE_ENV=development
```

### 2. Required Dependencies

```bash
# Database & Email
npm install mongoose resend

# Authentication & Security
npm install bcryptjs

# Validation
npm install zod

# OTP Input Component
npm install vue-input-otp
```

## API Routes

### Creating API Endpoints

Files in `/server/api/` are automatically prefixed with `/api`:

```typescript
// server/api/auth/register.post.js
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return { success: true, data: body }
})
```

### Route Methods

You can specify HTTP methods in filenames:

- `register.post.ts` - POST only
- `users.get.ts` - GET only
- `data.[].ts` - Handle all methods

### Dynamic Routes

Use brackets for dynamic parameters:

```typescript
// server/api/users/[id].ts
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return { id }
})
```

## Data Models

### User Model Example

```typescript
// server/models/User.js
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minlength: [2, 'First name must be at least 2 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  },
  // OTP Verification Fields
  isVerified: {
    type: Boolean,
    default: false
  },
  otpCode: {
    type: String,
    select: false // Don't include in queries by default
  },
  otpExpires: {
    type: Date,
    select: false
  }
}, {
  timestamps: true
})

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  try {
    const bcrypt = await import('bcryptjs')
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

export default mongoose.model('User', userSchema)
```

## Plugins

### MongoDB Plugin

```typescript
// server/plugins/mongodb.js
import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
  }
})
```

### Email Service Plugin

```typescript
// server/plugins/resend.js
import { Resend } from 'resend'

export default defineNitroPlugin(async () => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  global.resend = resend
  console.log('✅ Resend plugin initialized successfully')
})
```

## Authentication Flow

### 1. Registration

```typescript
// server/api/auth/register.post.js
import User from '~/server/models/User'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { firstName, lastName, email, password } = body

  // Check if user exists
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User already exists'
    })
  }

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password,
    isVerified: false
  })

  // Generate and send OTP
  const otp = generateOTP()
  const hashedOTP = await hashOTP(otp)

  await User.updateOne(
    { email },
    { otpCode: hashedOTP, otpExpires: new Date(Date.now() + 3600000) }
  )

  await sendOTPEmail(email, otp)

  return {
    success: true,
    message: 'Account created! Check your email for verification.',
    userId: user._id
  }
})
```

### 2. OTP Verification

```typescript
// server/api/auth/verify-otp.post.js
import User from '~/server/models/User'

export default defineEventHandler(async (event) => {
  const { email, otp } = await readBody(event)

  // Find user with OTP fields
  const user = await User.findOne({ email })
    .select('+otpCode +otpExpires +otpAttempts +isVerified')

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  // Check expiry
  if (new Date() > user.otpExpires) {
    throw createError({ statusCode: 400, statusMessage: 'OTP expired' })
  }

  // Verify OTP
  const bcrypt = await import('bcryptjs')
  const isValid = await bcrypt.compare(otp, user.otpCode)

  if (!isValid) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid OTP' })
  }

  // Mark as verified
  await User.updateOne(
    { email },
    {
      isVerified: true,
      $unset: { otpCode: 1, otpExpires: 1, otpAttempts: 1 }
    }
  )

  return { success: true, message: 'Account verified!' }
})
```

## Frontend Integration

### Calling APIs from Vue Components

```vue
<script setup>
const handleRegister = async () => {
  try {
    const { data } = await $fetch('/api/auth/register', {
      method: 'POST',
      body: formData
    })

    if (data.success) {
      // Show success message
      navigateTo('/verify-otp')
    }
  } catch (error) {
    console.error('Registration failed:', error)
  }
}
</script>
```

### Use Sonner for Toasts

```vue
<script setup>
import { toast } from 'vue-sonner'

const handleSubmit = async () => {
  try {
    toast.loading('Processing...')
    const { data } = await $fetch('/api/endpoint', {
      method: 'POST',
      body: formData
    })

    toast.success('Operation successful!')
  } catch (error) {
    toast.error('Operation failed')
  }
}
</script>
```

## Error Handling

### Creating API Errors

```typescript
throw createError({
  statusCode: 400,
  statusMessage: 'Invalid input data'
})
```

### Handling Frontend Errors

```typescript
const handleRegister = async () => {
  try {
    const { data } = await $fetch('/api/auth/register', {
      method: 'POST',
      body: formData
    })

    // Handle success
  } catch (error) {
    console.error('Registration error:', error)

    // Extract error message from response
    const errorMessage = error.data?.statusMessage ||
                        error.message ||
                        'Registration failed'

    toast.error(errorMessage)
  }
}
```

## Middleware

### Server Middleware

```typescript
// server/middleware/logger.js
export default defineEventHandler((event) => {
  console.log(`[${new Date().toISOString()}] ${event.method} ${event.path}`)
})
```

### Route Middleware

```typescript
// server/middleware/auth.js
export default defineEventHandler((event) => {
  const token = getHeader(event, 'authorization')

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  // Verify token and attach user to event
  const user = await verifyToken(token)
  event.context.user = user
})
```

## Security Best Practices

### 1. Password Hashing

Always hash passwords before storing:

```typescript
// Use bcrypt with salt rounds of 12
const salt = await bcrypt.genSalt(12)
const hashedPassword = await bcrypt.hash(password, salt)
```

### 2. OTP Security

- Never store plain OTP codes
- Use hashing similar to passwords
- Set short expiry times (1 hour)
- Limit resend attempts

### 3. Input Validation

Use Zod for comprehensive validation:

```typescript
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password too short')
})

const result = schema.safeParse(input)
if (!result.success) {
  throw createError({
    statusCode: 400,
    statusMessage: result.error.errors[0].message
  })
}
```

### 4. Environment Variables

Never commit secrets. Use `.env` files:

```env
# Never commit this file to git
MONGODB_URI=mongodb://user:password@host/db
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

## Testing

### Testing API Endpoints

```bash
# Start development server
npm run dev

# Test with curl
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Deployment

### Production Configuration

1. **Environment Variables**: Set all required variables
2. **Database**: Use production MongoDB URI
3. **Security**: Enable HTTPS and set proper CORS headers
4. **Build**: Run `npm run build` before deployment

## Troubleshooting

### Common Issues

1. **Import Errors**: Use absolute paths `~/server/models/User`
2. **Plugin Loading**: Ensure plugin files are in `/server/plugins/`
3. **Database Connection**: Check `MONGODB_URI` and network connectivity
4. **Hot Reload**: Changes to server files require restarting dev server

### Debug Mode

Add console logs to track issues:

```typescript
export default defineEventHandler(async (event) => {
  console.log('Received request:', {
    method: event.method,
    path: event.path,
    body: await readBody(event)
  })

  // Your logic here
})
```

## Additional Resources

- [Nuxt 4 Documentation](https://nuxt.com/docs/4.x/)
- [Nitro Documentation](https://nitro.build/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Resend Documentation](https://resend.com/docs)
- [Zod Validation](https://zod.dev/)