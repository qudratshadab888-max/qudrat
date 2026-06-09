<template>
    <div>
        <Header></Header>

        <!-- Hero Section -->
        <section class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden relative">
            <!-- Background accent -->
            <div class="absolute top-20 right-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

            <div class="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                <!-- Left Content -->
                <div class="space-y-8 text-white">
                    <div class="space-y-4">
                        <span class="inline-block text-yellow-500 font-semibold text-sm tracking-widest uppercase">Welcome to My Portfolio</span>
                        <h1 class="text-5xl md:text-7xl font-black leading-tight">
                            Qudratullah<br><span class="text-yellow-500">Shadab</span>
                        </h1>
                        <p class="text-xl text-gray-300 max-w-lg">
                            Artist • Painter • Cultural Activist
                        </p>
                    </div>

                    <p class="text-lg text-gray-400 leading-relaxed max-w-lg">
                        Exploring the boundaries of contemporary art through diverse mediums. My work reflects cultural heritage, social consciousness, and the beauty of human expression.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <NuxtLink
                            to="/gallery"
                            class="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg transition transform hover:scale-105"
                        >
                            View Gallery
                        </NuxtLink>
                        <NuxtLink
                            to="/contact"
                            class="px-8 py-3 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-bold rounded-lg transition"
                        >
                            Get in Touch
                        </NuxtLink>
                    </div>
                </div>

                <!-- Right Image -->
                <div class="relative h-96 md:h-full flex items-center justify-center">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <img
                        src="/images/images (13).jpg"
                        alt="Qudratullah Shadab"
                        class="w-full h-96 md:h-screen object-cover rounded-lg shadow-2xl"
                    >
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <div class="w-6 h-10 border-2 border-yellow-600 rounded-full flex items-center justify-center">
                    <div class="w-1 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
</script>