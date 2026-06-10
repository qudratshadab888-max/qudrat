<template>
  <div>
    <HeroSection :title="locale === 'en' ? 'My Paintings' : 'نقاشی‌های من'" :subtitle="locale === 'en' ? 'Gallery' : 'گالری'" />

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :description="locale === 'en' ? 'Exploring contemporary art through color, form, and emotion' : 'کاوش هنر معاصر از طریق رنگ، شکل و احساس'" />
        <ImageGallery :items="paintings.map((p) => ({ image: p.image, title: p.title[locale], date: p.date, description: p.description[locale] }))" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { paintings } from "~/data/paintings"

const { locale } = useLanguage()

usePageMeta(
  locale.value === "en" ? "Paintings Gallery" : "گالری نقاشی",
  locale.value === "en" ? "Contemporary paintings by Qudratullah Shadab" : "نقاشی‌های معاصر قدرت الله شاداب"
)
</script>