<script setup>
import UiIcon from '@/src/components/ui/UiIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <article class="min-w-0 px-5 py-6">
    <div class="flex size-16 items-center justify-center rounded-full bg-forest-50 text-forest-500">
      <UiIcon :name="icon" :size="32" />
    </div>
    <h3 class="mt-5 text-xl font-semibold leading-7 text-forest-900">{{ title }}</h3>
    <p class="mt-3 max-w-sm text-sm leading-7 text-ink/70">{{ text }}</p>
  </article>
</template>
