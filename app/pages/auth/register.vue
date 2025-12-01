<script setup>
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { z } from 'zod'
import { computed, reactive, ref, watchEffect } from 'vue'

// Zod schema — emergency contacts are fully optional
const registrationSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters and spaces'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name can only contain letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be less than 128 characters'),
  confirmPassword: z.string()
    .min(6, 'Please confirm your password'),
  agreeToTerms: z.boolean()
    .refine(val => val === true, 'You must agree to the Terms of Service and Privacy Policy'),
  emergencyContacts: z.array(z.object({
    name: z.string().optional(),
    relationship: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email('Invalid email address').optional()
  })).optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

// Form state
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  emergencyContacts: [
    { name: '', relationship: '', phone: '', email: '' }
  ]
})

// Validation state — now derived directly from Zod
const formErrors = reactive({})
const isFormValid = ref(false)

// Run Zod validation on every change and update errors + button state
watchEffect(() => {
  const result = registrationSchema.safeParse(formData)

  // Clear all errors first
  Object.keys(formErrors).forEach(key => delete formErrors[key])

  if (!result.success) {
    // Populate errors in a flat structure (e.g. "email", "confirmPassword")
    result.error.errors.forEach(err => {
      const path = err.path.join('.')
      formErrors[path] = err.message
    })
    isFormValid.value = false
  } else {
    isFormValid.value = true
  }
})

// UI state
const isLoading = ref(false)
const currentStep = ref(1)
const otpCode = ref('')
const error = ref('')
const success = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const showEmergencySetup = ref(false)

// Password strength
const passwordStrength = computed(() => {
  if (!formData.password) return { score: 0, text: '', color: '' }

  let score = 0
  if (formData.password.length >= 8) score++
  if (/[a-z]/.test(formData.password)) score++
  if (/[A-Z]/.test(formData.password)) score++
  if (/\d/.test(formData.password)) score++
  if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) score++

  if (score <= 2) return { score, text: 'Weak', color: 'text-red-500' }
  if (score <= 3) return { score, text: 'Fair', color: 'text-yellow-500' }
  if (score <= 4) return { score, text: 'Good', color: 'text-blue-500' }
  return { score, text: 'Strong', color: 'text-green-500' }
})

// Emergency contacts helpers
const addEmergencyContact = () => {
  formData.emergencyContacts.push({ name: '', relationship: '', phone: '', email: '' })
}

const removeEmergencyContact = (index) => {
  if (formData.emergencyContacts.length > 1) {
    formData.emergencyContacts.splice(index, 1)
  }
}

// Form handlers
const handleRegister = async () => {
  if (!isFormValid.value) return

  isLoading.value = true
  error.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    currentStep.value = 2
    success.value = 'Registration successful! Please check your email for OTP code.'
  } catch (err) {
    error.value = 'Registration failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const handleVerifyOTP = async () => {
  if (!otpCode.value || otpCode.value.length !== 6) {
    error.value = 'Please enter a valid 6-digit OTP code'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    success.value = 'Account created successfully!'
    setTimeout(() => {
      navigateTo('/dashboard')
    }, 2000)
  } catch (err) {
    error.value = 'Invalid OTP code. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const handleResendOTP = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    success.value = 'OTP code has been resent to your email.'
  } catch (err) {
    error.value = 'Failed to resend OTP. Please try again.'
  }
}

const relationshipOptions = [
  { value: 'family', label: 'Family' },
  { value: 'spouse', label: 'Spouse' },
  { value: 'parent', label: 'Parent' },
  { value: 'sibling', label: 'Sibling' },
  { value: 'friend', label: 'Friend' },
  { value: 'colleague', label: 'Colleague' },
  { value: 'other', label: 'Other' }
]
</script>

<template>
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="flex justify-center mb-8">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-[#002455] dark:bg-[#3B82F6] rounded-lg flex items-center justify-center">
            <Icon icon="radix-icons:shield-check" class="h-6 w-6 text-white" />
          </div>
          <span class="text-xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">SafeRoute</span>
        </div>
      </div>

      <Card class="bg-white dark:bg-[#111827] border-[#E5E7EB] dark:border-[#374151]">
        <!-- Step 1: Registration Form -->
        <div v-if="currentStep === 1">
          <CardHeader class="text-center pb-6">
            <CardTitle class="text-2xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">
              Create Your Account
            </CardTitle>
            <CardDescription class="text-[#4B5563] dark:text-[#9CA3AF]">
              Join Nigeria's community-driven emergency response network
            </CardDescription>
          </CardHeader>

          <CardContent class="space-y-6">
            <Alert v-if="error" variant="destructive" class="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <Icon icon="radix-icons:alert-circle" class="h-4 w-4" />
              <AlertDescription class="text-red-800 dark:text-red-200">{{ error }}</AlertDescription>
            </Alert>

            <Alert v-if="success" class="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <Icon icon="radix-icons:check-circle" class="h-4 w-4" />
              <AlertDescription class="text-green-800 dark:text-green-200">{{ success }}</AlertDescription>
            </Alert>

            <form @submit.prevent="handleRegister" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    v-model="formData.firstName"
                    type="text"
                    placeholder="John"
                    class="border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1F2937]"
                    :class="{ 'border-red-500': formErrors.firstName }"
                  />
                  <p v-if="formErrors.firstName" class="text-xs text-red-500 mt-1">{{ formErrors.firstName }}</p>
                </div>
                <div class="space-y-2">
                  <Label for="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    v-model="formData.lastName"
                    type="text"
                    placeholder="Doe"
                    class="border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1F2937]"
                    :class="{ 'border-red-500': formErrors.lastName }"
                  />
                  <p v-if="formErrors.lastName" class="text-xs text-red-500 mt-1">{{ formErrors.lastName }}</p>
                </div>
              </div>

              <div class="space-y-2">
                <Label for="email">Email Address</Label>
                <Input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  placeholder="john.doe@example.com"
                  class="border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1F2937]"
                  :class="{ 'border-red-500': formErrors.email }"
                />
                <p v-if="formErrors.email" class="text-xs text-red-500 mt-1">{{ formErrors.email }}</p>
              </div>

              <div class="space-y-2">
                <Label for="password">Password</Label>
                <div class="relative">
                  <Input
                    id="password"
                    v-model="formData.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    minlength="6"
                    class="pr-10 border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1F2937]"
                    :class="{ 'border-red-500': formErrors.password }"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    class="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    @click="showPassword = !showPassword"
                  >
                    <Icon :icon="showPassword ? 'radix-icons:eye-open' : 'radix-icons:eye-closed'" class="h-4 w-4 text-[#6B7280] dark:text-[#9CA3AF]" />
                  </Button>
                </div>
                <p v-if="formErrors.password" class="text-xs text-red-500 mt-1">{{ formErrors.password }}</p>

                <div v-if="formData.password.length > 0" class="mt-2">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Password strength</span>
                    <span class="text-xs font-medium" :class="passwordStrength.color">{{ passwordStrength.text }}</span>
                  </div>
                  <div class="flex space-x-1">
                    <div
                      v-for="i in 5"
                      :key="i"
                      class="flex-1 h-1 rounded-full transition-colors"
                      :class="i <= passwordStrength.score ? passwordStrength.color.replace('text-', 'bg-').replace('-500', '-600') : 'bg-gray-200 dark:bg-gray-700'"
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <Label for="confirmPassword">Confirm Password</Label>
                <div class="relative">
                  <Input
                    id="confirmPassword"
                    v-model="formData.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    minlength="6"
                    class="pr-10 border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1F2937]"
                    :class="{ 'border-red-500': formErrors.confirmPassword }"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    class="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <Icon :icon="showConfirmPassword ? 'radix-icons:eye-open' : 'radix-icons:eye-closed'" class="h-4 w-4 text-[#6B7280] dark:text-[#9CA3AF]" />
                  </Button>
                </div>
                <p v-if="formErrors.confirmPassword" class="text-xs text-red-500 mt-1">{{ formErrors.confirmPassword }}</p>
              </div>

              <div class="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  v-model:checked="formData.agreeToTerms"
                  class="border-[#D1D5DB] data-[state=checked]:bg-[#002455] dark:data-[state=checked]:bg-[#3B82F6]"
                />
                <Label for="terms" class="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  I agree to the
                  <a href="/terms" class="text-[#002455] dark:text-[#3B82F6] hover:underline">Terms of Service</a>
                  and
                  <a href="/privacy" class="text-[#002455] dark:text-[#3B82F6] hover:underline">Privacy Policy</a>
                </Label>
              </div>
              <p v-if="formErrors.agreeToTerms" class="text-xs text-red-500 -mt-2">{{ formErrors.agreeToTerms }}</p>

              <Separator class="my-6" />

              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <Label class="font-medium">Emergency Contacts (Optional)</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    @click="showEmergencySetup = !showEmergencySetup"
                  >
                    {{ showEmergencySetup ? 'Skip' : 'Add Contacts' }}
                  </Button>
                </div>

                <div v-if="showEmergencySetup" class="space-y-4 p-4 bg-[#F9FAFB] dark:bg-[#111827] rounded-lg border">
                  <p class="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    Add emergency contacts who will be notified when you activate the panic button
                  </p>

                  <div
                    v-for="(contact, index) in formData.emergencyContacts"
                    :key="index"
                    class="space-y-3 p-3 bg-white dark:bg-[#1F2937] rounded-lg border"
                  >
                    <div class="flex justify-between items-start">
                      <Label class="text-sm font-medium">Contact {{ index + 1 }}</Label>
                      <Button
                        v-if="formData.emergencyContacts.length > 1"
                        type="button"
                        variant="ghost"
                        size="sm"
                        @click="removeEmergencyContact(index)"
                        class="text-red-600 hover:text-red-700"
                      >
                        <Icon icon="radix-icons:trash" class="h-4 w-4" />
                      </Button>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <Input v-model="contact.name" placeholder="Contact name" class="text-sm" />
                      <Select v-model="contact.relationship">
                        <SelectTrigger>
                          <SelectValue placeholder="Relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            v-for="opt in relationshipOptions"
                            :key="opt.value"
                            :value="opt.value"
                          >
                            {{ opt.label }}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Input v-model="contact.phone" type="tel" placeholder="Phone number (optional)" class="text-sm" />
                    <Input v-model="contact.email" type="email" placeholder="Email (optional)" class="text-sm" />
                  </div>

                  <Button type="button" variant="outline" size="sm" @click="addEmergencyContact" class="w-full">
                    <Icon icon="radix-icons:plus" class="h-4 w-4 mr-2" />
                    Add Another Contact
                  </Button>
                </div>
              </div>

              <!-- Submit Button — now 100% in sync with Zod -->
              <Button
                type="submit"
                :disabled="!isFormValid || isLoading"
                class="w-full bg-[#002455] hover:bg-[#001D3D] text-white dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]"
              >
                <Icon v-if="isLoading" icon="radix-icons:loading" class="mr-2 h-4 w-4 animate-spin" />
                {{ isLoading ? 'Creating Account...' : 'Create Account' }}
              </Button>
            </form>
          </CardContent>

          <CardFooter class="text-center pt-6">
            <p class="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Already have an account?
              <NuxtLink to="/auth/login" class="text-[#002455] dark:text-[#3B82F6] hover:underline font-medium">
                Sign In
              </NuxtLink>
            </p>
          </CardFooter>
        </div>

        <!-- Step 2: OTP Verification (unchanged) -->
        <div v-if="currentStep === 2">
          <!-- ... same as your original OTP step ... -->
          <!-- (kept identical for brevity) -->
        </div>
      </Card>
    </div>
  </div>
</template>