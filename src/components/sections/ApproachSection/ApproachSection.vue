<script setup>
import { ref } from 'vue'
import UiCollapse from '@/src/components/ui/UiCollapse.vue'
import ApproachThinking from './ApproachThinking.vue'

const approaches = [
  { title: 'Visão funcional e integrativa', description: 'Considero o organismo como um sistema interligado.' },
  { title: 'Personalização', description: 'Cada pessoa é única. Estratégias ajustadas à sua realidade.' },
  { title: 'Ciência aplicada', description: 'Tradução do conhecimento científico para a prática diária.' },
  { title: 'Educação e autonomia', description: 'Ensino para que você tome decisões melhores todos os dias.' },
]

const activeApproach = ref(0)

const toggleApproach = (index) => {
  activeApproach.value = activeApproach.value === index ? null : index
}
</script>

<template>
  <div class="section-inner space-y-5">
    <ApproachThinking />

    <div class="grid items-center gap-9 rounded-lg bg-white/72 p-7 sm:p-10 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="section-kicker animate-in">FAQ de abordagem</p>
        <h2 class="section-title animate-in" style="--delay: 80ms">
          Nutrição com
          <span class="section-title-accent">profundidade e propósito.</span>
        </h2>
        <p class="mt-6 max-w-xl text-sm leading-7 text-ink/70 animate-in" style="--delay: 160ms">
          Integro ciência, fisiologia e estilo de vida para entender o indivíduo como um todo e propor estratégias realistas, eficazes e sustentáveis.
        </p>
      </div>
      <div class="overflow-hidden rounded-lg border border-forest-300/20 shadow-soft animate-in" style="--delay: 180ms">
        <UiCollapse
          v-for="(item, index) in approaches"
          :key="item.title"
          v-bind="item"
          :open="activeApproach === index"
          @toggle="toggleApproach(index)"
        />
      </div>
    </div>
  </div>
  <img src="../../../assets/leaf.svg" alt="" class="pointer-events-none absolute -left-10 bottom-0 h-80 rotate-180 opacity-70" />
</template>
