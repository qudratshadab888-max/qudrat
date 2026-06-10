<template>
  <footer class="bg-primary-900 text-gray-200 border-t border-gray-800 mt-20">
    <div class="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-white font-bold text-lg">
            {{ locale === "en" ? "Qudratullah Shadab" : "قدرت الله شاداب" }}
          </h3>
          <p class="text-sm text-gray-400">
            {{
              locale === "en"
                ? "Artist, Painter & Cultural Activist exploring contemporary art and cultural expression."
                : "هنرمند، نقاش و فعال فرهنگی در کاوش هنر معاصر و بیان فرهنگی."
            }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">
            {{ locale === "en" ? "Navigation" : "ناوبری" }}
          </h4>
          <ul class="space-y-2">
            <li v-for="route in navRoutes" :key="route.path">
              <NuxtLink
                :to="route.path"
                class="text-gray-400 hover:text-accent transition font-medium text-sm"
              >
                {{ locale === "en" ? route.en : route.fa }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">
            {{ locale === "en" ? "Contact" : "تماس" }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@qudratullah.com"
                class="text-gray-400 hover:text-accent transition"
              >
                info@qudratullah.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" class="text-gray-400 hover:text-accent transition">
                +91 (98) 765-43210
              </a>
            </li>
            <li class="text-gray-400">India</li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-white font-semibold mb-4">{{ locale === "en" ? "Follow" : "دنبال کنید" }}</h4>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center text-white transition"
              :aria-label="locale === 'en' ? 'Instagram' : 'اینستاگرام'"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center text-white transition"
              :aria-label="locale === 'en' ? 'Facebook' : 'فیس‌بوک'"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center text-white transition"
              :aria-label="locale === 'en' ? 'YouTube' : 'یوتیوب'"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <!-- Bottom Footer -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500">
            {{
              locale === "en"
                ? "© 2026 Qudratullah Shadab. All rights reserved."
                : "© ۱۴۰۵ قدرت الله شاداب. تمام حقوق محفوظ است."
            }}
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-sm text-gray-500 hover:text-accent transition">
              {{ locale === "en" ? "Privacy Policy" : "سیاست حریم خصوصی" }}
            </a>
            <a href="#" class="text-sm text-gray-500 hover:text-accent transition">
              {{ locale === "en" ? "Terms of Service" : "شرایط خدمات" }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

const navRoutes = [
  { path: "/", en: "Home", fa: "خانه" },
  { path: "/about", en: "About", fa: "درباره من" },
  { path: "/social", en: "Social", fa: "اجتماعی" },
  { path: "/cultural", en: "Cultural", fa: "فرهنگی" },
  { path: "/paintings", en: "Paintings", fa: "نقاشی‌ها" },
  { path: "/poetry-recitation", en: "Poetry", fa: "شعر" },
  { path: "/articles", en: "Articles", fa: "مقالات" },
  { path: "/contact", en: "Contact", fa: "تماس" },
]
</script>

