<template>
  <div class="group overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <!-- Image -->
    <div v-if="image" class="relative h-48 overflow-hidden bg-primary-900/5">
      <img
        :src="image"
        :alt="title"
        :class="[
          'h-full w-full transition duration-500 group-hover:scale-105',
          image.includes('/images/logo.png') ? 'object-contain p-8' : 'object-cover',
        ]"
      />
      <div v-if="category" class="absolute top-4 left-4">
        <span class="inline-block px-3 py-1 rounded-full bg-accent text-primary-900 text-xs font-semibold">
          {{ category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-primary-900 mb-2">{{ title }}</h3>
      <p v-if="date" class="text-sm text-gray-500 mb-3">{{ formatDate(date) }}</p>
      <p class="text-gray-700 line-clamp-3 mb-4">{{ description }}</p>
      <NuxtLink
        v-if="link"
        :to="link"
        class="inline-block text-accent font-semibold hover:text-primary-900 transition"
      >
        {{ locale === "en" ? "Learn More →" : "بیشتر بدانید ←" }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

defineProps<{
  title: string
  description: string
  image?: string
  category?: string
  date?: string
  link?: string
}>()

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en" ? d.toLocaleDateString("en-US") : d.toLocaleDateString("fa-IR")
}
</script>
