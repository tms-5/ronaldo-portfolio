<script setup>
import UiCard from '@/src/components/ui/UiCard.vue'
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <UiCard interactive class="text-center">
    <UiIcon :name="icon" :size="38" class="mx-auto text-forest-500" />
    <h3 class="mt-5 text-lg font-semibold text-forest-900">{{ title }}</h3>
    <p class="mt-3 text-sm leading-6 text-ink/65">{{ text }}</p>
  </UiCard>
</template>
