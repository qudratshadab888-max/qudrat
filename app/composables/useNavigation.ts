export const useNavigation = () => {
  const routes = [
    { path: "/", key: "home" },
    { path: "/about", key: "about" },
    { path: "/social", key: "social" },
    { path: "/cultural", key: "cultural" },
    { path: "/paintings", key: "paintings" },
    { path: "/poetry-recitation", key: "poetry" },
    { path: "/articles", key: "articles" },
    { path: "/contact", key: "contact" },
  ]

  return {
    routes,
  }
}
