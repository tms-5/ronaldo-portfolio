<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <article class="rounded-lg border border-forest-300/25 bg-white/72 p-7 text-center shadow-sm backdrop-blur transition duration-500 hover:border-forest-500/40">
    <UiIcon :name="icon" :size="54" class="mx-auto text-forest-700" />
    <span class="mx-auto mt-5 block h-px w-9 bg-forest-300" />
    <h3 class="mt-5 text-lg font-medium leading-7 text-forest-900">{{ title }}</h3>
    <p class="mt-3 text-sm leading-7 text-ink/65">{{ text }}</p>
  </article>
</template>
