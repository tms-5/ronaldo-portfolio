<script setup>
import { ref } from 'vue'
import fallbackPortrait from '../../../assets/ronaldo-hero.png'

const portraitSrc = ref('/ronaldo-amigo.jpg')
</script>

<template>
  <div class="relative min-h-[510px] overflow-hidden h-[stretch]">
    <img src="../../../assets/leaf.svg" alt="" class="absolute left-2 bottom-0 h-[570px] opacity-80" />
    <div class="absolute left-[46%] top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-forest-100/45 blur-sm" />
    <img
      :src="portraitSrc"
      alt="Retrato profissional de Ronaldo Neto"
      class="absolute left-[43%] z-10 w-auto -translate-x-1/2 object-contain drop-shadow-2xl max-height-[893px]"
      @error="portraitSrc = fallbackPortrait"
    />
    <div class="absolute right-2 top-44 z-20 hidden max-w-[210px] p-4 text-forest-900 lg:block">
      <p class="text-6xl leading-none text-forest-500">“</p>
      <p class="text-sm leading-6 font-serif text-forest-700">Nutrir é muito mais do que comer. É transformar bioquímica em saúde.</p>
      <p class="mt-5 font-script text-2xl text-forest-100 bg-forest-700 w-auto">Ronaldo Neto</p>
    </div>
  </div>
</template>
