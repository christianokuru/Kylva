<script setup>
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import DarkMode from '@/components/custom/general/DarkMode.vue'

const mobileMenuOpen = ref(false)

const navigationItems = [
  {
    name: 'Dashboard',
    icon: 'radix-icons:dashboard',
    path: '/'
  },
  {
    name: 'Live Map',
    icon: 'radix-icons:map',
    path: '/map'
  },
  {
    name: 'Emergency Contacts',
    icon: 'radix-icons:phone',
    path: '/contacts'
  },
  {
    name: 'How It Works',
    icon: 'radix-icons:info-circled',
    path: '/about'
  },
  {
    name: 'Become a Responder',
    icon: 'radix-icons:shield-check',
    path: '/responder'
  }
]

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const navigateToPage = (path) => {
  navigateTo(path)
  closeMobileMenu()
}
</script>

<template>
  <nav class="bg-white dark:bg-[#0A0A0A] border-b border-[#E5E7EB] dark:border-[#374151] sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Branding -->
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 bg-[#002455] rounded-lg flex items-center justify-center">
              <Icon icon="radix-icons:shield-check" class="h-5 w-5 text-white" />
            </div>
            <span class="text-xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">
              SafeRoute
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Navigation Links -->
          <div class="flex items-center space-x-6">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.path"
              class="flex items-center space-x-2 text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#002455] dark:hover:text-[#3B82F6] font-medium transition-colors"
              active-class="text-[#002455] dark:text-[#3B82F6]"
            >
              <Icon :icon="item.icon" class="h-4 w-4" />
              <span>{{ item.name }}</span>
            </NuxtLink>
          </div>

          <!-- Auth Buttons -->
          <div class="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              class="border-[#002455] text-[#002455] hover:bg-[#002455] hover:text-white dark:border-[#3B82F6] dark:text-[#3B82F6] dark:hover:bg-[#3B82F6] dark:hover:text-white"
            >
              <NuxtLink to="/auth/login" class="block w-full h-full flex items-center justify-center">
                Sign In
              </NuxtLink>
            </Button>
            <Button
              size="sm"
              class="bg-[#002455] hover:bg-[#001D3D] text-white dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]"
            >
              <NuxtLink to="/auth/register" class="block w-full h-full flex items-center justify-center">
                Get Started
              </NuxtLink>
            </Button>

            <!-- Dark Mode Toggle -->
            <DarkMode />
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Dark Mode Toggle (Mobile) -->
          <DarkMode />

          <!-- Hamburger Menu -->
          <Sheet v-model:open="mobileMenuOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="sm" class="p-2">
                <Icon icon="radix-icons:hamburger-menu" class="h-6 w-6 text-[#4B5563] dark:text-[#9CA3AF]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-80 bg-white dark:bg-[#0A0A0A]">
              <div class="flex flex-col h-full">
                <!-- Mobile Header -->
                <div class="flex items-center justify-between py-4 border-b border-[#E5E7EB] dark:border-[#374151]">
                  <div class="flex items-center space-x-2">
                    <div class="h-8 w-8 bg-[#002455] dark:bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Icon icon="radix-icons:shield-check" class="h-5 w-5 text-white" />
                    </div>
                    <span class="text-xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">
                      SafeRoute
                    </span>
                  </div>
                </div>

                <!-- Mobile Navigation -->
                <div class="flex-1 py-4">
                  <div class="space-y-2">
                    <Button
                      v-for="item in navigationItems"
                      :key="item.name"
                      variant="ghost"
                      class="w-full justify-start h-12 px-4 text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#002455] dark:hover:text-[#3B82F6] hover:bg-[#F3F4F6] dark:hover:bg-[#1F2937]"
                      @click="navigateToPage(item.path)"
                    >
                      <Icon :icon="item.icon" class="h-5 w-5 mr-3" />
                      {{ item.name }}
                    </Button>
                  </div>
                </div>

                <!-- Mobile Auth Section -->
                <div class="border-t border-[#E5E7EB] dark:border-[#374151] py-4 space-y-3">
                  <NuxtLink
                    to="/auth/login"
                    class="block w-full"
                  >
                    <Button
                      variant="outline"
                      class="w-full border-[#002455] text-[#002455] hover:bg-[#002455] hover:text-white dark:border-[#3B82F6] dark:text-[#3B82F6] dark:hover:bg-[#3B82F6] dark:hover:text-white"
                      @click="closeMobileMenu()"
                    >
                      Sign In
                    </Button>
                  </NuxtLink>
                  <NuxtLink
                    to="/auth/register"
                    class="block w-full"
                  >
                    <Button
                      class="w-full bg-[#002455] hover:bg-[#001D3D] text-white dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]"
                      @click="closeMobileMenu()"
                    >
                      Get Started
                    </Button>
                  </NuxtLink>

                  <!-- Emergency CTA -->
                  <div class="pt-3 border-t border-[#E5E7EB] dark:border-[#374151]">
                    <Button
                      variant="destructive"
                      class="w-full bg-[#FF3838] hover:bg-[#DC2626] text-white"
                      @click="navigateToPage('/emergency')"
                    >
                      <Icon icon="radix-icons:alert-triangle" class="h-4 w-4 mr-2" />
                      Emergency Alert
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Custom styles for better mobile experience */
@media (max-width: 768px) {
  .sheet-content {
    padding: 0;
  }
}
</style>