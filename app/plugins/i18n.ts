import { createI18n } from "vue-i18n"
import { translations } from "../data/translations"

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: translations,
    globalInjection: true,
    missingWarn: false,
    fallbackWarn: false,
  })

  vueApp.use(i18n)

  return {
    provide: {
      i18n,
    },
  }
})
