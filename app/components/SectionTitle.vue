<template>
  <div class="text-center mb-12">
    <span v-if="subtitle" class="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-xs tracking-widest uppercase mb-4">
      {{ subtitle }}
    </span>
    <h2 class="text-4xl md:text-5xl font-black text-primary-900 mb-4">{{ title }}</h2>
    <p v-if="description" class="text-lg text-gray-600 max-w-2xl mx-auto">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  description?: string
}>()
</script>
