<script setup>
import TopBar from './components/TopBar.vue'
import UiSection from './components/ui/UiSection.vue'
import HeroSection from './components/sections/HeroSection/HeroSection.vue'
import AboutSection from './components/sections/AboutSection/AboutSection.vue'
import FocusSection from './components/sections/FocusSection/FocusSection.vue'
import ApproachSection from './components/sections/ApproachSection/ApproachSection.vue'
import ContactSection from './components/sections/ContactSection/ContactSection.vue'
import { useSectionTracker } from './composables/useSectionTracker'

const sections = [
  { id: 'inicio', label: 'Início', component: HeroSection },
  { id: 'sobre', label: 'Sobre', component: AboutSection },
  { id: 'foco-de-atuacao', label: 'Foco de atuação', component: FocusSection },
  { id: 'abordagem', label: 'Abordagem', component: ApproachSection },
  { id: 'contato', label: 'Contato', component: ContactSection },
]

const { activeSection, visibleSections, scrollToSection } = useSectionTracker(sections.map((section) => section.id))
</script>

<template>
  <TopBar :items="sections" :active="activeSection" @navigate="scrollToSection" />
  <main>
    <UiSection
      v-for="section in sections"
      :id="section.id"
      :key="section.id"
      :visible="visibleSections.has(section.id)"
      :class="[
        section.id === 'inicio' ? 'bg-linen' : section.id === 'contato' ? 'footer-shell bg-white' : 'bg-gradient-to-b from-white to-linen',
      ]"
    >
      <component :is="section.component" />
    </UiSection>
  </main>
</template>
