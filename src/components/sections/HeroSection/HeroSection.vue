<script setup>
import UiButton from '@/src/components/ui/UiButton.vue'
import HeroPillar from './HeroPillar.vue'
import HeroPortrait from './HeroPortrait.vue'

const pillars = [
  { icon: 'Microscope', title: 'Ciência como base', text: 'Condutas pautadas nas melhores evidências científicas.' },
  { icon: 'Target', title: 'Foco em resultados', text: 'Estratégias personalizadas com objetivos reais e mensuráveis.' },
  { icon: 'UserRound', title: 'Atendimento individualizado', text: 'Cada paciente é único. O plano também deve ser.' },
  { icon: 'Leaf', title: 'Saúde que se sustenta', text: 'Mudanças consistentes para uma vida longa e saudável.' },
]
</script>

<template>
  <div class="section-inner flex min-h-[calc(100svh-52px)] flex-col justify-end pt-4 mb-[-5rem]">
    <div class="grid flex-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <div class="relative z-20">
        <p class="section-kicker animate-in">Nutrição baseada em ciência</p>
        <h1 class="mt-5 max-w-2xl font-serif text-4xl font-bold leading-[0.98] text-forest-900 sm:text-6xl lg:text-[3rem] animate-in" style="--delay: 90ms">
          Estratégia nutricional para saúde que
          <span class="text-forest-500">transforma.</span>
        </h1>
        <span class="line-draw mt-7 block h-[2px] w-16 origin-left bg-forest-500" style="--delay: 180ms" />
        <p class="mt-6 max-w-xl text-sm leading-7 text-ink/70 animate-in" style="--delay: 260ms">
          Atendimento especializado em Doenças Crônicas Não Transmissíveis (DCNTs), com foco em prevenção, tratamento e promoção da saúde metabólica através da nutrição baseada em evidências.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row animate-in" style="--delay: 340ms">
          <UiButton href="https://www.instagram.com/ronaldo.nutrii" icon="Instagram">Entre em contato</UiButton>
          <UiButton href="#abordagem" variant="secondary">Conhecer a abordagem</UiButton>
        </div>
      </div>
      <HeroPortrait class="animate-in" style="--delay: 180ms" />
    </div>
  </div>
</template>
