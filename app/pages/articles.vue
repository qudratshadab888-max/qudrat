<template>
  <div>
    <HeroSection :title="locale === 'en' ? 'Articles & Writings' : 'مقالات و نوشته‌ها'" :subtitle="locale === 'en' ? 'Blog' : 'بلاگ'" />

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :description="locale === 'en' ? 'Essays, insights, and creative explorations' : 'مقالات، نکات و کاوش‌های خلاقانه'" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :title="article.title[locale]"
            :summary="article.summary[locale]"
            :cover="article.cover"
            :date="article.date"
            :link="`/article-${article.id}`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { articles } from "~/data/articles"

const { locale } = useLanguage()

usePageMeta(
  locale.value === "en" ? "Articles" : "مقالات",
  locale.value === "en" ? "Essays and articles by Qudratullah Shadab" : "مقالات و نوشته‌های قدرت الله شاداب"
)
</script>