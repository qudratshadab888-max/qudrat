<template>
  <div>
    <section class="py-12 bg-primary-900/5">
      <div class="max-w-4xl mx-auto px-6">
        <NuxtLink to="/articles" class="inline-flex items-center gap-2 text-primary-900 hover:text-accent transition mb-6">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ locale === "en" ? "Back to Articles" : "بازگشت به مقالات" }}
        </NuxtLink>

        <article v-if="article" class="prose prose-lg max-w-none">
          <img :src="article.cover" :alt="article.title[locale]" class="w-full h-96 object-cover rounded-lg mb-8" />

          <div class="flex items-center justify-between mb-8">
            <div>
              <h1 class="text-5xl font-black text-primary-900 mb-2">{{ article.title[locale] }}</h1>
              <p class="text-gray-600">{{ formatDate(article.date) }} • {{ article.author }}</p>
            </div>
          </div>

          <div class="bg-white rounded-lg p-8 text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
            {{ article.content[locale] }}
          </div>

          <div class="mt-12 pt-8 border-t">
            <h3 class="text-2xl font-bold text-primary-900 mb-6">{{ locale === "en" ? "More Articles" : "مقالات بیشتر" }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ArticleCard
                v-for="item in relatedArticles"
                :key="item.id"
                :title="item.title[locale]"
                :summary="item.summary[locale]"
                :cover="item.cover"
                :date="item.date"
                :link="`/article-${item.id}`"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { articles } from "~/data/articles"

const { locale } = useLanguage()
const route = useRoute()

const articleId = parseInt(route.params.id as string)
const article = computed(() => articles.find((a) => a.id === articleId))

const relatedArticles = computed(() => articles.filter((a) => a.id !== articleId).slice(0, 3))

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en"
    ? d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : d.toLocaleDateString("fa-IR")
}

watchEffect(() => {
  if (article.value) {
    usePageMeta(article.value.title[locale.value], article.value.summary[locale.value], article.value.cover)
  }
})
</script>
