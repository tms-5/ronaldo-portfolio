<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  number: { type: Number, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <article class="relative text-center">
    <div class="mx-auto flex size-16 items-center justify-center rounded-full bg-forest-50 text-forest-700 shadow-sm ring-1 ring-forest-300/30">
      <UiIcon :name="icon" :size="34" />
    </div>
    <h3 class="mt-5 text-lg font-semibold text-forest-900">{{ title }}</h3>
    <p class="mx-auto mt-3 max-w-xs text-sm leading-7 text-ink/65">{{ text }}</p>
  </article>
</template>
