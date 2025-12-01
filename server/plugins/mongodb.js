import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
  try {
    const config = useRuntimeConfig()
    await mongoose.connect(config.mongodbUri)
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    // Don't throw error to prevent app crash, but log it
  }
})