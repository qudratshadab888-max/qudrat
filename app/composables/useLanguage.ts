import { useI18n } from "vue-i18n"

export const useLanguage = () => {
  const { locale, t } = useI18n()
  const colorMode = useColorMode()

  const isRTL = computed(() => locale.value === "fa")

  const setLocale = (lang: string) => {
    locale.value = lang
    useHead({
      htmlAttrs: {
        dir: lang === "fa" ? "rtl" : "ltr",
        lang: lang,
      },
    })

    if (process.client) {
      localStorage.setItem("locale", lang)
    }
  }

  const toggleLanguage = () => {
    const newLocale = locale.value === "en" ? "fa" : "en"
    setLocale(newLocale)
  }

  // Initialize from localStorage
  onMounted(() => {
    if (process.client) {
      const savedLocale = localStorage.getItem("locale") || "en"
      setLocale(savedLocale)
    }
  })

  return {
    locale: readonly(locale),
    isRTL,
    toggleLanguage,
    setLocale,
    t,
  }
}
