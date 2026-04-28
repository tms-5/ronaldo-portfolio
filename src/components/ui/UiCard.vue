<script setup>
defineProps({
  interactive: { type: Boolean, default: false },
})
</script>

<template>
  <article
    class="rounded-lg border border-forest-300/25 bg-white/70 p-5 shadow-sm backdrop-blur transition duration-500"
    :class="interactive ? 'hover:-translate-y-2 hover:border-forest-500/50 hover:shadow-soft' : ''"
  >
    <slot />
  </article>
</template>
