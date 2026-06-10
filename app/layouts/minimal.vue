<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'" class="min-h-screen flex flex-col bg-white">
    <Header />
    <main class="flex-1 max-w-7xl mx-auto w-full px-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { isRTL } = useLanguage()
</script>
