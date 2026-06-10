<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-black py-24 md:py-32">
    <!-- Background Gradients -->
    <div class="absolute top-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl -z-10"></div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div class="space-y-8 text-white">
        <div class="space-y-4">
          <span v-if="subtitle" class="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm tracking-widest uppercase">
            {{ subtitle }}
          </span>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            {{ title }}
          </h1>
          <p v-if="description" class="text-xl text-gray-300 max-w-lg">{{ description }}</p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            v-for="btn in buttons"
            :key="btn.label"
            :to="btn.link"
            :class="[
              'px-8 py-4 rounded-xl font-semibold transition transform hover:scale-105',
              btn.primary
                ? 'bg-accent text-primary-900'
                : 'border-2 border-accent text-accent hover:bg-accent hover:text-primary-900',
            ]"
          >
            {{ btn.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Image -->
      <div v-if="image" class="flex justify-center">
        <div class="w-full max-w-md h-96 rounded-3xl bg-gradient-to-br from-accent to-secondary-400 shadow-2xl flex items-center justify-center overflow-hidden">
          <img :src="image" :alt="title" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Button {
  label: string
  link: string
  primary?: boolean
}

withDefaults(
  defineProps<{
    title: string
    description?: string
    subtitle?: string
    image?: string
    buttons?: Button[]
  }>(),
  {
    buttons: () => [],
  }
)
</script>
