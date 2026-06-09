<template>
  <footer class="bg-gray-900 text-gray-300 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-5 py-12 md:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h3 class="text-white font-bold text-lg">Qudratullah Shadab</h3>
          <p class="text-sm text-gray-400">
            Artist, Painter & Cultural Activist exploring contemporary art and cultural expression.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-400 hover:text-yellow-600 transition font-medium text-sm"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-400 hover:text-yellow-600 transition font-medium text-sm"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/gallery"
                class="text-gray-400 hover:text-yellow-600 transition font-medium text-sm"
              >
                Gallery
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/articles"
                class="text-gray-400 hover:text-yellow-600 transition font-medium text-sm"
              >
                Articles
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@qudratullah.com"
                class="text-gray-400 hover:text-yellow-600 transition"
              >
                info@qudratullah.com
              </a>
            </li>
            <li>
              <a
                href="tel:+91234567890"
                class="text-gray-400 hover:text-yellow-600 transition"
              >
                +91 (234) 567-890
              </a>
            </li>
            <li class="text-gray-400">
              India
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-white font-semibold mb-4">Follow</h4>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center text-white transition"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center text-white transition"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.56-4.3z"/>
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-full flex items-center justify-center text-white transition"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
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
            &copy; 2026 Qudratullah Shadab. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-sm text-gray-500 hover:text-yellow-600 transition">
              Privacy Policy
            </a>
            <a href="#" class="text-sm text-gray-500 hover:text-yellow-600 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
