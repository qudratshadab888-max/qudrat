<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo & Brand -->
      <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition">
        <div class="w-12 h-12 rounded-lg bg-primary-900 text-white flex items-center justify-center font-bold text-lg">QSH</div>
        <div>
          <h1 class="font-bold text-primary-900 text-lg leading-tight">
            {{ locale === "en" ? "Qudratullah Shadab" : "قدرت الله شاداب" }}
          </h1>
          <p class="text-xs text-gray-500">{{ locale === "en" ? "Artist & Activist" : "هنرمند و فعال" }}</p>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1">
        <NuxtLink
          v-for="(route, key) in navRoutes"
          :key="key"
          :to="route.path"
          class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition"
          active-class="text-primary-900 bg-primary-50"
        >
          {{ locale === "en" ? route.en : route.fa }}
        </NuxtLink>
      </nav>

      <!-- Language Toggle & Mobile Menu -->
      <div class="flex items-center gap-4">
        <button
          @click="toggleLanguage"
          class="px-3 py-2 text-sm font-semibold text-white bg-primary-900 hover:bg-opacity-90 rounded-lg transition"
        >
          {{ locale === "en" ? "فارسی" : "English" }}
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-200 bg-white">
        <div class="px-6 py-4 space-y-2">
          <NuxtLink
            v-for="(route, key) in navRoutes"
            :key="key"
            :to="route.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition"
          >
            {{ locale === "en" ? route.en : route.fa }}
          </NuxtLink>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
const { locale, toggleLanguage } = useLanguage()
const mobileMenuOpen = ref(false)

const navRoutes = [
  { path: "/", en: "Home", fa: "خانه" },
  { path: "/about", en: "About", fa: "درباره من" },
  { path: "/social", en: "Social", fa: "اجتماعی" },
  { path: "/cultural", en: "Cultural", fa: "فرهنگی" },
  { path: "/paintings", en: "Paintings", fa: "نقاشی‌ها" },
  { path: "/poetry-recitation", en: "Poetry", fa: "شعر" },
  { path: "/articles", en: "Articles", fa: "مقالات" },
  { path: "/contact", en: "Contact", fa: "تماس" },
]
</script>
