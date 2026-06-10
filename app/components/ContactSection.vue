<template>
  <section class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle title="Get in Touch" subtitle="Contact" description="Let's connect and collaborate on creative projects." />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              {{ locale === "en" ? "Full Name" : "نام کامل" }}
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-900 focus:ring-2 focus:ring-primary-900/10 transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              {{ locale === "en" ? "Email Address" : "نشانی ایمیل" }}
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-900 focus:ring-2 focus:ring-primary-900/10 transition"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              {{ locale === "en" ? "Your Message" : "پیام شما" }}
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-900 focus:ring-2 focus:ring-primary-900/10 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full px-8 py-3 bg-primary-900 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            {{ locale === "en" ? "Send Message" : "ارسال پیام" }}
          </button>

          <Transition name="fade">
            <div v-if="submitted" class="p-4 rounded-lg" :class="success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
              {{ success ? (locale === "en" ? "Message sent successfully!" : "پیام با موفقیت ارسال شد!") : (locale === "en" ? "Error sending message" : "خطا در ارسال پیام") }}
            </div>
          </Transition>
        </form>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h4 class="font-bold text-primary-900 mb-4">{{ locale === "en" ? "Contact Information" : "اطلاعات تماس" }}</h4>
            <div class="space-y-4">
              <div class="flex gap-4">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">{{ locale === "en" ? "Email" : "ایمیل" }}</p>
                  <a href="mailto:info@qudratullah.com" class="text-primary-900 font-semibold hover:text-accent transition">
                    info@qudratullah.com
                  </a>
                </div>
              </div>

              <div class="flex gap-4">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">{{ locale === "en" ? "Phone (WhatsApp)" : "تلفن (واتس اپ)" }}</p>
                  <a href="tel:+919876543210" class="text-primary-900 font-semibold hover:text-accent transition">
                    +91 (98) 765-43210
                  </a>
                </div>
              </div>

              <div class="flex gap-4">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-500">{{ locale === "en" ? "Location" : "موقعیت" }}</p>
                  <p class="text-primary-900 font-semibold">India</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-bold text-primary-900 mb-4">{{ locale === "en" ? "Follow Me" : "دنبال کنید" }}</h4>
            <div class="flex gap-4">
              <a
                href="#"
                class="w-12 h-12 rounded-full bg-primary-900/10 hover:bg-accent hover:text-white flex items-center justify-center transition"
                :aria-label="locale === 'en' ? 'Instagram' : 'اینستاگرام'"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 rounded-full bg-primary-900/10 hover:bg-accent hover:text-white flex items-center justify-center transition"
                :aria-label="locale === 'en' ? 'Facebook' : 'فیس‌بوک'"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 rounded-full bg-primary-900/10 hover:bg-accent hover:text-white flex items-center justify-center transition"
                :aria-label="locale === 'en' ? 'YouTube' : 'یوتیوب'"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

const form = reactive({
  name: "",
  email: "",
  message: "",
})

const submitted = ref(false)
const success = ref(false)

const submitForm = async () => {
  try {
    success.value = true
    form.name = ""
    form.email = ""
    form.message = ""
    submitted.value = true
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  } catch (error) {
    success.value = false
    submitted.value = true
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}
</script>
