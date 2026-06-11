<template>
  <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-primary-900/5" @click="$emit('click')">
    <!-- Image -->
    <img
      :src="image"
      :alt="title"
      :class="[
        'h-full w-full transition duration-500 group-hover:scale-110',
        image.includes('/images/logo.png') ? 'object-contain p-10' : 'object-cover',
      ]"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 flex flex-col justify-end bg-black/65 p-6 opacity-0 transition duration-300 group-hover:opacity-100">
      <h3 class="text-white text-xl font-bold mb-2">{{ title }}</h3>
      <p v-if="date" class="text-gray-300 text-sm mb-3">{{ formatDate(date) }}</p>
      <p v-if="description" class="text-gray-400 text-sm line-clamp-2">{{ description }}</p>
    </div>

    <!-- Accent Border -->
    <div class="absolute inset-0 rounded-lg border-2 border-accent opacity-0 transition group-hover:opacity-100"></div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

defineProps<{
  image: string
  title: string
  date: string
  description?: string
}>()

defineEmits<{
  click: []
}>()

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en" ? d.toLocaleDateString("en-US", { year: "numeric", month: "long" }) : d.toLocaleDateString("fa-IR")
}
</script>
