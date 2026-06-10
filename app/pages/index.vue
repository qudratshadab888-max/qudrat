<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      :title="heroContent[locale].title"
      :subtitle="heroContent[locale].subtitle"
      :description="heroContent[locale].description"
      :image="heroContent[locale].image"
      :buttons="heroContent[locale].buttons"
    />

    <!-- Statistics Section -->
    <section class="bg-primary-900/5 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 class="text-4xl md:text-5xl font-black text-accent">50+</h3>
            <p class="mt-2 text-gray-600">{{ locale === "en" ? "Artworks" : "آثار هنری" }}</p>
          </div>
          <div>
            <h3 class="text-4xl md:text-5xl font-black text-accent">30+</h3>
            <p class="mt-2 text-gray-600">{{ locale === "en" ? "Poetry Recitations" : "دکلمه شعر" }}</p>
          </div>
          <div>
            <h3 class="text-4xl md:text-5xl font-black text-accent">20+</h3>
            <p class="mt-2 text-gray-600">{{ locale === "en" ? "Cultural Activities" : "فعالیت فرهنگی" }}</p>
          </div>
          <div>
            <h3 class="text-4xl md:text-5xl font-black text-accent">100+</h3>
            <p class="mt-2 text-gray-600">{{ locale === "en" ? "Articles & Writings" : "مقالات و نوشته‌ها" }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="py-24">
      <div class="max-w-5xl mx-auto px-6">
        <SectionTitle
          :title="locale === 'en' ? 'About Me' : 'درباره من'"
          :description="aboutContent[locale].bio"
        />
      </div>
    </section>

    <!-- Activities Preview -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :title="locale === 'en' ? 'Featured Activities' : 'فعالیت‌های برجسته'" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ActivityCard
            v-for="activity in activities.slice(0, 3)"
            :key="activity.id"
            :title="activity.title[locale]"
            :description="activity.description[locale]"
            :image="activity.image"
            :category="locale === 'en' ? activity.category : (activity.category === 'social' ? 'اجتماعی' : 'فرهنگی')"
            :date="activity.date"
          />
        </div>
        <div class="flex justify-center mt-12">
          <NuxtLink to="/social" class="px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold hover:opacity-90 transition">
            {{ locale === "en" ? "View All Activities" : "دیدن تمام فعالیت‌ها" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Paintings Preview -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :title="locale === 'en' ? 'My Paintings' : 'نقاشی‌های من'" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <PaintingCard
            v-for="painting in paintings.slice(0, 4)"
            :key="painting.id"
            :image="painting.image"
            :title="painting.title[locale]"
            :date="painting.date"
            :description="painting.description[locale]"
            @click="selectedPainting = painting"
          />
        </div>
        <div class="flex justify-center mt-12">
          <NuxtLink to="/paintings" class="px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold hover:opacity-90 transition">
            {{ locale === "en" ? "View Gallery" : "دیدن گالری" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Poetry Preview -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :title="locale === 'en' ? 'Poetry Recitations' : 'دکلمه‌های شعر'" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
        <div class="flex justify-center mt-12">
          <NuxtLink to="/poetry-recitation" class="px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold hover:opacity-90 transition">
            {{ locale === "en" ? "View All Poems" : "دیدن تمام اشعار" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Articles Preview -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <SectionTitle :title="locale === 'en' ? 'Latest Articles' : 'آخرین مقالات'" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
        <div class="flex justify-center mt-12">
          <NuxtLink to="/articles" class="px-8 py-4 bg-primary-900 text-white rounded-xl font-semibold hover:opacity-90 transition">
            {{ locale === "en" ? "View All Articles" : "دیدن تمام مقالات" }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-24 bg-gradient-to-br from-primary-900 to-primary-900/80">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
          {{ locale === "en" ? "Let's Collaborate" : "بیایید همکاری کنیم" }}
        </h2>
        <p class="text-xl text-gray-200 mb-8">
          {{ locale === "en" ? "Have a project in mind? Let's create something amazing together." : "پروژه‌ای در ذهن دارید؟ بیایید چیزی شگفت‌انگیز با هم بسازیم." }}
        </p>
        <NuxtLink to="/contact" class="inline-block px-10 py-4 bg-accent text-primary-900 rounded-xl font-bold text-lg hover:opacity-90 transition">
          {{ locale === "en" ? "Get in Touch" : "تماس با من" }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { heroContent } from "~/data/hero"
import { aboutContent } from "~/data/about"
import { activities } from "~/data/activities"
import { paintings } from "~/data/paintings"
import { poems } from "~/data/poetry"
import { articles } from "~/data/articles"

const { locale } = useLanguage()

usePageMeta(
  locale.value === "en" ? "Qudratullah Shadab - Artist & Cultural Activist" : "قدرت الله شاداب - هنرمند و فعال فرهنگی",
  locale.value === "en"
    ? "Explore contemporary art, poetry, cultural initiatives, and social activism by Qudratullah Shadab"
    : "آثار هنری معاصر، شعر، ابتکارات فرهنگی و فعالیت‌های اجتماعی قدرت الله شاداب"
)

const selectedPainting = ref(null)
</script>
