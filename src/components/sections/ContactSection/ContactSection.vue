<script setup>
import UiButton from '@/src/components/ui/UiButton.vue'
import UiIcon from '@/src/components/ui/UiIcon.vue'
import UiLogo from '@/src/components/ui/UiLogo.vue'
import ContactItem from './ContactItem.vue'
import ContentSection from './ContentSection.vue'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Foco de atuação', href: '#foco-de-atuacao' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Contato', href: '#contato' },
]

const contacts = [
  { icon: 'Instagram', text: '@ronaldo.nutrii' },
  { icon: 'Mail', text: 'contato@ronaldoneto.com' },
  { icon: 'MapPin', text: 'Recife - PE' },
]
</script>

<template>
  <div class="section-inner">
    <ContentSection />

    <div class="grid gap-8 border-t border-forest-300/20 pt-9 lg:grid-cols-[1.15fr_0.75fr_0.9fr_1fr]">
      <div class="animate-in">
        <UiLogo />
        <p class="mt-4 max-w-xs text-sm leading-7 text-ink/65">
          Nutrição baseada em ciência, fisiologia e estratégia para transformar saúde em resultado real.
        </p>
      </div>
      <div class="animate-in" style="--delay: 90ms">
        <h3 class="text-xs font-bold uppercase tracking-[0.24em] text-forest-700">Navegação</h3>
        <nav class="mt-4 grid gap-2 text-sm text-ink/70">
          <a v-for="link in links" :key="link.href" class="transition hover:text-forest-700" :href="link.href">{{ link.label }}</a>
        </nav>
      </div>
      <div class="animate-in" style="--delay: 180ms">
        <h3 class="text-xs font-bold uppercase tracking-[0.24em] text-forest-700">Contato</h3>
        <ul class="mt-4 space-y-3">
          <ContactItem v-for="contact in contacts" :key="contact.text" v-bind="contact" />
        </ul>
      </div>
      <div class="animate-in" style="--delay: 270ms">
        <h3 class="text-xs font-bold uppercase tracking-[0.24em] text-forest-700">Aviso legal</h3>
        <p class="mt-4 max-w-xs text-sm leading-7 text-ink/65">
          Este site tem caráter informativo e não substitui consulta com profissional de saúde.
        </p>
      </div>
      <p class="border-t border-forest-300/20 pt-6 text-center text-xs text-ink/45 lg:col-span-4">
        © 2025 Ronaldo Neto. Todos os direitos reservados.
      </p>
    </div>
  </div>
</template>
