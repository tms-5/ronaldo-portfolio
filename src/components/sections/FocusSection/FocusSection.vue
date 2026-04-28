<script setup>
import FocusItem from './FocusItem.vue'

const items = [
  { icon: 'HeartPulse', title: 'Síndrome metabólica' },
  { icon: 'Droplet', title: 'Diabetes mellitus tipo 2' },
  { icon: 'Stethoscope', title: 'Doenças renais' },
  { icon: 'Heart', title: 'Doenças cardiovasculares' },
  { icon: 'Shield', title: 'Inflamação crônica de baixo grau/alto grau' },
  { icon: 'Activity', title: 'Disfunções gastrointestinais funcionais' },
]
</script>

<template>
  <div class="section-inner">
    <div class="rounded-lg bg-white/60 px-5 py-10 shadow-soft backdrop-blur sm:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-kicker animate-in">Foco de atuação</p>
        <h2 class="mt-4 text-3xl font-semibold text-forest-700 bg-forest-100/45 sm:text-4xl animate-in" style="--delay: 80ms">Prevenir é o melhor caminho.</h2>
        <p class="mt-3 text-sm leading-6 text-ink animate-in" style="--delay: 160ms">
          Atuação baseada em evidências para prevenir e manejar condições que impactam sua saúde e qualidade de vida.
        </p>
      </div>
      <div class="mt-8 grid gap-y-4 md:grid-cols-3 xl:grid-cols-6">
        <FocusItem
          v-for="(item, index) in items"
          :key="item.title"
          v-bind="item"
          class="animate-in"
          :style="{ '--delay': `${160 + index * 70}ms` }"
        />
      </div>
    </div>
  </div>
</template>
