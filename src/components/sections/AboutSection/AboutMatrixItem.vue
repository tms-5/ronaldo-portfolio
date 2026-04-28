<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <article class="grid grid-cols-[72px_1fr] gap-5 p-8">
    <div class="flex size-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
      <UiIcon :name="icon" :size="36" />
    </div>
    <div>
      <h3 class="text-2xl font-semibold text-forest-900">{{ title }}</h3>
      <p class="mt-4 max-w-xs text-base leading-8 text-ink">{{ text }}</p>
    </div>
  </article>
</template>
