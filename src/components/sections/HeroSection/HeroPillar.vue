<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <div class="grid grid-cols-[44px_1fr] items-start group-hover:bg-forest-100/50 gap-4 border-forest-300/25 p-4 first:pl-0 last:pr-0 md:border-r md:last:border-r-0">
    <UiIcon :name="icon" :size="34" class="text-forest-500" />
    <div>
      <p class="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-700">{{ title }}</p>
      <p class="mt-2 text-sm leading-6 text-ink/70">{{ text }}</p>
    </div>
  </div>
</template>
