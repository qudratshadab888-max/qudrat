export const useNavigation = () => {
  const routes = [
    { path: "/", en: "Home", fa: "خانه" },
    { path: "/about", en: "About", fa: "درباره من" },
    { path: "/social", en: "Social", fa: "اجتماعی" },
    { path: "/cultural", en: "Cultural", fa: "فرهنگی" },
    { path: "/paintings", en: "Paintings", fa: "نقاشی‌ها" },
    { path: "/poetry-recitation", en: "Poetry", fa: "شعر" },
    { path: "/articles", en: "Articles", fa: "مقالات" },
    { path: "/contact", en: "Contact", fa: "تماس" },
  ]

  return {
    routes,
  }
}
