<script setup>
import UiIcon from './UiIcon.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  open: { type: Boolean, default: false },
})

defineEmits(['toggle'])
</script>

<template>
  <div class="border-b border-forest-300/20 bg-white/55 transition duration-300 first:rounded-t-lg last:rounded-b-lg last:border-b-0 hover:bg-forest-50/70">
    <button
      class="flex w-full items-center gap-5 px-6 py-4 text-left"
      type="button"
      :aria-expanded="open"
      @click="$emit('toggle')"
    >
      <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-forest-500 text-white">
        <UiIcon name="Check" :size="16" :stroke-width="2.4" />
      </span>
      <span class="min-w-0 flex-1">
        <span class="block text-sm font-semibold text-forest-900">{{ title }}</span>
        <span class="block text-sm text-ink/65">{{ description }}</span>
      </span>
      <UiIcon name="ChevronDown" :size="18" class="shrink-0 text-forest-700 transition duration-300" :class="open ? 'rotate-180' : ''" />
    </button>
    <div class="grid transition-all duration-500" :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
      <div class="overflow-hidden">
        <p class="px-16 pb-5 text-sm leading-6 text-ink/70">
          Estratégia prática, acompanhamento claro e ajustes conforme sua rotina, exames e evolução.
        </p>
      </div>
    </div>
  </div>
</template>
