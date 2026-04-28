<script setup>
import { ref } from 'vue'
import UiButton from './ui/UiButton.vue'
import UiIcon from './ui/UiIcon.vue'
import UiLogo from './ui/UiLogo.vue'

defineProps({
  items: { type: Array, required: true },
  active: { type: String, required: true },
})

const emit = defineEmits(['navigate'])
const isMenuOpen = ref(false)

const navigate = (id) => {
  emit('navigate', id)
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-linen/80 px-5 py-4 backdrop-blur-xl transition duration-500 sm:px-8 lg:px-14">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-6">
      <UiLogo />
      <nav class="hidden items-center gap-1 lg:flex">
        <button
          v-for="item in items"
          :key="item.id"
          type="button"
          class="relative rounded-lg px-4 py-3 text-sm font-medium text-ink/75 transition duration-300 hover:text-forest-700"
          :class="active === item.id ? 'text-forest-700' : ''"
          @click="navigate(item.id)"
        >
          {{ item.label }}
          <span class="absolute inset-x-4 bottom-1 h-px origin-left bg-forest-500 transition duration-300" :class="active === item.id ? 'scale-x-100' : 'scale-x-0'" />
        </button>
      </nav>
      <UiButton href="https://www.instagram.com/ronaldo.nutrii" variant="secondary" icon="Instagram" class="hidden sm:inline-flex">Instagram</UiButton>
      <button
        type="button"
        class="inline-flex size-11 items-center justify-center rounded-lg border border-forest-300/50 bg-white/60 text-forest-700 transition duration-300 hover:bg-forest-50 lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <UiIcon :name="isMenuOpen ? 'X' : 'Menu'" :size="22" />
      </button>
    </div>
    <div class="mx-auto grid max-w-7xl overflow-hidden transition-all duration-500 lg:hidden" :class="isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
      <div class="overflow-hidden">
        <nav class="mt-4 rounded-lg border border-forest-300/25 bg-white/90 p-2 shadow-soft">
          <button
            v-for="item in items"
            :key="item.id"
            type="button"
            class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-ink/75 transition duration-300 hover:bg-forest-50 hover:text-forest-700"
            :class="active === item.id ? 'bg-forest-50 text-forest-700' : ''"
            @click="navigate(item.id)"
          >
            <span>{{ item.label }}</span>
            <span class="size-2 rounded-full bg-forest-500 transition duration-300" :class="active === item.id ? 'opacity-100' : 'opacity-0'" />
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>
