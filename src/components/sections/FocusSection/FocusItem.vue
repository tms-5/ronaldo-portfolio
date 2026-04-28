<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <div class="flex min-h-32 flex-col items-center  hover:text-forest-500 border-forest-300/25 px-4 text-center transition duration-500 hover:-translate-y-2 hover:text-forest-700 md:border-r md:last:border-r-0">
    <UiIcon :name="icon" :size="38" class="text-forest-300" />
    <p class="mt-4 text-sm leading-6 text-forest-700 font-medium">{{ title }}</p>
  </div>
</template>
