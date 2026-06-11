<template>
  <div>
    <HeroSection
      :title="heroContent[locale].title"
      :subtitle="heroContent[locale].subtitle"
      :description="heroContent[locale].description"
      :image="heroContent[locale].image"
      :buttons="heroContent[locale].buttons"
    />

    <section class="bg-primary-900/5 py-12 md:py-16">
      <div class="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 text-center md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="rounded-lg bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
          <h3 class="text-3xl font-black text-accent md:text-5xl">{{ stat.value }}</h3>
          <p class="mt-2 text-sm font-medium text-gray-600 md:text-base">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-24">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionTitle
            :title="t('home.aboutTitle')"
            :description="t('home.aboutDescription')"
          />
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="item in disciplines"
            :key="item.title"
            class="rounded-lg border border-primary-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <p class="mb-3 text-sm font-bold uppercase tracking-widest text-accent">{{ item.title }}</p>
            <p class="text-sm leading-6 text-gray-700">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-6">
        <SectionTitle
          :title="t('home.activitiesTitle')"
          :description="t('home.disciplinesDescription')"
        />
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ActivityCard
            v-for="activity in activities.slice(0, 3)"
            :key="activity.id"
            :title="activity.title[locale]"
            :description="activity.description[locale]"
            :image="activity.image"
            :category="activity.category === 'social' ? t('activities.social') : t('activities.cultural')"
            :date="activity.date"
          />
        </div>
        <div class="mt-10 flex justify-center">
          <NuxtLink to="/social" class="rounded-lg bg-primary-900 px-7 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-primary-900">
            {{ t("home.viewActivities") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-6">
        <SectionTitle :title="t('home.paintingsTitle')" :description="t('paintings.description')" />
        <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <PaintingCard
            v-for="painting in paintings.slice(0, 4)"
            :key="painting.id"
            :image="painting.image"
            :title="painting.title[locale]"
            :date="painting.date"
            :description="painting.description[locale]"
          />
        </div>
        <div class="mt-10 flex justify-center">
          <NuxtLink to="/paintings" class="rounded-lg bg-primary-900 px-7 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-primary-900">
            {{ t("home.viewGallery") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-6">
        <SectionTitle :title="t('home.poetryTitle')" :description="t('poetry.description')" />
        <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PoetryCard
            v-for="poem in poems.slice(0, 2)"
            :key="poem.id"
            :title="poem.title[locale]"
            :text="poem.text"
            :translation="poem.translation"
            :audio-url="poem.audioUrl"
            :video-url="poem.videoUrl"
            :date="poem.date"
          />
        </div>
        <div class="mt-10 flex justify-center">
          <NuxtLink to="/poetry-recitation" class="rounded-lg bg-primary-900 px-7 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-primary-900">
            {{ t("home.viewPoems") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-6">
        <SectionTitle :title="t('home.articlesTitle')" :description="t('articles.description')" />
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ArticleCard
            v-for="article in articles.slice(0, 3)"
            :key="article.id"
            :title="article.title[locale]"
            :summary="article.summary[locale]"
            :cover="article.cover"
            :date="article.date"
            :link="`/article-${article.id}`"
          />
        </div>
        <div class="mt-10 flex justify-center">
          <NuxtLink to="/articles" class="rounded-lg bg-primary-900 px-7 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-primary-900">
            {{ t("home.viewArticles") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-br from-primary-900 to-gray-950 py-20 md:py-24">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <h2 class="text-3xl font-black text-white md:text-5xl">{{ t("home.contactTitle") }}</h2>
        <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-200">{{ t("home.contactDescription") }}</p>
        <NuxtLink to="/contact" class="mt-8 inline-flex rounded-lg bg-accent px-8 py-4 font-bold text-primary-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white">
          {{ t("home.contactCta") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { heroContent } from "~/data/hero"
import { activities } from "~/data/activities"
import { paintings } from "~/data/paintings"
import { poems } from "~/data/poetry"
import { articles } from "~/data/articles"

const { locale, t } = useLanguage()

const stats = computed(() => [
  { value: t("stats.count_artworks"), label: t("stats.artworks") },
  { value: t("stats.count_poems"), label: t("stats.poems") },
  { value: t("stats.count_activities"), label: t("stats.activities") },
  { value: t("stats.count_articles"), label: t("stats.articles") },
])

const disciplines = computed(() => [
  { title: t("home.disciplines.painting.title"), text: t("home.disciplines.painting.text") },
  { title: t("home.disciplines.poetry.title"), text: t("home.disciplines.poetry.text") },
  { title: t("home.disciplines.culture.title"), text: t("home.disciplines.culture.text") },
])

usePageMeta(
  locale.value === "en" ? "Qudratullah Shadab - Artist & Cultural Activist" : "قدرت الله شاداب - هنرمند و فعال فرهنگی",
  locale.value === "en"
    ? "Explore painting, Dari poetry, cultural initiatives, and writing by Qudratullah Shadab"
    : "نقاشی، شعر دری، ابتکارات فرهنگی و نوشته‌های قدرت الله شاداب"
)
</script>
