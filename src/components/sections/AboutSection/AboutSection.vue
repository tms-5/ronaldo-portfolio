<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'
import AboutCommitment from './AboutCommitment.vue'
import AboutMatrixItem from './AboutMatrixItem.vue'

const features = [
  { icon: 'GraduationCap', title: 'Formação', text: '5º período | UNICAP e Conteúdo Aplicado à Patologias.' },
  { icon: 'BookOpen', title: 'Base', text: 'Ciência, fisiologia e pensamento crítico como pilares do atendimento.' },
  { icon: 'Target', title: 'Foco', text: 'Prevenção e manejo estratégico de fatores de risco que impactam sua saúde.' },
  { icon: 'UserRound', title: 'Abordagem', text: 'Individualizada, integrada e centrada no paciente.' },
]

const commitments = [
  { icon: 'ShieldCheck', title: 'Ética e ciência', text: 'Decisões baseadas em evidências, com ética e responsabilidade.' },
  { icon: 'SlidersHorizontal', title: 'Individualidade', text: 'Cada corpo, contexto e objetivo são únicos. Seu plano também é.' },
  { icon: 'TrendingUp', title: 'Consistência', text: 'Resultados reais vêm de processos sustentáveis, não de extremos.' },
  { icon: 'MessageCircle', title: 'Escuta ativa', text: 'Mais do que prescrever, eu escuto, entendo e caminho junto.' },
]
</script>

<template>
  <div class="section-inner space-y-14">
    <div class="grid items-center gap-12 lg:grid-cols-[0.80fr_1.20fr]">
      <div>
        <p class="section-kicker animate-in">Sobre mim</p>
        <h3 class="mt-4 max-w-2xl font-serif text-5xl font-bold leading-tight font-md text-forest-900 sm:text-5xl animate-in" style="--delay: 100ms">
          Muito além da
          <span class="block text-forest-500">prescrição dietética.</span>
        </h3>
        <span class="line-draw mt-8 block h-px w-14 origin-left bg-forest-500 opacity-0" style="--delay: 170ms" />
        <div class="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-ink/72 animate-in" style="--delay: 220ms">
          <p>Acredito que a Nutrição deve ir além da prescrição dietética superficial. Compreender vias metabólicas, modulação hormonal, estresse oxidativo, microbiota intestinal e impacto do estilo de vida.</p>
          <p>Defendo uma abordagem sem terrorismo nutricional, sem radicalismos e sem soluções simplistas. Saúde se constrói por meio de consistência, adesão sustentável e tomada de decisão correta.</p>
        </div>
      </div>

      <div class="relative rounded-lg border border-forest-300/30 bg-white/62 p-4 shadow-soft animate-in about-matrix" style="--delay: 180ms">
        <div class="grid sm:grid-cols-2">
          <AboutMatrixItem
            v-for="(feature, index) in features"
            :key="feature.title"
            v-bind="feature"
            class="border-forest-300/25"
            :class="[
              index === 0 || index === 2 ? 'sm:border-r' : '',
              index < 2 ? 'border-b' : '',
            ]"
          />
        </div>
        <div class="absolute left-1/2 top-1/2 hidden size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-forest-50 bg-[#FAF9F7] text-forest-500 sm:flex">
          <UiIcon name="Sprout" :size="38" />
        </div>
        <img src="../../../assets/leaf.svg" alt="" class="pointer-events-none absolute -right-28 bottom-0 h-96 opacity-55" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-matrix {
  zoom: 0.75;
}</style>
