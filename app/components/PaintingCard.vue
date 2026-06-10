<template>
  <div class="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square cursor-pointer" @click="$emit('click')">
    <!-- Image -->
    <img :src="image" :alt="title" class="w-full h-full object-cover group-hover:scale-125 transition duration-300" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
      <h3 class="text-white text-xl font-bold mb-2">{{ title }}</h3>
      <p v-if="date" class="text-gray-300 text-sm mb-3">{{ formatDate(date) }}</p>
      <p v-if="description" class="text-gray-400 text-sm line-clamp-2">{{ description }}</p>
    </div>

    <!-- Accent Border -->
    <div class="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

defineProps<{
  image: string
  title: string
  date: string
  description?: string
}>()

defineEmits<{
  click: []
}>()

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en" ? d.toLocaleDateString("en-US", { year: "numeric", month: "long" }) : d.toLocaleDateString("fa-IR")
}
</script>
