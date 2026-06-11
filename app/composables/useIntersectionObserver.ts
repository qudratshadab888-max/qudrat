export const useIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void, options?: IntersectionObserverInit) => {
  const observer = ref<IntersectionObserver | null>(null)
  const elements = ref<Element[]>([])

  const observe = (el: Element) => {
    if (!observer.value) {
      observer.value = new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      })
    }
    observer.value.observe(el)
    elements.value.push(el)
  }

  const unobserve = (el: Element) => {
    if (observer.value) {
      observer.value.unobserve(el)
      elements.value = elements.value.filter((e) => e !== el)
    }
  }

  const disconnect = () => {
    if (observer.value) {
      observer.value.disconnect()
      elements.value = []
    }
  }

  onUnmounted(() => {
    disconnect()
  })

  return {
    observe,
    unobserve,
    disconnect,
  }
}
