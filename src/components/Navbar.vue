<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 sm:h-20">
        
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="group">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-800 
                       tracking-tight group-hover:text-gray-600 transition-colors duration-300">
              DASTORE
            </h1>
          </router-link>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <router-link 
            to="/home" 
            class="flex items-center gap-2 px-3 py-2 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
            :class="{ 'text-gray-900 bg-gray-100': $route.path === '/' || $route.path === '/home' }">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </router-link>
          
          <router-link 
            to="/shop" 
            class="flex items-center gap-2 px-3 py-2 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
            :class="{ 'text-gray-900 bg-gray-100': $route.path === '/shop' }">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Shop
          </router-link>
          
          <router-link 
            to="/about" 
            class="flex items-center gap-2 px-3 py-2 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
            :class="{ 'text-gray-900 bg-gray-100': $route.path === '/about' }">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            About
          </router-link>
          
          <router-link 
            to="/contact" 
            class="flex items-center gap-2 px-3 py-2 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
            :class="{ 'text-gray-900 bg-gray-100': $route.path === '/contact' }">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact
          </router-link>
        </div>

        <!-- Right Side Icons -->
        <div class="flex items-center space-x-2 sm:space-x-3">
          <!-- Search Button -->
          <button class="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          
          <!-- Cart Button with Badge -->
          <button class="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 relative">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 21v-6"/>
            </svg>
            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full 
                         h-5 w-5 flex items-center justify-center shadow-lg">
              0
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Menu">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <router-link 
          to="/" 
          class="flex items-center gap-3 px-4 py-3 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
          @click="closeMobileMenu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Home
        </router-link>
        
        <router-link 
          to="/shop" 
          class="flex items-center gap-3 px-4 py-3 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
          @click="closeMobileMenu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          Shop
        </router-link>
        
        <router-link 
          to="/about" 
          class="flex items-center gap-3 px-4 py-3 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
          @click="closeMobileMenu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          About
        </router-link>
        
        <router-link 
          to="/contact" 
          class="flex items-center gap-3 px-4 py-3 text-gray-600 font-semibold rounded-lg transition-all duration-300 hover:text-gray-900 hover:bg-gray-100"
          @click="closeMobileMenu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Contact
        </router-link>
      </div>
    </div>
  </nav>
  
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>