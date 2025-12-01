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
  /* Light Mode Colors */
  --background: #FAFAFA; /* off-white, not pure white - easier on eyes */
  --foreground: #0A0A0A; /* almost black text */
  --accent-primary: #002455; /* SafeRoute Blue - trust & authority */
  --accent-emergency: #FF3838; /* Emergency Red - urgency */
  --accent-success: #10B981; /* Success Green - hope & community */
  --neutral-50: #F9FAFB;
  --neutral-100: #F3F4F6;
  --neutral-200: #E5E7EB;
  --neutral-600: #4B5563;
  --neutral-900: #111827;

  /* Extended Color Palette */
  --accent-primary-50: #EEF2FF;
  --accent-primary-100: #E0E7FF;
  --accent-primary-200: #C7D2FE;
  --accent-primary-300: #A5B4FC;
  --accent-primary-400: #818CF8;
  --accent-primary-500: #6366F1;
  --accent-primary-700: #4338CA;
  --accent-primary-800: #3730A3;
  --accent-primary-900: #312E81;

  /* Emergency Color Variations */
  --accent-emergency-50: #FEF2F2;
  --accent-emergency-100: #FEE2E2;
  --accent-emergency-200: #FECACA;
  --accent-emergency-300: #FCA5A5;
  --accent-emergency-400: #F87171;
  --accent-emergency-500: #EF4444;
  --accent-emergency-700: #B91C1C;
  --accent-emergency-800: #991B1B;
  --accent-emergency-900: #7F1D1D;

  /* Success Color Variations */
  --accent-success-50: #F0FDF4;
  --accent-success-100: #DCFCE7;
  --accent-success-200: #BBF7D0;
  --accent-success-300: #86EFAC;
  --accent-success-400: #4ADE80;
  --accent-success-500: #22C55E;
  --accent-success-700: #15803D;
  --accent-success-800: #166534;
  --accent-success-900: #14532D;

  /* Neutral Color Scale */
  --neutral-300: #D1D5DB;
  --neutral-400: #9CA3AF;
  --neutral-500: #6B7280;
  --neutral-700: #374151;
  --neutral-800: #1F2937;
}
```

### Dark Mode Colors
```css
.dark {
  /* Dark Mode Colors */
  --background: #0A0A0A; /* deep black */
  --foreground: #FAFAFA; /* off-white */
  --accent-primary: #3B82F6; /* lighter blue for dark mode readability */
  --accent-emergency: #F87171; /* softer red for dark mode */
  --accent-success: #34D399; /* brighter green for dark mode */

  /* Dark Mode Neutral Colors */
  --neutral-50: #111827;
  --neutral-100: #1F2937;
  --neutral-200: #374151;
  --neutral-300: #4B5563;
  --neutral-400: #6B7280;
  --neutral-500: #9CA3AF;
  --neutral-600: #D1D5DB;
  --neutral-700: #E5E7EB;
  --neutral-800: #F3F4F6;
  --neutral-900: #F9FAFB;
}
```

### Semantic Color Usage
- **Emergency Red (#FF3838)**: Panic buttons, critical alerts, danger zones
- **Primary Blue (#002455)**: Trust elements, verified responders, professional services
- **Success Green (#10B981)**: Resolved emergencies, confirmed responders, safe areas
- **Dark Mode Blue (#3B82F6)**: Primary actions in dark mode for better readability
- **Dark Mode Red (#F87171)**: Emergency elements in dark mode
- **Dark Mode Green (#34D399)**: Success elements in dark mode
- **Neutral Grays**: Text, backgrounds, non-critical UI elements with proper light/dark mode variants

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
          <Button
            variant="ghost"
            size="sm"
          >
            <Bell class="h-4 w-4" />
            <Badge v-if="notificationCount" variant="destructive" class="ml-1">
              {{ notificationCount }}
            </Badge>
          </Button>
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
  <Button
    :variant="getVariant(variant)"
    :size="getSize(size)"
    :disabled="disabled"
    :class="[block ? 'w-full' : '', 'transition-all duration-200']"
  >
    <slot />
  </Button>
</template>

<script setup>
const props = defineProps({
  color: String,
  variant: String,
  size: String,
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  block: Boolean
})

const getVariant = (variant) => {
  // Map Nuxt UI variants to shadcn-vue variants
  const variantMap = {
    'solid': 'default',
    'outline': 'outline',
    'ghost': 'ghost',
    'link': 'link',
    'soft': 'secondary'
  }
  return variantMap[variant] || 'default'
}

const getSize = (size) => {
  // Map Nuxt UI sizes to shadcn-vue sizes
  const sizeMap = {
    '2xl': 'lg',
    'xl': 'default',
    'lg': 'default',
    'md': 'default',
    'sm': 'sm',
    'xs': 'sm'
  }
  return sizeMap[size] || 'default'
}
</script>
```

**Usage Examples:**
```vue
<!-- Emergency Button (High Priority) -->
<Button
  variant="destructive"
  size="lg"
  class="w-full h-16 text-lg font-bold shadow-lg"
>
  🚨 Activate Panic Button
</Button>

<!-- Secondary Action -->
<Button
  variant="outline"
  size="default"
  class="flex items-center gap-2"
>
  <ShieldCheck class="h-4 w-4" />
  Accept Emergency
</Button>

<!-- Success Button -->
<Button
  variant="default"
  size="sm"
  class="flex items-center gap-2 bg-green-600 hover:bg-green-700"
>
  <CheckCircle class="h-4 w-4" />
  Mark as Resolved
</Button>
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
  <Card :class="'overflow-hidden border-l-4 ' + borderClass">
    <CardHeader class="p-4 sm:p-6 pb-3">
      <div class="flex items-start justify-between">
        <div class="flex items-center space-x-3">
          <div :class="iconClass" class="flex-shrink-0">
            <AlertTriangle class="h-6 w-6" />
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
        <Badge :variant="getBadgeVariant(statusColor)">
          {{ emergency.status }}
        </Badge>
      </div>
    </CardHeader>

    <CardContent class="p-4 sm:p-6 pt-3">
      <div class="space-y-4">
        <p class="text-gray-700">{{ emergency.description }}</p>

        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <div class="flex items-center space-x-1">
            <MapPin class="h-4 w-4" />
            <span>{{ emergency.address }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <Users class="h-4 w-4" />
            <span>{{ emergency.responders.length }} responders</span>
          </div>
        </div>
      </div>
    </CardContent>

    <CardFooter class="p-4 sm:p-6 pt-3">
      <div class="flex space-x-3">
        <Button
          variant="outline"
          size="sm"
          class="flex items-center gap-2"
          @click="viewOnMap"
        >
          <Map class="h-4 w-4" />
          View on Map
        </Button>
        <Button
          variant="default"
          size="sm"
          class="flex items-center gap-2"
          @click="acceptEmergency"
        >
          <ShieldCheck class="h-4 w-4" />
          Accept Response
        </Button>
      </div>
    </CardFooter>
  </Card>
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

const getBadgeVariant = (color) => {
  const variantMap = {
    'red': 'destructive',
    'blue': 'default',
    'green': 'default',
    'gray': 'secondary'
  }
  return variantMap[color] || 'secondary'
}
</script>
```

#### Responder Card
```vue
<template>
  <Card class="hover:shadow-md transition-shadow duration-200">
    <CardContent class="p-6">
      <div class="flex items-center space-x-4">
        <!-- Avatar -->
        <div class="relative">
          <Avatar
            :src="responder.avatar"
            :alt="responder.name"
            class="h-12 w-12"
          >
            <AvatarFallback class="bg-blue-100 text-blue-600 font-medium">
              {{ responder.name.charAt(0).toUpperCase() }}
            </AvatarFallback>
          </Avatar>
          <Badge
            v-if="responder.isVerified"
            variant="default"
            class="absolute -bottom-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-blue-600"
          >
            <Check class="h-3 w-3 text-white" />
          </Badge>
        </div>

        <!-- Info -->
        <div class="flex-1">
          <div class="flex items-center space-x-2">
            <h3 class="font-semibold text-gray-900">{{ responder.name }}</h3>
            <Badge
              v-if="responder.isVerified"
              variant="secondary"
              class="text-xs"
            >
              Verified
            </Badge>
          </div>
          <p class="text-sm text-gray-500">{{ responder.type }}</p>

          <!-- Stats -->
          <div class="flex items-center space-x-4 mt-2 text-xs text-gray-500">
            <div class="flex items-center space-x-1">
              <Star class="h-3 w-3 text-yellow-500 fill-current" />
              <span>{{ responder.rating }}</span>
            </div>
            <div class="flex items-center space-x-1">
              <ShieldCheck class="h-3 w-3 text-green-500" />
              <span>{{ responder.totalResponses }} responses</span>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col space-y-2">
          <Button
            variant="outline"
            size="sm"
            class="flex items-center gap-2"
          >
            <Phone class="h-4 w-4" />
            Call
          </Button>
          <Button
            variant="default"
            size="sm"
            class="flex items-center gap-2"
          >
            <MessageCircle class="h-4 w-4" />
            Chat
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
```

### 3. Forms

#### Login Form
```vue
<template>
  <Card class="max-w-md mx-auto">
    <CardHeader class="text-center">
      <div class="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <ShieldCheck class="h-6 w-6 text-blue-600" />
      </div>
      <CardTitle class="text-2xl font-bold text-gray-900">Welcome to SafeRoute</CardTitle>
      <CardDescription class="text-gray-600 mt-2">
        Sign in to your emergency response account
      </CardDescription>
    </CardHeader>

    <CardContent>
      <form @submit="onSubmit" class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="state.email"
            type="email"
            placeholder="you@example.com"
            autocomplete="email"
            class="h-11"
          />
        </div>

        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            v-model="state.password"
            type="password"
            placeholder="Enter your password"
            autocomplete="current-password"
            class="h-11"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <Checkbox id="remember" v-model="state.remember" />
            <Label for="remember" class="text-sm">Remember me</Label>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            @click="forgotPassword"
          >
            Forgot password?
          </Button>
        </div>

        <Button
          type="submit"
          class="w-full h-11"
          :disabled="loading"
        >
          <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
          Sign In
        </Button>
      </form>
    </CardContent>

    <CardFooter class="text-center">
      <p class="text-gray-600">
        Don't have an account?
        <Button
          type="button"
          variant="ghost"
          size="sm"
          @click="goToRegister"
        >
          Sign up
        </Button>
      </p>
    </CardFooter>
  </Card>
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
  <Card>
    <CardHeader>
      <CardTitle class="text-lg font-semibold text-gray-900">
        Add Emergency Contact
      </CardTitle>
      <CardDescription class="text-sm text-gray-500 mt-1">
        These contacts will be notified when you activate the panic button
      </CardDescription>
    </CardHeader>

    <CardContent>
      <form @submit="onSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label for="name">Name</Label>
            <Input
              id="name"
              v-model="state.name"
              placeholder="Contact name"
            />
          </div>

          <div class="space-y-2">
            <Label for="relationship">Relationship</Label>
            <Select v-model="state.relationship">
              <SelectTrigger>
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="option in relationshipOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="space-y-2">
            <Label for="phone">Phone Number</Label>
            <Input
              id="phone"
              v-model="state.phone"
              placeholder="+234 800 000 0000"
            />
          </div>

          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              v-model="state.email"
              type="email"
              placeholder="contact@example.com"
            />
          </div>

          <div class="space-y-2 md:col-span-2">
            <Label for="priority">Priority</Label>
            <Select v-model="state.priority">
              <SelectTrigger>
                <SelectValue placeholder="Select priority level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="option in priorityOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="md:col-span-2">
            <div class="flex items-center space-x-2">
              <Checkbox id="whatsapp" v-model="state.whatsappEnabled" />
              <Label for="whatsapp">Enable WhatsApp notifications</Label>
            </div>
          </div>
        </div>

        <div class="flex justify-end space-x-3">
          <Button
            type="button"
            variant="outline"
            @click="cancel"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            :disabled="loading"
          >
            <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
            Add Contact
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
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
      <Button
        variant="destructive"
        size="lg"
        :disabled="disabled"
        class="relative h-20 w-20 rounded-full shadow-2xl transform transition-all duration-200 hover:scale-105 active:scale-95"
        @click="activatePanic"
      >
        <div v-if="!activating" class="flex flex-col items-center">
          <AlertTriangle class="h-8 w-8" />
          <span class="text-xs font-bold mt-1">PANIC</span>
        </div>
        <Loader2 v-else class="h-6 w-6 animate-spin" />
      </Button>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:open="showConfirmation">
      <DialogContent class="sm:max-w-md">
        <DialogHeader class="text-center">
          <div class="mx-auto h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle class="h-6 w-6 text-red-600" />
          </div>
          <DialogTitle class="text-xl font-bold text-red-900">
            Activate Emergency Alert?
          </DialogTitle>
          <DialogDescription class="text-red-700 mt-2">
            This will notify emergency contacts and nearby responders
          </DialogDescription>
        </DialogHeader>

        <div class="space-y-4 py-4">
          <div class="space-y-2">
            <Label for="emergency-type">Emergency Type</Label>
            <Select v-model="emergencyType">
              <SelectTrigger>
                <SelectValue placeholder="Select emergency type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="type in emergencyTypes"
                  :key="type.value"
                  :value="type.value"
                >
                  {{ type.label }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="space-y-2">
            <Label for="description">Description (Optional)</Label>
            <Textarea
              id="description"
              v-model="emergencyDescription"
              placeholder="Brief description of the emergency"
              :rows="3"
            />
          </div>
        </div>

        <DialogFooter class="flex space-x-3">
          <Button
            type="button"
            variant="outline"
            @click="showConfirmation = false"
            class="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            @click="confirmEmergency"
            class="flex-1"
            :disabled="activating"
          >
            <Loader2 v-if="activating" class="mr-2 h-4 w-4 animate-spin" />
            Yes, Send Alert
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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
            <AlertTriangle class="h-6 w-6" />
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
          <Button
            variant="secondary"
            size="sm"
            @click="cancelEmergency"
          >
            Cancel
          </Button>
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
      <Button
        variant="secondary"
        size="sm"
        class="shadow-lg bg-white hover:bg-gray-50"
        @click="centerOnUser"
      >
        <MapPin class="h-4 w-4" />
      </Button>

      <!-- Toggle Layers -->
      <Button
        variant="secondary"
        size="sm"
        class="shadow-lg bg-white hover:bg-gray-50"
        @click="toggleLayers"
      >
        <Layers class="h-4 w-4" />
      </Button>
    </div>

    <!-- Emergency Info Panel -->
    <div class="absolute bottom-4 left-4 right-4 z-10">
      <Card class="backdrop-blur-sm bg-white/90">
        <CardContent class="p-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-semibold text-gray-900">Emergency Location</h3>
              <p class="text-sm text-gray-600">{{ emergency.address }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <Badge variant="destructive">
                {{ responders.length }} Responders
              </Badge>
              <Badge variant="default" class="bg-green-600 hover:bg-green-700">
                {{ formatDistance }} away
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Location Permission Prompt -->
    <div
      v-if="locationError"
      class="absolute inset-0 bg-black/50 flex items-center justify-center z-20"
    >
      <Card class="max-w-sm">
        <CardHeader class="text-center">
          <MapPin class="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <CardTitle class="text-lg font-semibold">Location Required</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-gray-600 mb-4">
            Location access is required for emergency response and maps.
          </p>
          <Button
            variant="default"
            class="w-full"
            @click="requestLocation"
          >
            Enable Location
          </Button>
        </CardContent>
      </Card>
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
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="text-lg font-semibold text-gray-900">Active Responders</CardTitle>
        <Badge variant="default" class="bg-blue-600 hover:bg-blue-700">
          {{ responders.length }} Responding
        </Badge>
      </div>
    </CardHeader>

    <CardContent class="space-y-4">
      <!-- Responder List -->
      <div
        v-for="responder in responders"
        :key="responder.id"
        class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
      >
        <div class="flex items-center space-x-3">
          <!-- Avatar with Status -->
          <div class="relative">
            <Avatar
              :src="responder.avatar"
              :alt="responder.name"
              class="h-10 w-10"
            >
              <AvatarFallback>
                {{ responder.name.charAt(0).toUpperCase() }}
              </AvatarFallback>
            </Avatar>
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
            <MapPin class="h-4 w-4 text-gray-400" />
            <span>{{ formatDistance(responder.distance) }}</span>
          </div>
          <Badge
            :variant="getStatusBadgeVariant(responder.status)"
            size="sm"
            class="mt-1"
          >
            {{ responder.status }}
          </Badge>
        </div>
      </div>

      <!-- No Responders -->
      <div
        v-if="responders.length === 0"
        class="text-center py-8"
      >
        <Users class="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-500">No responders nearby yet</p>
        <p class="text-sm text-gray-400">Alert has been sent to emergency contacts</p>
      </div>
    </CardContent>

    <!-- Action Buttons -->
    <CardFooter class="flex space-x-3">
      <Button
        variant="outline"
        class="flex items-center gap-2"
        @click="callEmergencyServices"
      >
        <Phone class="h-4 w-4" />
        Call Emergency Services
      </Button>
      <Button
        variant="destructive"
        class="flex items-center gap-2"
        @click="cancelEmergency"
      >
        <XCircle class="h-4 w-4" />
        Cancel Alert
      </Button>
    </CardFooter>
  </Card>
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

const getStatusBadgeVariant = (status) => {
  const variants = {
    en_route: 'default',
    responding: 'secondary',
    arrived: 'default',
    helping: 'default'
  }

  const variantMap = {
    en_route: 'bg-blue-600 hover:bg-blue-700',
    responding: 'bg-yellow-600 hover:bg-yellow-700',
    arrived: 'bg-green-600 hover:bg-green-700',
    helping: 'bg-purple-600 hover:bg-purple-700'
  }

  return {
    variant: variants[status] || 'secondary',
    className: variantMap[status] || ''
  }
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
      <Button
        :variant="currentRoute === '/' ? 'default' : 'ghost'"
        class="flex-col h-16 rounded-none"
        @click="navigate('/')"
      >
        <LayoutDashboard class="h-5 w-5" />
        <span class="text-xs mt-1">Home</span>
      </Button>

      <!-- Map -->
      <Button
        :variant="currentRoute === '/map' ? 'default' : 'ghost'"
        class="flex-col h-16 rounded-none"
        @click="navigate('/map')"
      >
        <Map class="h-5 w-5" />
        <span class="text-xs mt-1">Map</span>
      </Button>

      <!-- Emergency Contacts -->
      <Button
        :variant="currentRoute === '/contacts' ? 'default' : 'ghost'"
        class="flex-col h-16 rounded-none"
        @click="navigate('/contacts')"
      >
        <Phone class="h-5 w-5" />
        <span class="text-xs mt-1">Contacts</span>
      </Button>

      <!-- Profile -->
      <Button
        :variant="currentRoute === '/profile' ? 'default' : 'ghost'"
        class="flex-col h-16 rounded-none"
        @click="navigate('/profile')"
      >
        <UserCircle class="h-5 w-5" />
        <span class="text-xs mt-1">Profile</span>
      </Button>
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
        <Avatar :src="user.avatar" :alt="user.name" class="h-12 w-12">
          <AvatarFallback class="bg-blue-100 text-blue-600">
            {{ user.name.charAt(0).toUpperCase() }}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
          <p class="text-sm text-gray-500">{{ user.phone }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation Items -->
    <nav class="p-4">
      <div class="space-y-1">
        <Button
          v-for="item in navigation"
          :key="item.path"
          :variant="currentRoute === item.path ? 'default' : 'ghost'"
          class="w-full justify-start gap-2"
          @click="navigate(item.path)"
        >
          <component :is="item.icon" class="h-4 w-4" />
          {{ item.name }}
        </Button>
      </div>

      <!-- Emergency Section -->
      <div class="mt-8">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Emergency
        </h3>
        <div class="space-y-1">
          <Button
            variant="outline"
            class="w-full justify-start gap-2 text-red-600 border-red-200 hover:bg-red-50"
            @click="triggerEmergency"
          >
            <AlertTriangle class="h-4 w-4" />
            Activate Panic Button
          </Button>
          <Button
            variant="ghost"
            class="w-full justify-start gap-2"
            @click="navigate('/responder')"
          >
            <ShieldCheck class="h-4 w-4" />
            Responder Mode
          </Button>
        </div>
      </div>
    </nav>

    <!-- Bottom Actions -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
      <Button
        variant="ghost"
        class="w-full justify-start gap-2"
        @click="logout"
      >
        <LogOut class="h-4 w-4" />
        Sign Out
      </Button>
    </div>
  </div>
</template>

<script setup>
const user = useAuthStore().user
const currentRoute = useRoute().path

const navigation = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Live Map', path: '/map', icon: Map },
  { name: 'Emergency Contacts', path: '/contacts', icon: Phone },
  { name: 'Profile', path: '/profile', icon: UserCircle },
  { name: 'Settings', path: '/settings', icon: Settings }
]
</script>
```

#### Responsive Cards
```vue
<template>
  <!-- Mobile: Stacked Layout -->
  <div class="md:hidden space-y-4">
    <Card class="p-4">
      <!-- Mobile content -->
    </Card>
  </div>

  <!-- Desktop: Grid Layout -->
  <div class="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
    <Card class="p-6">
      <!-- Desktop content -->
    </Card>
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
    <Button size="lg" class="w-full">Primary Action</Button>
    <Button size="lg" variant="outline" class="w-full">Secondary Action</Button>
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
  <Button
    class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    aria-label="Activate emergency alert"
  >
    Panic Button
  </Button>
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
        <Button
          variant="ghost"
          @click="navigate('/')"
          class="focus:ring-2 focus:ring-blue-500"
        >
          Home
        </Button>
      </li>
      <li>
        <Button
          variant="ghost"
          @click="navigate('/emergency')"
          class="focus:ring-2 focus:ring-blue-500"
        >
          Emergency
        </Button>
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
          <WifiOff class="h-5 w-5" />
          <span class="font-medium">Offline Mode</span>
          <span class="text-sm">Emergency features still available</span>
        </div>
        <Button
          variant="secondary"
          size="sm"
          @click="retryConnection"
        >
          Retry
        </Button>
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
          <WifiOff class="h-5 w-5" />
          <span class="font-medium">Offline Mode</span>
        </div>
        <span class="text-sm">Emergency features active</span>
      </div>
    </div>

    <!-- Emergency Functions Available Offline -->
    <div class="p-4 space-y-4">
      <!-- Panic Button (Always Available) -->
      <Card class="bg-red-50 border-red-200 p-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-red-900 mb-2">
            Emergency Alert Available
          </h3>
          <p class="text-red-700 mb-4">
            You can still trigger emergency alerts and call emergency services
          </p>

          <Button
            variant="destructive"
            size="lg"
            class="w-full flex items-center gap-2"
            @click="activateOfflineEmergency"
          >
            <AlertTriangle class="h-4 w-4" />
            Activate Emergency Alert
          </Button>
        </div>
      </Card>

      <!-- Emergency Contacts -->
      <Card>
        <CardHeader>
          <CardTitle class="text-lg font-semibold text-gray-900">
            Emergency Contacts
          </CardTitle>
        </CardHeader>

        <CardContent class="space-y-3">
          <div
            v-for="contact in emergencyContacts"
            :key="contact.id"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <h4 class="font-medium text-gray-900">{{ contact.name }}</h4>
              <p class="text-sm text-gray-500">{{ contact.relationship }}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="flex items-center gap-2"
              :href="`tel:${contact.phone}`"
            >
              <Phone class="h-4 w-4" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>

      <!-- Emergency Numbers -->
      <Card>
        <CardHeader>
          <CardTitle class="text-lg font-semibold text-gray-900">
            Emergency Services
          </CardTitle>
        </CardHeader>

        <CardContent class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            variant="outline"
            class="flex items-center gap-2 text-red-600 border-red-200"
            :href="'tel:112'"
          >
            <Phone class="h-4 w-4" />
            112 - Emergency
          </Button>
          <Button
            variant="outline"
            class="flex items-center gap-2"
            :href="'tel:767'"
          >
            <Phone class="h-4 w-4" />
            767 - Police
          </Button>
          <Button
            variant="outline"
            class="flex items-center gap-2 text-green-600 border-green-200"
            :href="'tel:122'"
          >
            <Phone class="h-4 w-4" />
            122 - Ambulance
          </Button>
          <Button
            variant="outline"
            class="flex items-center gap-2 text-orange-600 border-orange-200"
            :href="'tel:123'"
          >
            <Phone class="h-4 w-4" />
            123 - Fire Service
          </Button>
        </CardContent>
      </Card>
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

### shadcn-vue Configuration
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['shadcn-nuxt'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  // Custom CSS variables for theming
  css: ['~/assets/css/main.css'],

  // Vite config for proper component resolution
  vite: {
    resolve: {
      alias: {
        '@/components': './components',
        '@/lib': './lib'
      }
    }
  }
})
```

### Custom Theme Overrides
```css
/* assets/css/main.css */
:root {
  /* SafeRoute Light Mode Colors */
  --background: #FAFAFA; /* off-white, not pure white - easier on eyes */
  --foreground: #0A0A0A; /* almost black text */
  --accent-primary: #002455; /* SafeRoute Blue - trust & authority */
  --accent-emergency: #FF3838; /* Emergency Red - urgency */
  --accent-success: #10B981; /* Success Green - hope & community */

  /* Override shadcn-vue CSS variables */
  --primary: var(--accent-primary);
  --primary-foreground: #FFFFFF;
  --destructive: var(--accent-emergency);
  --destructive-foreground: #FFFFFF;
  --ring: var(--accent-primary);
}

/* Dark mode specific styles */
.dark {
  --background: #0A0A0A; /* deep black */
  --foreground: #FAFAFA; /* off-white */
  --accent-primary: #3B82F6; /* lighter blue for dark mode readability */
  --accent-emergency: #F87171; /* softer red for dark mode */
  --accent-success: #34D399; /* brighter green for dark mode */
}

/* Emergency mode specific styles */
.emergency-mode {
  --primary: var(--accent-emergency);
  --primary-foreground: #FFFFFF;
  --ring: var(--accent-emergency);
}

/* Button customizations for emergency context */
.btn-emergency {
  background-color: var(--accent-emergency) !important;
  border-color: var(--accent-emergency) !important;
  color: #FFFFFF !important;
}

.btn-emergency:hover {
  background-color: #DC2626 !important;
  border-color: #DC2626 !important;
}

/* Custom SafeRoute components styling */
.saferoute-card {
  border-left: 4px solid var(--accent-primary);
}

.saferoute-card.emergency {
  border-left-color: var(--accent-emergency);
}

/* SafeRoute utility classes */
.saferoute-text-primary { color: var(--accent-primary); }
.saferoute-text-emergency { color: var(--accent-emergency); }
.saferoute-bg-primary { background-color: var(--accent-primary); }
.saferoute-bg-emergency { background-color: var(--accent-emergency); }
```

### Icon Usage
```vue
<template>
  <!-- Consistent icon usage across components -->
  <div class="space-y-4">
    <!-- Emergency Icons -->
    <AlertTriangle class="h-5 w-5 text-red-500" />
    <ShieldCheck class="h-5 w-5 text-blue-500" />
    <BellAlert class="h-5 w-5 text-yellow-500" />

    <!-- Navigation Icons -->
    <Home class="h-5 w-5" />
    <Map class="h-5 w-5" />
    <User class="h-5 w-5" />
    <Settings class="h-5 w-5" />

    <!-- Status Icons -->
    <CheckCircle class="h-5 w-5 text-green-500" />
    <XCircle class="h-5 w-5 text-red-500" />
    <Clock class="h-5 w-5 text-yellow-500" />
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
      <Bell class="h-6 w-6" />
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