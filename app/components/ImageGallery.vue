<template>
  <div>
    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PaintingCard
        v-for="(item, idx) in items"
        :key="idx"
        :image="item.image"
        :title="item.title"
        :date="item.date"
        :description="item.description"
        @click="openLightbox(idx)"
      />
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="selectedIndex !== null"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          @click.self="closeLightbox"
        >
          <div class="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center p-4">
            <!-- Image -->
            <img
              :src="currentItem?.image"
              :alt="currentItem?.title"
              class="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <!-- Info -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 class="text-white text-2xl font-bold mb-2">{{ currentItem?.title }}</h3>
              <p v-if="currentItem?.date" class="text-gray-300 text-sm mb-2">{{ formatDate(currentItem.date) }}</p>
              <p v-if="currentItem?.description" class="text-gray-400">{{ currentItem.description }}</p>
            </div>

            <!-- Navigation -->
            <button
              class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg transition"
              @click="previousImage"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg transition"
              @click="nextImage"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Close Button -->
            <button
              class="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg transition"
              @click="closeLightbox"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Counter -->
            <div class="absolute top-4 left-4 bg-white/20 text-white px-4 py-2 rounded-lg text-sm">
              {{ (selectedIndex ?? 0) + 1 }} / {{ items.length }}
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLanguage()

interface ImageItem {
  image: string
  title: string
  date: string
  description?: string
}

const props = defineProps<{
  items: ImageItem[]
}>()

const selectedIndex = ref<number | null>(null)

const currentItem = computed(() => (selectedIndex.value !== null ? props.items[selectedIndex.value] : null))

const openLightbox = (idx: number) => {
  selectedIndex.value = idx
}

const closeLightbox = () => {
  selectedIndex.value = null
}

const nextImage = () => {
  if (selectedIndex.value !== null && selectedIndex.value < props.items.length - 1) {
    selectedIndex.value++
  }
}

const previousImage = () => {
  if (selectedIndex.value !== null && selectedIndex.value > 0) {
    selectedIndex.value--
  }
}

const formatDate = (date: string) => {
  if (!date) return ""
  const d = new Date(date)
  return locale.value === "en" ? d.toLocaleDateString("en-US", { year: "numeric", month: "long" }) : d.toLocaleDateString("fa-IR")
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
