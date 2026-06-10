<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group">
    <!-- Cover Image -->
    <div class="relative h-48 overflow-hidden bg-gray-200">
      <img :src="cover" :alt="title" class="w-full h-full object-cover group-hover:scale-110 transition" />
    </div>

    <!-- Content -->
    <div class="p-6">
      <p v-if="date" class="text-sm text-gray-500 mb-3">{{ formatDate(date) }}</p>
      <h3 class="text-xl font-bold text-primary-900 mb-3 line-clamp-2">{{ title }}</h3>
      <p class="text-gray-700 mb-6 line-clamp-3">{{ summary }}</p>
      <NuxtLink
        :to="link"
        class="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-900 rounded-lg font-semibold hover:opacity-90 transition"
      >
        {{ locale === "en" ? "Read More" : "ادامه مطلب" }}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

defineProps<{
  title: string
  summary: string
  cover: string
  date: string
  link: string
}>()

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en" ? d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : d.toLocaleDateString("fa-IR")
}
</script>
