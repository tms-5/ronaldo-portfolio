<script setup>
import UiIcon from './UiIcon.vue'

defineProps({
  as: { type: String, default: 'a' },
  href: { type: String, default: '#' },
  icon: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
})
</script>

<template>
  <component
    :is="as"
    :href="as === 'a' ? href : undefined"
    class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg border px-6 text-sm font-semibold transition-colors duration-700 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2"
    :class="[
      variant === 'primary'
        ? 'bg-forest-700 text-forest-100 shadow-soft hover:text-white'
        : 'border-forest-500/70 text-forest-700 hover:text-forest-100',
    ]"
  >
    <span
      class="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"
      :class="variant === 'primary' ? 'bg-forest-500' : 'bg-forest-500'"
      aria-hidden="true"
    />
    <span class="relative z-10 inline-flex items-center justify-center gap-3">
      <UiIcon v-if="icon" :name="icon" :size="18" />
      <span><slot /></span>
    </span>
  </component>
</template>
