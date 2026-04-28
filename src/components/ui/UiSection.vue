<script setup>
defineProps({
  id: { type: String, required: true },
  visible: { type: Boolean, default: false },
})
</script>

<template>
  <section :id="id" class="section-shell" :class="visible ? 'is-visible' : ''">
    <slot />
  </section>
</template>
