<template>
  <div>
    <HeroSection :title="locale === 'en' ? 'Cultural Initiatives' : 'ابتکارات فرهنگی'" :subtitle="locale === 'en' ? 'Heritage' : 'میراث'" />

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle
          :description="locale === 'en' ? 'Preserving and celebrating cultural heritage and traditions' : 'حفاظت و جشن‌گیری میراث و سنت‌های فرهنگی'"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ActivityCard
            v-for="activity in culturalActivities"
            :key="activity.id"
            :title="activity.title[locale]"
            :description="activity.description[locale]"
            :image="activity.image"
            :category="locale === 'en' ? 'Cultural' : 'فرهنگی'"
            :date="activity.date"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { activities } from "~/data/activities"

const { locale } = useLanguage()

const culturalActivities = computed(() => activities.filter((a) => a.category === "cultural"))

usePageMeta(
  locale.value === "en" ? "Cultural Initiatives" : "ابتکارات فرهنگی",
  locale.value === "en" ? "Cultural heritage projects and artistic initiatives" : "پروژه‌های میراث فرهنگی و ابتکارات هنری"
)
</script>