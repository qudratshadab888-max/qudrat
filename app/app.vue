<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { addPersonSchema } = useStructuredData()

useHead({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#2E1065",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "canonical",
      href: "https://qudratullah.com",
    },
  ],
})

addPersonSchema({
  name: "Qudratullah Shadab",
  description: "Artist, Painter & Cultural Activist exploring contemporary art and cultural expression",
  image: "/logo.png",
  email: "info@qudratullah.com",
  url: "https://qudratullah.com",
  social: [
    "https://instagram.com/qudratullah",
    "https://facebook.com/qudratullah",
    "https://youtube.com/qudratullah",
  ],
})
</script>
