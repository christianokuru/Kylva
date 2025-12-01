# SafeRoute - UI Design System & Component Guide

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color Palette & Branding](#color-palette--branding)
3. [Typography & Fonts](#typography--fonts)
4. [Component System Overview](#component-system-overview)
5. [Page Layouts & Structure](#page-layouts--structure)
6. [Core Components](#core-components)
7. [Emergency-Specific Components](#emergency-specific-components)
8. [Responsive Design Guidelines](#responsive-design-guidelines)
9. [Accessibility Requirements](#accessibility-requirements)
10. [PWA & Offline UI](#pwa--offline-ui)
11. [Component Library Usage](#component-library-usage)
12. [Animation & Transitions](#animation--transitions)

---

## Design Philosophy

### Core Principles
- **Emergency-First**: Every design decision prioritizes speed and clarity during emergencies
- **Trust & Safety**: Visual design must convey reliability and professional security
- **Simplicity**: Minimal cognitive load, especially during high-stress situations
- **Accessibility**: Works for all users regardless of age, tech literacy, or physical abilities
- **Performance**: Fast loading even on low-end devices and poor network conditions

### Design Goals
- **1-Touch Emergency**: Panic button always accessible, maximum 1-2 seconds to trigger
- **Clarity in Crisis**: Large touch targets, high contrast, clear visual hierarchy
- **Calm Reassurance**: Professional, trustworthy design that reduces anxiety
- **Community Connection**: Visual elements that foster trust between responders and users in need

---

## Color Palette & Branding

### Primary Colors
```css
:root {
  /* Primary Brand Colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #002455; /* SafeRoute Blue */
  --color-primary-700: #001d3d;
  --color-primary-800: #001529;
  --color-primary-900: #000d14;

  /* Emergency Colors */
  --color-emergency-50: #fef2f2;
  --color-emergency-100: #fee2e2;
  --color-emergency-200: #fecaca;
  --color-emergency-300: #fca5a5;
  --color-emergency-400: #f87171;
  --color-emergency-500: #ef4444;
  --color-emergency-600: #FF3838; /* SafeRoute Emergency Red */
  --color-emergency-700: #b91c1c;
  --color-emergency-800: #991b1b;
  --color-emergency-900: #7f1d1d;

  /* Success Colors */
  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-200: #bbf7d0;
  --color-success-300: #86efac;
  --color-success-400: #4ade80;
  --color-success-500: #22c55e;
  --color-success-600: #10B981; /* Success Green */
  --color-success-700: #15803d;
  --color-success-800: #166534;
  --color-success-900: #14532d;

  /* Warning Colors */
  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-200: #fde68a;
  --color-warning-300: #fcd34d;
  --color-warning-400: #fbbf24;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;
  --color-warning-800: #92400e;
  --color-warning-900: #78350f;

  /* Neutral Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
}
```

### Semantic Color Usage
- **Emergency Red**: Panic buttons, critical alerts, danger zones
- **Primary Blue**: Trust elements, verified responders, professional services
- **Success Green**: Resolved emergencies, confirmed responders, safe areas
- **Warning Amber**: Pending responses, caution areas, system notifications
- **Neutral Gray**: Text, backgrounds, non-critical UI elements

---

## Typography & Fonts

### Font Family
```css
.font-sans {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Typography Scale
```css
.text-xs { font-size: 0.75rem; line-height: 1rem; }     /* 12px - Labels, metadata */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }  /* 14px - Secondary text */
.text-base { font-size: 1rem; line-height: 1.5rem; }     /* 16px - Body text */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }  /* 18px - Important text */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }   /* 20px - Section headers */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }      /* 24px - Page titles */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px - Hero text */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }   /* 36px - Emergency titles */
```

### Font Weights
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Secondary headings, labels
- **Semibold (600)**: Primary headings, buttons
- **Bold (700)**: Emergency alerts, critical information

---

## Component System Overview

### Design Tokens
```javascript
// app/assets/design-tokens.js
export const designTokens = {
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  borderRadius: {
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  }
}
```

### Component Categories
1. **Layout Components**: App shell, navigation, containers
2. **Form Components**: Inputs, buttons, form controls
3. **Display Components**: Cards, lists, badges
4. **Feedback Components**: Alerts, modals, toasts
5. **Navigation Components**: Tabs, breadcrumbs, pagination
6. **Emergency Components**: Panic button, alert cards, status indicators

---

## Application Structure & Navigation

### App Architecture
SafeRoute is a **private emergency response application** with the following flow:
1. **Authentication** → Login/Register with OTP
2. **Dashboard** → Main emergency command center
3. **Emergency Mode** → Activated when panic button triggered

### Main Layout Structure
```vue
<!-- app/layouts/default.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Emergency Bar (Fixed Top - Only when active) -->
    <EmergencyBar v-if="activeEmergency" />

    <!-- Main Content Area -->
    <main class="pb-20" :class="{ 'pt-16': activeEmergency }">
      <slot />
    </main>

    <!-- Floating Panic Button (Always accessible) -->
    <PanicButton v-if="!activeEmergency" />

    <!-- Bottom Navigation (Mobile) -->
    <BottomNavigation v-else />

    <!-- Notification Container -->
    <UNotifications />
  </div>
</template>
```

### Emergency Layout (When Panic Active)
```vue
<!-- app/layouts/emergency.vue -->
<template>
  <div class="min-h-screen bg-red-50">
    <!-- Emergency Status Bar (Always visible) -->
    <EmergencyStatusBar />

    <!-- Emergency Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Emergency Action Bar -->
    <EmergencyActionBar />
  </div>
</template>
```

### Dashboard Container Pattern
```vue
<template>
  <div class="container mx-auto px-4 py-6 max-w-7xl">
    <!-- Dashboard Header -->
    <div class="mb-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p class="text-gray-600 mt-1">Emergency response command center</p>
        </div>
        <div class="flex items-center space-x-3">
          <!-- User Status -->
          <div class="flex items-center space-x-2">
            <div class="h-2 w-2 bg-green-500 rounded-full"></div>
            <span class="text-sm text-gray-600">Online</span>
          </div>
          <!-- Notifications -->
          <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-bell"
            :badge="notificationCount"
          />
        </div>
      </div>
    </div>

    <!-- Dashboard Content -->
    <slot />
  </div>
</template>
```

---

## Core Components

### 1. Buttons

#### Primary Button
```vue
<template>
  <UButton
    :color="color"
    :variant="variant"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :block="block"
    class="transition-all duration-200"
  >
    <slot />
  </UButton>
</template>
```

**Usage Examples:**
```vue
<!-- Emergency Button (High Priority) -->
<UButton
  color="red"
  size="xl"
  block
  class="h-16 text-lg font-bold shadow-lg"
>
  🚨 Activate Panic Button
</UButton>

<!-- Secondary Action -->
<UButton
  color="blue"
  variant="outline"
  size="lg"
  icon="i-heroicons-shield-check"
>
  Accept Emergency
</UButton>

<!-- Success Button -->
<UButton
  color="green"
  size="md"
  icon="i-heroicons-check-circle"
>
  Mark as Resolved
</UButton>
```

#### Button Variants
- **Primary**: Solid fill for main actions
- **Secondary**: Outline for secondary actions
- **Ghost**: No border/background for subtle actions
- **Link**: Link-style for navigation

#### Button Sizes
- **xs**: 32px height - Small actions
- **sm**: 36px height - Secondary actions
- **md**: 40px height - Default size
- **lg**: 48px height - Important actions
- **xl**: 56px height - Primary/emergency actions

### 2. Cards

#### Emergency Alert Card
```vue
<template>
  <UCard
    :ui="{
      base: 'overflow-hidden border-l-4 ' + borderClass,
      divide: '',
      header: { padding: 'p-4 sm:p-6' },
      body: { padding: 'p-4 sm:p-6' },
      footer: { padding: 'p-4 sm:p-6' }
    }"
  >
    <template #header>
      <div class="flex items-start justify-between">
        <div class="flex items-center space-x-3">
          <div :class="iconClass" class="flex-shrink-0">
            <UIcon name="i-heroicons-exclamation-triangle" class="h-6 w-6" />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">
              {{ emergency.type }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ formatDistance(emergency.distance) }} away • {{ formatTime(emergency.createdAt) }}
            </p>
          </div>
        </div>
        <UBadge :color="statusColor" variant="subtle">
          {{ emergency.status }}
        </UBadge>
      </div>
    </template>

    <div class="space-y-4">
      <p class="text-gray-700">{{ emergency.description }}</p>

      <div class="flex items-center space-x-4 text-sm text-gray-500">
        <div class="flex items-center space-x-1">
          <UIcon name="i-heroicons-map-pin" class="h-4 w-4" />
          <span>{{ emergency.address }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <UIcon name="i-heroicons-users" class="h-4 w-4" />
          <span>{{ emergency.responders.length }} responders</span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex space-x-3">
        <UButton
          color="blue"
          variant="outline"
          size="sm"
          icon="i-heroicons-map"
          @click="viewOnMap"
        >
          View on Map
        </UButton>
        <UButton
          color="blue"
          size="sm"
          icon="i-heroicons-shield-check"
          @click="acceptEmergency"
        >
          Accept Response
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup>
const props = defineProps({
  emergency: Object,
})

const borderClass = computed(() => {
  const borders = {
    active: 'border-red-500',
    responding: 'border-blue-500',
    resolved: 'border-green-500'
  }
  return borders[props.emergency.status] || 'border-gray-500'
})

const iconClass = computed(() => {
  const colors = {
    active: 'bg-red-100 text-red-600',
    responding: 'bg-blue-100 text-blue-600',
    resolved: 'bg-green-100 text-green-600'
  }
  return colors[props.emergency.status] || 'bg-gray-100 text-gray-600'
})

const statusColor = computed(() => {
  const colors = {
    active: 'red',
    responding: 'blue',
    resolved: 'green'
  }
  return colors[props.emergency.status] || 'gray'
})
</script>
```

#### Responder Card
```vue
<template>
  <UCard class="hover:shadow-md transition-shadow duration-200">
    <div class="flex items-center space-x-4">
      <!-- Avatar -->
      <div class="relative">
        <UAvatar
          :src="responder.avatar"
          :alt="responder.name"
          size="lg"
          :ui="{
            background: 'bg-blue-100',
            text: 'text-blue-600',
            placeholder: 'font-medium'
          }"
        />
        <UBadge
          v-if="responder.isVerified"
          color="blue"
          variant="solid"
          size="xs"
          class="absolute -bottom-1 -right-1"
        >
          ✓
        </UBadge>
      </div>

      <!-- Info -->
      <div class="flex-1">
        <div class="flex items-center space-x-2">
          <h3 class="font-semibold text-gray-900">{{ responder.name }}</h3>
          <UBadge
            v-if="responder.isVerified"
            color="blue"
            variant="subtle"
            size="xs"
          >
            Verified
          </UBadge>
        </div>
        <p class="text-sm text-gray-500">{{ responder.type }}</p>

        <!-- Stats -->
        <div class="flex items-center space-x-4 mt-2 text-xs text-gray-500">
          <div class="flex items-center space-x-1">
            <UIcon name="i-heroicons-star" class="h-3 w-3 text-yellow-500" />
            <span>{{ responder.rating }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <UIcon name="i-heroicons-shield-check" class="h-3 w-3 text-green-500" />
            <span>{{ responder.totalResponses }} responses</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col space-y-2">
        <UButton
          color="blue"
          size="sm"
          icon="i-heroicons-phone"
          variant="outline"
        >
          Call
        </UButton>
        <UButton
          color="blue"
          size="sm"
          icon="i-heroicons-chat-bubble-left-right"
        >
          Chat
        </UButton>
      </div>
    </div>
  </UCard>
</template>
```

### 3. Forms

#### Login Form
```vue
<template>
  <UCard class="max-w-md mx-auto">
    <template #header>
      <div class="text-center">
        <div class="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <UIcon name="i-heroicons-shield-check" class="h-6 w-6 text-blue-600" />
        </div>
        <h2 class="text-2xl font-bold text-gray-900">Welcome to SafeRoute</h2>
        <p class="text-gray-600 mt-2">Sign in to your emergency response account</p>
      </div>
    </template>

    <UForm
      :schema="schema"
      :state="state"
      @submit="onSubmit"
    >
      <div class="space-y-4">
        <UFormGroup label="Email" name="email">
          <UInput
            v-model="state.email"
            type="email"
            placeholder="you@example.com"
            icon="i-heroicons-envelope"
            size="lg"
            autocomplete="email"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="state.password"
            type="password"
            placeholder="Enter your password"
            icon="i-heroicons-lock-closed"
            size="lg"
            autocomplete="current-password"
          />
        </UFormGroup>

        <div class="flex items-center justify-between">
          <UCheckbox
            v-model="state.remember"
            name="remember"
            label="Remember me"
          />
          <UButton
            color="blue"
            variant="ghost"
            size="sm"
            @click="forgotPassword"
          >
            Forgot password?
          </UButton>
        </div>

        <UButton
          type="submit"
          color="blue"
          size="lg"
          block
          :loading="loading"
        >
          Sign In
        </UButton>
      </div>
    </UForm>

    <template #footer>
      <div class="text-center">
        <p class="text-gray-600">
          Don't have an account?
          <UButton
            color="blue"
            variant="ghost"
            size="sm"
            @click="goToRegister"
          >
            Sign up
          </UButton>
        </p>
      </div>
    </template>
  </UCard>
</template>

<script setup>
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional().default(false)
})

const state = reactive({
  email: '',
  password: '',
  remember: false
})

const loading = ref(false)

const onSubmit = async (event) => {
  loading.value = true
  try {
    await login(event.data)
  } catch (error) {
    // Handle error
  } finally {
    loading.value = false
  }
}
</script>
```

#### Emergency Contact Form
```vue
<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold text-gray-900">
        Add Emergency Contact
      </h3>
      <p class="text-sm text-gray-500 mt-1">
        These contacts will be notified when you activate the panic button
      </p>
    </template>

    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormGroup label="Name" name="name">
          <UInput
            v-model="state.name"
            placeholder="Contact name"
            icon="i-heroicons-user"
          />
        </UFormGroup>

        <UFormGroup label="Relationship" name="relationship">
          <USelect
            v-model="state.relationship"
            :options="relationshipOptions"
            placeholder="Select relationship"
          />
        </UFormGroup>

        <UFormGroup label="Phone Number" name="phone">
          <UInput
            v-model="state.phone"
            placeholder="+234 800 000 0000"
            icon="i-heroicons-phone"
          />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput
            v-model="state.email"
            type="email"
            placeholder="contact@example.com"
            icon="i-heroicons-envelope"
          />
        </UFormGroup>

        <UFormGroup label="Priority" name="priority" class="md:col-span-2">
          <USelect
            v-model="state.priority"
            :options="priorityOptions"
            placeholder="Select priority level"
          />
        </UFormGroup>

        <UFormGroup class="md:col-span-2">
          <UCheckbox
            v-model="state.whatsappEnabled"
            name="whatsappEnabled"
            label="Enable WhatsApp notifications"
          />
        </UFormGroup>
      </div>

      <div class="flex justify-end space-x-3 mt-6">
        <UButton
          color="gray"
          variant="outline"
          @click="cancel"
        >
          Cancel
        </UButton>
        <UButton
          type="submit"
          color="blue"
          :loading="loading"
        >
          Add Contact
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>

<script setup>
const relationshipOptions = [
  { label: 'Family', value: 'family' },
  { label: 'Spouse', value: 'spouse' },
  { label: 'Friend', value: 'friend' },
  { label: 'Parent', value: 'parent' },
  { label: 'Sibling', value: 'sibling' },
  { label: 'Colleague', value: 'colleague' },
  { label: 'Other', value: 'other' }
]

const priorityOptions = [
  { label: 'Primary - Contact first', value: 1 },
  { label: 'Secondary - Contact second', value: 2 },
  { label: 'Tertiary - Contact third', value: 3 }
]
</script>
```

---

## Emergency-Specific Components

### 1. Panic Button
```vue
<template>
  <div class="fixed bottom-24 right-6 z-50 md:bottom-8">
    <!-- Pulse Animation for Urgency -->
    <div class="relative">
      <div class="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
      <div class="absolute inset-0 bg-red-500 rounded-full animate-ping animation-delay-200 opacity-50"></div>

      <!-- Main Button -->
      <UButton
        color="red"
        size="xl"
        :loading="activating"
        :disabled="disabled"
        class="relative h-20 w-20 rounded-full shadow-2xl transform transition-all duration-200 hover:scale-105 active:scale-95"
        @click="activatePanic"
      >
        <div class="flex flex-col items-center">
          <UIcon name="i-heroicons-exclamation-triangle" class="h-8 w-8" />
          <span class="text-xs font-bold mt-1">PANIC</span>
        </div>
      </UButton>
    </div>

    <!-- Confirmation Dialog -->
    <UModal v-model="showConfirmation" :ui="{ width: 'sm:max-w-md' }">
      <UCard>
        <template #header>
          <div class="text-center">
            <div class="mx-auto h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-exclamation-triangle" class="h-6 w-6 text-red-600" />
            </div>
            <h3 class="text-xl font-bold text-red-900">Activate Emergency Alert?</h3>
            <p class="text-red-700 mt-2">
              This will notify emergency contacts and nearby responders
            </p>
          </div>
        </template>

        <div class="space-y-4">
          <UFormGroup label="Emergency Type" name="type">
            <USelect
              v-model="emergencyType"
              :options="emergencyTypes"
              placeholder="Select emergency type"
            />
          </UFormGroup>

          <UFormGroup label="Description (Optional)" name="description">
            <UTextarea
              v-model="emergencyDescription"
              placeholder="Brief description of the emergency"
              :rows="3"
            />
          </UFormGroup>
        </div>

        <template #footer>
          <div class="flex space-x-3">
            <UButton
              color="gray"
              variant="outline"
              @click="showConfirmation = false"
              class="flex-1"
            >
              Cancel
            </UButton>
            <UButton
              color="red"
              @click="confirmEmergency"
              class="flex-1"
              :loading="activating"
            >
              Yes, Send Alert
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const showConfirmation = ref(false)
const activating = ref(false)
const disabled = ref(false)
const emergencyType = ref('')
const emergencyDescription = ref('')

const emergencyTypes = [
  { label: '🚨 Security Threat', value: 'security' },
  { label: '🏥 Medical Emergency', value: 'medical' },
  { label: '🚗 Accident', value: 'accident' },
  { label: '👥 Kidnapping', value: 'kidnapping' },
  { label: '💰 Robbery', value: 'robbery' },
  { label: '⚠️ Other', value: 'other' }
]

const activatePanic = () => {
  // Show confirmation dialog first
  showConfirmation.value = true
}

const confirmEmergency = async () => {
  activating.value = true
  disabled.value = true

  try {
    // Get current location
    const location = await getCurrentLocation()

    // Activate emergency
    await triggerEmergency({
      type: emergencyType.value,
      description: emergencyDescription.value,
      location: location.coords,
      timestamp: new Date()
    })

    showConfirmation.value = false
    // Navigate to emergency active page
    await navigateTo('/emergency/active')
  } catch (error) {
    console.error('Failed to activate emergency:', error)
    disabled.value = false
  } finally {
    activating.value = false
  }
}
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 200ms;
}
</style>
```

### 2. Emergency Status Bar
```vue
<template>
  <div class="bg-red-600 text-white shadow-lg z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <!-- Animated Icon -->
          <div class="animate-pulse">
            <UIcon name="i-heroicons-exclamation-triangle" class="h-6 w-6" />
          </div>

          <div>
            <h3 class="font-semibold">Emergency Active</h3>
            <p class="text-sm text-red-100">
              {{ activeEmergency.type }} • {{ responders.length }} responders nearby
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <!-- Timer -->
          <div class="text-sm font-mono bg-red-700 px-2 py-1 rounded">
            {{ formatElapsedTime }}
          </div>

          <!-- Cancel Button -->
          <UButton
            color="white"
            variant="solid"
            size="sm"
            @click="cancelEmergency"
          >
            Cancel
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeEmergency = ref({
  type: 'Security Threat',
  responders: 3,
  startTime: Date.now()
})

const formatElapsedTime = computed(() => {
  const elapsed = Date.now() - activeEmergency.value.startTime
  const minutes = Math.floor(elapsed / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})
</script>
```

### 3. Live Map Component
```vue
<template>
  <div class="relative h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden">
    <!-- Map Container -->
    <div id="emergency-map" class="w-full h-full"></div>

    <!-- Map Controls -->
    <div class="absolute top-4 right-4 z-10 space-y-2">
      <!-- Center on User -->
      <UButton
        color="white"
        variant="solid"
        size="sm"
        icon="i-heroicons-location-marker"
        class="shadow-lg"
        @click="centerOnUser"
      />

      <!-- Toggle Layers -->
      <UButton
        color="white"
        variant="solid"
        size="sm"
        icon="i-heroicons-layers"
        class="shadow-lg"
        @click="toggleLayers"
      />
    </div>

    <!-- Emergency Info Panel -->
    <div class="absolute bottom-4 left-4 right-4 z-10">
      <UCard class="backdrop-blur-sm bg-white/90">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-semibold text-gray-900">Emergency Location</h3>
            <p class="text-sm text-gray-600">{{ emergency.address }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <UBadge color="red" variant="subtle">
              {{ responders.length }} Responders
            </UBadge>
            <UBadge color="green" variant="subtle">
              {{ formatDistance }} away
            </UBadge>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Location Permission Prompt -->
    <div
      v-if="locationError"
      class="absolute inset-0 bg-black/50 flex items-center justify-center z-20"
    >
      <UCard class="max-w-sm">
        <template #header>
          <div class="text-center">
            <UIcon name="i-heroicons-map-pin" class="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <h3 class="text-lg font-semibold">Location Required</h3>
          </div>
        </template>
        <p class="text-gray-600 mb-4">
          Location access is required for emergency response and maps.
        </p>
        <UButton
          color="blue"
          block
          @click="requestLocation"
        >
          Enable Location
        </UButton>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const map = ref(null)
const emergency = ref({
  location: { lat: 6.5244, lng: 3.3792 },
  address: 'Lagos, Nigeria',
  responders: []
})
const locationError = ref(false)

onMounted(() => {
  initializeMap()
})

const initializeMap = () => {
  // Initialize Google Maps
  const mapElement = document.getElementById('emergency-map')
  map.value = new google.maps.Map(mapElement, {
    center: emergency.value.location,
    zoom: 15,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  })

  // Add emergency marker
  addEmergencyMarker()

  // Add responder markers
  emergency.value.responders.forEach(addResponderMarker)
}

const addEmergencyMarker = () => {
  new google.maps.Marker({
    position: emergency.value.location,
    map: map.value,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: '#FF3838',
      fillOpacity: 0.8,
      strokeColor: '#FFFFFF',
      strokeWeight: 3,
      animation: google.maps.Animation.BOUNCE
    },
    title: 'Emergency Location'
  })
}
</script>
```

### 4. Responder Status Panel
```vue
<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900">Active Responders</h3>
        <UBadge color="blue" variant="subtle">
          {{ responders.length }} Responding
        </UBadge>
      </div>
    </template>

    <div class="space-y-4">
      <!-- Responder List -->
      <div
        v-for="responder in responders"
        :key="responder.id"
        class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
      >
        <div class="flex items-center space-x-3">
          <!-- Avatar with Status -->
          <div class="relative">
            <UAvatar
              :src="responder.avatar"
              :alt="responder.name"
              size="md"
            />
            <div
              :class="getStatusColor(responder.status)"
              class="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white"
            />
          </div>

          <!-- Info -->
          <div>
            <h4 class="font-semibold text-gray-900">{{ responder.name }}</h4>
            <p class="text-sm text-gray-500">{{ responder.type }}</p>
          </div>
        </div>

        <!-- Status & Distance -->
        <div class="text-right">
          <div class="flex items-center space-x-1 text-sm">
            <UIcon name="i-heroicons-map-pin" class="h-4 w-4 text-gray-400" />
            <span>{{ formatDistance(responder.distance) }}</span>
          </div>
          <UBadge
            :color="getStatusBadgeColor(responder.status)"
            variant="subtle"
            size="xs"
            class="mt-1"
          >
            {{ responder.status }}
          </UBadge>
        </div>
      </div>

      <!-- No Responders -->
      <div
        v-if="responders.length === 0"
        class="text-center py-8"
      >
        <UIcon name="i-heroicons-users" class="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">No responders nearby yet</p>
        <p class="text-sm text-gray-400">Alert has been sent to emergency contacts</p>
      </div>
    </div>

    <!-- Action Buttons -->
    <template #footer>
      <div class="flex space-x-3">
        <UButton
          color="blue"
          variant="outline"
          icon="i-heroicons-phone"
          @click="callEmergencyServices"
        >
          Call Emergency Services
        </UButton>
        <UButton
          color="red"
          icon="i-heroicons-x-circle"
          @click="cancelEmergency"
        >
          Cancel Alert
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup>
const responders = ref([
  {
    id: '1',
    name: 'Ahmed Lawal',
    type: 'Verified Responder',
    avatar: null,
    status: 'en_route',
    distance: 2.3
  },
  {
    id: '2',
    name: 'Sarah Okonkwo',
    type: 'Regular Responder',
    avatar: null,
    status: 'responding',
    distance: 3.1
  }
])

const getStatusColor = (status) => {
  const colors = {
    en_route: 'bg-blue-500',
    responding: 'bg-yellow-500',
    arrived: 'bg-green-500',
    helping: 'bg-purple-500'
  }
  return colors[status] || 'bg-gray-500'
}

const getStatusBadgeColor = (status) => {
  const colors = {
    en_route: 'blue',
    responding: 'yellow',
    arrived: 'green',
    helping: 'purple'
  }
  return colors[status] || 'gray'
}
</script>
```

---

## Responsive Design Guidelines

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small phones and tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Laptops */
2xl: 1536px /* Desktops */
```

### Mobile-First Patterns

#### Dashboard Navigation Structure

#### Mobile Bottom Navigation
```vue
<!-- app/components/BottomNavigation.vue -->
<template>
  <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
    <div class="grid grid-cols-4 gap-1">
      <!-- Dashboard -->
      <UButton
        :color="currentRoute === '/' ? 'blue' : 'gray'"
        variant="ghost"
        class="flex-col h-16 rounded-none"
        @click="navigate('/')"
      >
        <UIcon name="i-heroicons-squares-2x2" class="h-5 w-5" />
        <span class="text-xs mt-1">Home</span>
      </UButton>

      <!-- Map -->
      <UButton
        :color="currentRoute === '/map' ? 'blue' : 'gray'"
        variant="ghost"
        class="flex-col h-16 rounded-none"
        @click="navigate('/map')"
      >
        <UIcon name="i-heroicons-map" class="h-5 w-5" />
        <span class="text-xs mt-1">Map</span>
      </UButton>

      <!-- Emergency Contacts -->
      <UButton
        :color="currentRoute === '/contacts' ? 'blue' : 'gray'"
        variant="ghost"
        class="flex-col h-16 rounded-none"
        @click="navigate('/contacts')"
      >
        <UIcon name="i-heroicons-phone" class="h-5 w-5" />
        <span class="text-xs mt-1">Contacts</span>
      </UButton>

      <!-- Profile -->
      <UButton
        :color="currentRoute === '/profile' ? 'blue' : 'gray'"
        variant="ghost"
        class="flex-col h-16 rounded-none"
        @click="navigate('/profile')"
      >
        <UIcon name="i-heroicons-user-circle" class="h-5 w-5" />
        <span class="text-xs mt-1">Profile</span>
      </UButton>
    </div>
  </div>
</template>
```

#### Desktop Sidebar Navigation
```vue
<!-- app/components/SidebarNavigation.vue -->
<template>
  <div class="hidden md:block fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-40">
    <!-- Logo & User Info -->
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <UAvatar :src="user.avatar" :alt="user.name" size="lg" />
        <div>
          <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
          <p class="text-sm text-gray-500">{{ user.phone }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation Items -->
    <nav class="p-4">
      <div class="space-y-1">
        <UButton
          v-for="item in navigation"
          :key="item.path"
          :color="currentRoute === item.path ? 'blue' : 'gray'"
          variant="ghost"
          class="w-full justify-start"
          :icon="item.icon"
          @click="navigate(item.path)"
        >
          {{ item.name }}
        </UButton>
      </div>

      <!-- Emergency Section -->
      <div class="mt-8">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Emergency
        </h3>
        <div class="space-y-1">
          <UButton
            color="red"
            variant="outline"
            class="w-full justify-start"
            icon="i-heroicons-exclamation-triangle"
            @click="triggerEmergency"
          >
            Activate Panic Button
          </UButton>
          <UButton
            color="blue"
            variant="ghost"
            class="w-full justify-start"
            icon="i-heroicons-shield-check"
            @click="navigate('/responder')"
          >
            Responder Mode
          </UButton>
        </div>
      </div>
    </nav>

    <!-- Bottom Actions -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full justify-start"
        icon="i-heroicons-arrow-right-on-rectangle"
        @click="logout"
      >
        Sign Out
      </UButton>
    </div>
  </div>
</template>

<script setup>
const user = useAuthStore().user
const currentRoute = useRoute().path

const navigation = [
  { name: 'Dashboard', path: '/', icon: 'i-heroicons-squares-2x2' },
  { name: 'Live Map', path: '/map', icon: 'i-heroicons-map' },
  { name: 'Emergency Contacts', path: '/contacts', icon: 'i-heroicons-phone' },
  { name: 'Profile', path: '/profile', icon: 'i-heroicons-user-circle' },
  { name: 'Settings', path: '/settings', icon: 'i-heroicons-cog-6-tooth' }
]
</script>
```

#### Responsive Cards
```vue
<template>
  <!-- Mobile: Stacked Layout -->
  <div class="md:hidden space-y-4">
    <div class="p-4 bg-white rounded-lg shadow">
      <!-- Mobile content -->
    </div>
  </div>

  <!-- Desktop: Grid Layout -->
  <div class="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow p-6">
      <!-- Desktop content -->
    </div>
  </div>
</template>
```

#### Responsive Typography
```vue
<template>
  <!-- Mobile: Smaller text, more compact -->
  <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">
    Emergency Response System
  </h1>

  <p class="text-sm md:text-base text-gray-600">
    Get help from nearby responders in seconds
  </p>
</template>
```

### Touch-Friendly Design

#### Minimum Touch Targets
```css
/* Minimum 44px touch targets for accessibility */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* Even larger for emergency actions */
.emergency-target {
  min-height: 56px;
  min-width: 56px;
}
```

#### Button Spacing
```vue
<template>
  <!-- Adequate spacing between interactive elements -->
  <div class="space-y-3">
    <UButton size="lg" block>Primary Action</UButton>
    <UButton size="lg" block variant="outline">Secondary Action</UButton>
  </div>
</template>
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

#### Color Contrast
```css
/* Ensure 4.5:1 contrast for normal text */
.text-primary {
  color: #111827; /* Gray 900 */
}

/* Ensure 3:1 contrast for large text */
.text-large {
  color: #374151; /* Gray 700 */
}
```

#### Focus Indicators
```vue
<template>
  <UButton
    class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    aria-label="Activate emergency alert"
  >
    Panic Button
  </UButton>
</template>
```

#### Screen Reader Support
```vue
<template>
  <!-- Semantic HTML -->
  <main role="main" aria-label="Main content">
    <section aria-labelledby="emergency-heading">
      <h2 id="emergency-heading">Active Emergencies</h2>

      <!-- Emergency alerts with live regions -->
      <div
        v-for="emergency in emergencies"
        :key="emergency.id"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        class="p-4 bg-red-50 border-l-4 border-red-500 rounded"
      >
        <h3 class="font-semibold">{{ emergency.type }}</h3>
        <p class="text-sm text-gray-600">{{ emergency.description }}</p>
      </div>
    </section>
  </main>
</template>
```

#### Keyboard Navigation
```vue
<template>
  <!-- Keyboard-accessible navigation -->
  <nav role="navigation" aria-label="Main navigation">
    <ul class="flex space-x-4">
      <li>
        <UButton
          variant="ghost"
          :to="'/'"
          class="focus:ring-2 focus:ring-blue-500"
        >
          Home
        </UButton>
      </li>
      <li>
        <UButton
          variant="ghost"
          :to="'/emergency'"
          class="focus:ring-2 focus:ring-blue-500"
        >
          Emergency
        </UButton>
      </li>
    </ul>
  </nav>
</template>
```

### Emergency Mode Accessibility

#### High Contrast Mode
```css
@media (prefers-contrast: high) {
  .emergency-mode {
    background: black;
    color: white;
    border: 2px solid white;
  }

  .emergency-button {
    background: #ff0000;
    color: #ffffff;
    border: 3px solid #ffffff;
  }
}
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .animate-ping,
  .animate-bounce,
  .animate-pulse {
    animation: none;
  }

  .transition-all {
    transition: none;
  }
}
```

---

## PWA & Offline UI

### Offline Detection
```vue
<template>
  <div
    v-if="isOffline"
    class="fixed top-0 left-0 right-0 bg-yellow-500 text-white z-50"
  >
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <UIcon name="i-heroicons-wifi-slash" class="h-5 w-5" />
          <span class="font-medium">Offline Mode</span>
          <span class="text-sm">Emergency features still available</span>
        </div>
        <UButton
          color="white"
          variant="solid"
          size="sm"
          @click="retryConnection"
        >
          Retry
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOffline = ref(!navigator.onLine)

onMounted(() => {
  window.addEventListener('online', () => {
    isOffline.value = false
  })

  window.addEventListener('offline', () => {
    isOffline.value = true
  })
})
</script>
```

### Offline Emergency Mode
```vue
<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Offline Header -->
    <div class="bg-blue-600 text-white p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <UIcon name="i-heroicons-wifi-slash" class="h-5 w-5" />
          <span class="font-medium">Offline Mode</span>
        </div>
        <span class="text-sm">Emergency features active</span>
      </div>
    </div>

    <!-- Emergency Functions Available Offline -->
    <div class="p-4 space-y-4">
      <!-- Panic Button (Always Available) -->
      <UCard class="bg-red-50 border-red-200">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-red-900 mb-2">
            Emergency Alert Available
          </h3>
          <p class="text-red-700 mb-4">
            You can still trigger emergency alerts and call emergency services
          </p>

          <UButton
            color="red"
            size="xl"
            block
            icon="i-heroicons-exclamation-triangle"
            @click="activateOfflineEmergency"
          >
            Activate Emergency Alert
          </UButton>
        </div>
      </UCard>

      <!-- Emergency Contacts -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">
            Emergency Contacts
          </h3>
        </template>

        <div class="space-y-3">
          <div
            v-for="contact in emergencyContacts"
            :key="contact.id"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <h4 class="font-medium text-gray-900">{{ contact.name }}</h4>
              <p class="text-sm text-gray-500">{{ contact.relationship }}</p>
            </div>
            <UButton
              color="blue"
              variant="outline"
              size="sm"
              icon="i-heroicons-phone"
              :href="`tel:${contact.phone}`"
            >
              Call
            </UButton>
          </div>
        </div>
      </UCard>

      <!-- Emergency Numbers -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">
            Emergency Services
          </h3>
        </template>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <UButton
            color="red"
            variant="outline"
            block
            icon="i-heroicons-phone"
            :href="'tel:112'"
          >
            112 - Emergency
          </UButton>
          <UButton
            color="blue"
            variant="outline"
            block
            icon="i-heroicons-phone"
            :href="'tel:767'"
          >
            767 - Police
          </UButton>
          <UButton
            color="green"
            variant="outline"
            block
            icon="i-heroicons-phone"
            :href="'tel:122'"
          >
            122 - Ambulance
          </UButton>
          <UButton
            color="orange"
            variant="outline"
            block
            icon="i-heroicons-phone"
            :href="'tel:123'"
          >
            123 - Fire Service
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
```

### Loading States
```vue
<template>
  <!-- Skeleton Loading -->
  <div v-if="loading" class="animate-pulse">
    <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div class="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>

  <!-- Content Loaded -->
  <div v-else>
    <!-- Actual content -->
  </div>
</template>
```

---

## Component Library Usage

### Nuxt UI Configuration
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  ui: {
    global: true,
    icons: ['heroicons']
  },

  // Custom UI theme
  ui: {
    primary: 'blue',
    gray: 'slate',

    // Custom button styles
    button: {
      base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      size: {
        '2xl': 'text-lg h-16 px-8 py-3',
        xl: 'text-base h-14 px-6 py-3',
        lg: 'text-sm h-12 px-5 py-2.5',
        md: 'text-sm h-10 px-4 py-2',
        sm: 'text-xs h-9 px-3 py-1.5',
        xs: 'text-xs h-8 px-2.5 py-1'
      }
    },

    // Custom card styles
    card: {
      base: 'overflow-hidden',
      background: 'bg-white',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
      rounded: 'rounded-lg',
      shadow: 'shadow-sm',
      header: {
        padding: 'px-6 py-4',
        base: 'flex items-center justify-between'
      },
      body: {
        padding: 'px-6 py-4'
      },
      footer: {
        padding: 'px-6 py-4'
      }
    }
  }
})
```

### Custom Theme Overrides
```css
/* assets/css/custom.css */
:root {
  --ui-primary: 59 130 246;      /* blue-500 */
  --ui-primary-50: 239 246 255;  /* blue-50 */
  --ui-primary-500: 59 130 246;  /* blue-500 */
  --ui-primary-600: 37 99 235;   /* blue-600 */

  --ui-red: 239 68 68;           /* red-500 */
  --ui-red-50: 254 242 242;     /* red-50 */
  --ui-red-500: 239 68 68;      /* red-500 */
  --ui-red-600: 220 38 38;      /* red-600 */
}

/* Emergency mode specific styles */
.emergency-mode {
  --ui-primary: var(--ui-red);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --ui-bg: 17 24 39;          /* gray-900 */
    --ui-text: 243 244 246;     /* gray-100 */
  }
}
```

### Icon Usage
```vue
<template>
  <!-- Consistent icon usage across components -->
  <div class="space-y-4">
    <!-- Emergency Icons -->
    <UIcon name="i-heroicons-exclamation-triangle" class="text-red-500" />
    <UIcon name="i-heroicons-shield-check" class="text-blue-500" />
    <UIcon name="i-heroicons-bell-alert" class="text-yellow-500" />

    <!-- Navigation Icons -->
    <UIcon name="i-heroicons-home" />
    <UIcon name="i-heroicons-map" />
    <UIcon name="i-heroicons-user" />
    <UIcon name="i-heroicons-cog-6-tooth" />

    <!-- Status Icons -->
    <UIcon name="i-heroicons-check-circle" class="text-green-500" />
    <UIcon name="i-heroicons-x-circle" class="text-red-500" />
    <UIcon name="i-heroicons-clock" class="text-yellow-500" />
  </div>
</template>
```

---

## Animation & Transitions

### Emergency Animations
```vue
<template>
  <div class="relative">
    <!-- Urgent Pulse Animation -->
    <div
      class="absolute inset-0 bg-red-500 rounded-full animate-ping"
      :class="{ 'hidden': !isEmergency }"
    ></div>

    <!-- Bounce Animation for Attention -->
    <div
      class="bg-red-600 text-white rounded-full p-4"
      :class="{ 'animate-bounce': needsAttention }"
    >
      <UIcon name="i-heroicons-bell" class="h-6 w-6" />
    </div>
  </div>
</template>
```

### Smooth Page Transitions
```vue
<template>
  <div>
    <!-- Page transition -->
    <Transition
      name="page"
      mode="out-in"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform translate-x-full"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform -translate-x-full"
    >
      <NuxtPage />
    </Transition>
  </div>
</template>
```

### Notification Animations
```vue
<template>
  <!-- Slide in from top -->
  <Transition
    name="notification"
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 transform -translate-y-full"
    enter-to-class="opacity-100 transform translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 transform translate-y-0"
    leave-to-class="opacity-0 transform -translate-y-full"
  >
    <UNotification
      v-if="show"
      :title="notification.title"
      :description="notification.description"
      :timeout="5000"
    />
  </Transition>
</template>
```

### Loading Animations
```vue
<template>
  <!-- Smooth loading states -->
  <div class="relative">
    <!-- Content -->
    <div :class="{ 'opacity-50': loading }">
      <slot />
    </div>

    <!-- Loading overlay -->
    <Transition
      name="fade"
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
    >
      <div
        v-if="loading"
        class="absolute inset-0 bg-white/80 flex items-center justify-center"
      >
        <div class="flex items-center space-x-2">
          <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span class="text-sm text-gray-600">Loading...</span>
        </div>
      </div>
    </Transition>
  </div>
</template>
```

---

## Implementation Checklist

### Phase 1: Authentication Flow
- [ ] Login/Register forms with OTP verification
- [ ] Email verification with Resend integration
- [ ] Password reset functionality
- [ ] Remember me and auto-login options

### Phase 2: Core Dashboard Components
- [ ] Main dashboard with emergency overview
- [ ] Live panic button with animations
- [ ] Emergency alert cards with status indicators
- [ ] Responder cards with verification badges
- [ ] Emergency contacts management

### Phase 3: Navigation & Layouts
- [ ] Mobile bottom navigation (4-tab layout)
- [ ] Desktop sidebar navigation with user profile
- [ ] Responsive dashboard layouts
- [ ] Emergency mode layout overrides

### Phase 4: Map & Real-time Features
- [ ] Live map integration with Google Maps
- [ ] Real-time location tracking
- [ ] Custom map markers for emergencies/responders
- [ ] Route calculation and distance display

### Phase 5: Accessibility & PWA
- [ ] WCAG 2.1 AA compliance
- [ ] Screen reader support with ARIA labels
- [ ] Keyboard navigation support
- [ ] Service worker for offline emergency mode
- [ ] App manifest for PWA installation

### Phase 6: Polish & Optimization
- [ ] Emergency animations and transitions
- [ ] Loading states for real-time data
- [ ] Error handling with user-friendly messages
- [ ] Dark mode support for night use
- [ ] Performance optimization for low-end devices

This comprehensive UI design system provides a solid foundation for building the SafeRoute emergency response platform with Nuxt UI components. The design prioritizes emergency scenarios while maintaining a professional, trustworthy appearance that builds user confidence.

---

**Document Version**: 1.0
**Last Updated**: December 1, 2024
**Author**: Chris, Fullstack Developer
**Project**: SafeRoute Emergency Response Platform