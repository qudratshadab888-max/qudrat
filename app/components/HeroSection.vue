<template>
  <section class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#4c1d95_0%,#2e1065_42%,#111827_100%)] py-20 text-white md:py-28">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"></div>
    <div class="absolute -right-24 top-12 h-72 w-72 rounded-full bg-accent/15 blur-3xl"></div>
    <div class="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-secondary-400/15 blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <!-- Content -->
      <div class="max-w-3xl space-y-8 animate-fadeInUp">
        <div class="space-y-4">
          <span v-if="subtitle" class="inline-flex rounded-full border border-accent/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent shadow-sm backdrop-blur">
            {{ subtitle }}
          </span>
          <h1 class="text-4xl font-black leading-tight tracking-normal md:text-6xl lg:text-7xl">
            {{ title }}
          </h1>
          <p v-if="description" class="max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">{{ description }}</p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <NuxtLink
            v-for="(btn, idx) in buttons"
            :key="btn.label"
            :to="btn.link"
            :style="{ 'animation-delay': `${idx * 100}ms` }"
            :class="[
              'inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-semibold shadow-sm transition duration-300 animate-fadeInUp focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-900',
              btn.primary
                ? 'bg-accent text-primary-900 hover:-translate-y-0.5 hover:bg-white'
                : 'border border-accent/70 text-accent hover:-translate-y-0.5 hover:bg-accent hover:text-primary-900',
            ]"
          >
            {{ btn.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Image -->
      <div v-if="image" class="flex justify-center lg:justify-end animate-slideInRight">
        <div class="relative w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur md:max-w-md">
          <div class="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/40 to-secondary-400/20 blur"></div>
          <img :src="image" :alt="title" class="mx-auto aspect-square w-full max-w-xs rounded-xl object-contain" />
          <div class="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-gray-200">
            <p>{{ title }}</p>
            <p v-if="subtitle" class="text-accent">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Button {
  label: string
  link: string
  primary?: boolean
}

withDefaults(
  defineProps<{
    title: string
    description?: string
    subtitle?: string
    image?: string
    buttons?: Button[]
  }>(),
  {
    buttons: () => [],
  }
)
</script>
