<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  commonIcon: { type: String, required: true },
  common: { type: String, required: true },
  mineIcon: { type: String, required: true },
  mine: { type: String, required: true },
})
</script>

<template>
  <div class="grid grid-cols-2 items-center border-b border-forest-300/20 last:border-b-0">
    <div class="flex items-center gap-4 px-5 py-4 text-ink/75">
      <UiIcon :name="commonIcon" :size="25" class="text-forest-500" />
      <span>{{ common }}</span>
    </div>
    <div class="flex items-center gap-4 px-5 py-4 font-medium text-forest-900">
      <UiIcon :name="mineIcon" :size="25" class="text-forest-700" />
      <span>{{ mine }}</span>
    </div>
  </div>
</template>
