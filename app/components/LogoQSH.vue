<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="logo-qsh"
  >
    <!-- Fedora Hat -->
    <g id="fedora">
      <!-- Brim -->
      <ellipse cx="100" cy="70" rx="65" ry="15" fill="#1a1a1a" />
      <!-- Crown -->
      <path d="M 60 70 Q 60 30 100 20 Q 140 30 140 70 Z" fill="#1a1a1a" />
      <!-- Hat Band -->
      <ellipse cx="100" cy="70" rx="65" ry="12" fill="none" stroke="#D4AF37" stroke-width="2" />
    </g>

    <!-- Letter Q with artistic flair -->
    <g id="q-letter">
      <!-- Main circle -->
      <circle cx="100" cy="130" r="35" fill="none" stroke="#2E1065" stroke-width="3" />
      <!-- Tail -->
      <path d="M 130 155 Q 145 165 150 180" fill="none" stroke="#2E1065" stroke-width="3" stroke-linecap="round" />
      <!-- Accent dot -->
      <circle cx="100" cy="130" r="8" fill="#D4AF37" />
    </g>

    <!-- Pen Nib Element -->
    <g id="pen-nib">
      <!-- Nib point -->
      <path
        d="M 155 110 L 165 125 L 160 135 L 150 120 Z"
        fill="#D4AF37"
      />
      <!-- Accent line -->
      <path
        d="M 157 112 L 162 128"
        stroke="#8B0000"
        stroke-width="1.5"
      />
    </g>

    <!-- Decorative elements -->
    <g id="accents">
      <!-- Left accent -->
      <line x1="45" y1="100" x2="55" y2="100" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" />
      <!-- Right accent -->
      <line x1="145" y1="100" x2="155" y2="100" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" />
    </g>
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
  }>(),
  {
    size: 100,
  }
)
</script>

<style scoped>
.logo-qsh {
  max-width: 100%;
  height: auto;
}
</style>
