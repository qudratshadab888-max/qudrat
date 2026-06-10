<template>
  <div>
    <HeroSection :title="heroTitle" :subtitle="locale === 'en' ? 'About' : 'درباره'" />

    <section class="py-24">
      <div class="max-w-5xl mx-auto px-6">
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-gray-700 leading-relaxed mb-8">{{ aboutContent[locale].bio }}</p>
          <p class="text-lg text-gray-700 leading-relaxed mb-12">{{ aboutContent[locale].mission }}</p>

          <h3 class="text-3xl font-bold text-primary-900 mb-6">{{ locale === "en" ? "Achievements" : "دستاوردها" }}</h3>
          <ul class="space-y-3 mb-12">
            <li v-for="(achievement, idx) in aboutContent[locale].achievements" :key="idx" class="flex gap-3">
              <span class="text-accent font-bold">✓</span>
              <span class="text-gray-700">{{ achievement }}</span>
            </li>
          </ul>

          <h3 class="text-3xl font-bold text-primary-900 mb-6">{{ locale === "en" ? "Experience" : "تجربه" }}</h3>
          <div class="space-y-8">
            <div v-for="(exp, idx) in aboutContent[locale].experience" :key="idx" class="border-l-4 border-accent pl-6">
              <h4 class="text-xl font-bold text-primary-900 mb-1">{{ exp.title }}</h4>
              <p class="text-sm text-gray-500 mb-2">{{ exp.period }}</p>
              <p class="text-gray-700">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { aboutContent } from "~/data/about"

const { locale } = useLanguage()

const heroTitle = computed(() => (locale.value === "en" ? "About Me" : "درباره من"))

usePageMeta(
  locale.value === "en" ? "About Qudratullah Shadab" : "درباره قدرت الله شاداب",
  locale.value === "en"
    ? "Learn more about Qudratullah Shadab, an artist, painter, and cultural activist"
    : "بیشتر درباره قدرت الله شاداب، هنرمند، نقاش و فعال فرهنگی بیاموزید"
)
</script>