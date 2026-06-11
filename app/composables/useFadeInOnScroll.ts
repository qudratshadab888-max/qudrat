export const useFadeInOnScroll = () => {
  const { observe } = useIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp")
        entry.target.classList.remove("opacity-0")
      }
    })
  })

  const fadeInElement = (el: Element) => {
    el.classList.add("opacity-0")
    observe(el)
  }

  return {
    fadeInElement,
  }
}
