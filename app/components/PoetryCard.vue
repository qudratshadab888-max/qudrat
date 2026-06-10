<template>
  <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
    <!-- Title -->
    <h3 class="text-2xl md:text-3xl font-black text-primary-900 mb-6 leading-relaxed font-nastaliq">
      {{ title }}
    </h3>

    <!-- Poetry Text -->
    <div v-if="text" class="bg-gray-50 rounded-xl p-6 mb-6 font-nastaliq text-lg leading-relaxed text-gray-800 text-center">
      {{ text }}
    </div>

    <!-- Translation -->
    <div v-if="translation" class="bg-blue-50 rounded-xl p-6 mb-6 text-sm text-gray-700 leading-relaxed italic">
      <p class="font-semibold text-primary-900 mb-2">{{ locale === "en" ? "English Translation" : "ترجمه انگلیسی" }}</p>
      {{ translation }}
    </div>

    <!-- Media Controls -->
    <div class="flex flex-wrap gap-3">
      <!-- Audio Player -->
      <div v-if="audioUrl" class="flex-1 min-w-full md:min-w-0">
        <audio :src="audioUrl" controls class="w-full rounded-lg" />
        <p class="text-xs text-gray-500 mt-2">{{ locale === "en" ? "Audio Recitation" : "دکلمه صوتی" }}</p>
      </div>

      <!-- Video Link -->
      <a
        v-if="videoUrl"
        :href="videoUrl"
        target="_blank"
        class="inline-flex items-center gap-2 px-4 py-2 bg-secondary-400 text-white rounded-lg hover:opacity-90 transition"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        {{ locale === "en" ? "Watch" : "تماشا کنید" }}
      </a>
    </div>

    <!-- Date -->
    <p v-if="date" class="text-xs text-gray-500 mt-6 pt-6 border-t">{{ formatDate(date) }}</p>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

defineProps<{
  title: string
  text?: string
  translation?: string
  audioUrl?: string
  videoUrl?: string
  date?: string
}>()

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en" ? d.toLocaleDateString("en-US") : d.toLocaleDateString("fa-IR")
}
</script>
