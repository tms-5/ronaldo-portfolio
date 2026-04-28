<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <li class="flex items-center gap-3 text-sm text-ink/70">
    <UiIcon :name="icon" :size="17" class="text-forest-500" />
    <span>{{ text }}</span>
  </li>
</template>
