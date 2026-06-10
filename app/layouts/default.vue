<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'" class="min-h-screen flex flex-col bg-white">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { isRTL } = useLanguage()

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
