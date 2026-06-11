export default defineEventHandler(async (event) => {
  const baseURL = "https://qudratullah.com"

  const pages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/about", priority: "0.9", changefreq: "monthly" },
    { path: "/paintings", priority: "0.9", changefreq: "weekly" },
    { path: "/poetry-recitation", priority: "0.9", changefreq: "weekly" },
    { path: "/articles", priority: "0.9", changefreq: "daily" },
    { path: "/social", priority: "0.8", changefreq: "monthly" },
    { path: "/cultural", priority: "0.8", changefreq: "monthly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
  ]

  const lastmod = new Date().toISOString().split("T")[0]

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseURL}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`

  event.node.res.setHeader("Content-Type", "application/xml")
  return xmlContent
})
