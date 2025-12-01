import { Resend } from 'resend'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  // Make Resend available globally in the Nitro runtime
  global.resend = resend

  console.log('✅ Resend plugin initialized successfully')
})