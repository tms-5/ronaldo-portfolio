import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useSectionTracker(sectionIds) {
  const activeSection = ref(sectionIds[0])
  const visibleSections = ref(new Set([sectionIds[0]]))
  let resizeObserver
  let intersectionObserver

  const updateActiveSection = () => {
    const midpoint = window.innerHeight * 0.42
    let nearest = sectionIds[0]
    let nearestDistance = Number.POSITIVE_INFINITY

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return
      const rect = element.getBoundingClientRect()
      const distance = Math.abs(rect.top - midpoint)

      if (rect.top <= window.innerHeight * 0.65 && rect.bottom >= window.innerHeight * 0.25 && distance < nearestDistance) {
        nearest = id
        nearestDistance = distance
      }
    })

    activeSection.value = nearest
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  onMounted(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    if (!('IntersectionObserver' in window) || !('ResizeObserver' in window)) {
      visibleSections.value = new Set(sectionIds)
      window.addEventListener('scroll', updateActiveSection, { passive: true })
      window.addEventListener('resize', updateActiveSection)
      updateActiveSection()
      return
    }

    intersectionObserver = new IntersectionObserver(
      (entries) => {
        const next = new Set(visibleSections.value)
        entries.forEach((entry) => {
          if (entry.isIntersecting) next.add(entry.target.id)
        })
        visibleSections.value = next
        updateActiveSection()
      },
      { threshold: [0.18, 0.38, 0.62] },
    )

    resizeObserver = new ResizeObserver(updateActiveSection)
    elements.forEach((element) => {
      intersectionObserver.observe(element)
      resizeObserver.observe(element)
    })

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()
  })

  onBeforeUnmount(() => {
    intersectionObserver?.disconnect()
    resizeObserver?.disconnect()
    window.removeEventListener('scroll', updateActiveSection)
    window.removeEventListener('resize', updateActiveSection)
  })

  return { activeSection, visibleSections, scrollToSection }
}
