<template>
  <div>
    <HeroSection :title="locale === 'en' ? 'Get in Touch' : 'تماس با من'" :subtitle="locale === 'en' ? 'Contact' : 'تماس'" />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

usePageMeta(
  locale.value === "en" ? "Contact" : "تماس",
  locale.value === "en" ? "Get in touch with Qudratullah Shadab" : "با قدرت الله شاداب تماس بگیرید"
)
</script>