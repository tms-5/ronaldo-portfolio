<script setup>
import UiIcon from './UiIcon.vue'

defineProps({
  icon: { type: String, default: '' },
})
</script>

<template>
  <span class="inline-flex items-center gap-2 rounded-full border border-forest-300/60 bg-white/70 px-4 py-2 text-sm font-medium text-forest-700 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-forest-500">
    <UiIcon v-if="icon" :name="icon" :size="16" />
    <slot />
  </span>
</template>
