<script setup>
import UiButton from "../../ui/UiButton.vue";
import UiIcon from "../../ui/UiIcon.vue";
</script>

<template>
  <div
    class="mb-10 grid items-center gap-6 rounded-lg border border-forest-500 bg-forest-50 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] animate-in"
  >
    <div
      class="flex size-14 items-center justify-center rounded-lg border border-forest-500/30 text-forest-500"
    >
      <UiIcon name="Instagram" :size="32" />
    </div>
    <div>
      <p class="text-xl font-semibold text-forest-900">
        Conteúdo que informa, ciência que transforma.
      </p>
      <p class="mt-1 text-sm leading-6 text-ink/65">
        Acompanhe publicações sobre fisiologia, metabolismo e nutrição baseada
        em evidência.
      </p>
    </div>
    <UiButton
      href="https://www.instagram.com/"
      variant="secondary"
      icon="Instagram"
      >Ver no Instagram</UiButton
    >
  </div>
</template>
