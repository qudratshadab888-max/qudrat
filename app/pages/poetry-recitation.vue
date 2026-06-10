<template>
  <div>
    <HeroSection :title="locale === 'en' ? 'Poetry Recitations' : 'دکلمه‌های شعر'" :subtitle="locale === 'en' ? 'Poetry' : 'شعر'" />

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :description="locale === 'en' ? 'Dari poetry and literary expressions' : 'اشعار دری و ابراز ادبی'" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <PoetryCard
            v-for="poem in poems"
            :key="poem.id"
            :title="poem.title[locale]"
            :text="poem.text"
            :translation="poem.translation"
            :audio-url="poem.audioUrl"
            :video-url="poem.videoUrl"
            :date="poem.date"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { poems } from "~/data/poetry"

const { locale } = useLanguage()

usePageMeta(
  locale.value === "en" ? "Poetry Recitations" : "دکلمه‌های شعر",
  locale.value === "en" ? "Dari poetry by Qudratullah Shadab" : "اشعار دری قدرت الله شاداب"
)
</script>