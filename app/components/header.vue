<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-4"
      >
        <div
          class="h-16 w-16 overflow-hidden rounded-full border-2 border-yellow-600 md:h-18 md:w-18"
        >
          <img
            src="/images/logo.png"
            alt="Qudratullah Shadab"
            class="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 class="text-lg font-bold text-gray-900 md:text-2xl">
            Qudratullah Shadab
          </h1>

          <span class="block text-sm text-gray-600">
            Artist, Painter & Cultural Activist
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          to="/"
          class="font-medium text-gray-800 transition hover:text-yellow-600"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="font-medium text-gray-800 transition hover:text-yellow-600"
        >
          About
        </NuxtLink>

        <NuxtLink
          to="/gallery"
          class="font-medium text-gray-800 transition hover:text-yellow-600"
        >
          Gallery
        </NuxtLink>

        <NuxtLink
          to="/articles"
          class="font-medium text-gray-800 transition hover:text-yellow-600"
        >
          Articles
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="font-medium text-gray-800 transition hover:text-yellow-600"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Mobile Button -->
      <button
        class="text-3xl md:hidden"
        @click="mobileMenu = !mobileMenu"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenu"
        class="flex flex-col border-t bg-white px-5 py-4 md:hidden"
      >
        <NuxtLink
          to="/"
          class="py-3 font-medium text-gray-800 hover:text-yellow-600"
          @click="mobileMenu = false"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="py-3 font-medium text-gray-800 hover:text-yellow-600"
          @click="mobileMenu = false"
        >
          About
        </NuxtLink>

        <NuxtLink
          to="/gallery"
          class="py-3 font-medium text-gray-800 hover:text-yellow-600"
          @click="mobileMenu = false"
        >
          Gallery
        </NuxtLink>

        <NuxtLink
          to="/articles"
          class="py-3 font-medium text-gray-800 hover:text-yellow-600"
          @click="mobileMenu = false"
        >
          Articles
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="py-3 font-medium text-gray-800 hover:text-yellow-600"
          @click="mobileMenu = false"
        >
          Contact
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenu = ref(false)
</script>