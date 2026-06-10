<template>
  <div>
    <HeroSection :title="locale === 'en' ? 'Social Activities' : 'فعالیت‌های اجتماعی'" :subtitle="locale === 'en' ? 'Community' : 'جامعه'" />

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle
          :description="locale === 'en' ? 'Community engagement and social responsibility initiatives' : 'ابتکارات مشارکت جامعه و مسئولیت اجتماعی'"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ActivityCard
            v-for="activity in socialActivities"
            :key="activity.id"
            :title="activity.title[locale]"
            :description="activity.description[locale]"
            :image="activity.image"
            :category="locale === 'en' ? 'Social' : 'اجتماعی'"
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

const socialActivities = computed(() => activities.filter((a) => a.category === "social"))

usePageMeta(
  locale.value === "en" ? "Social Activities" : "فعالیت‌های اجتماعی",
  locale.value === "en" ? "Social initiatives and community projects" : "ابتکارات اجتماعی و پروژه‌های جامعه‌ای"
)
</script>