<template>
  <div class="text-center mb-12 animate-fadeInUp">
    <span v-if="subtitle" class="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-xs tracking-widest uppercase mb-4 animate-fadeInUp" style="animation-delay: 100ms">
      {{ subtitle }}
    </span>
    <h2 v-if="title" class="text-4xl md:text-5xl font-black text-primary-900 mb-4 animate-fadeInUp" style="animation-delay: 200ms">{{ title }}</h2>
    <p v-if="description" class="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp" style="animation-delay: 300ms">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  description?: string
}>()
</script>
