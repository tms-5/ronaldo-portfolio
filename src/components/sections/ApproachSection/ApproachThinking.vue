<script setup>
import UiIcon from "@/src/components/ui/UiIcon.vue";
import ApproachComparisonRow from "./ApproachComparisonRow.vue";
import ApproachPrincipleCard from "./ApproachPrincipleCard.vue";
import ApproachStep from "./ApproachStep.vue";

const principles = [
  {
    icon: "Microscope",
    title: "Ciência > opinião",
    text: "Decisões baseadas em evidências, não em modismos ou achismos.",
  },
  {
    icon: "UserCheck",
    title: "Individualidade biológica",
    text: "Cada corpo responde de um jeito. Sua estratégia também deve responder.",
  },
  {
    icon: "Target",
    title: "Consistência > perfeição",
    text: "Resultados reais vêm do que é feito com constância, não do que é extremo.",
  },
  {
    icon: "FileCheck2",
    title: "Decisão informada",
    text: "Informação de qualidade para escolhas mais conscientes e sustentáveis.",
  },
];

const steps = [
  {
    icon: "ClipboardCheck",
    title: "Avaliação profunda",
    text: "Entendimento completo do seu histórico, rotina, exames e objetivos.",
  },
  {
    icon: "BarChart3",
    title: "Entendimento metabólico",
    text: "Análise dos dados para entender como seu corpo funciona e quais são os pontos-chave.",
  },
  {
    icon: "Puzzle",
    title: "Estratégia personalizada",
    text: "Plano nutricional individualizado, baseado em evidências e ajustado à sua realidade.",
  },
  {
    icon: "RefreshCw",
    title: "Ajustes contínuos",
    text: "Monitoramento e ajustes constantes para garantir evolução e resultados duradouros.",
  },
];

const comparisons = [
  {
    commonIcon: "ClipboardList",
    common: "Dietas prontas",
    mineIcon: "UserCheck",
    mine: "Estratégia individual",
  },
  {
    commonIcon: "Droplet",
    common: "Foco em calorias",
    mineIcon: "Target",
    mine: "Foco em metabolismo",
  },
  {
    commonIcon: "Hourglass",
    common: "Curto prazo",
    mineIcon: "CalendarDays",
    mine: "Sustentabilidade",
  },
  {
    commonIcon: "X",
    common: "Restrição e culpa",
    mineIcon: "Heart",
    mine: "Equilíbrio e consistência",
  },
];
</script>

<template>
  <div class="space-y-5">
    <section
      class="relative overflow-hidden rounded-lg bg-white/72 p-7 shadow-soft ring-1 ring-forest-300/20 sm:p-10"
    >
      <div class="grid gap-9 lg:grid-cols-[0.66fr_1.34fr]">
        <div class="animate-in">
          <p class="section-kicker">
            01
            <span
              class="mx-4 inline-block h-px w-6 bg-forest-500 align-middle"
            />
            Como eu penso na nutrição
          </p>
          <h2
            class="mt-7 font-serif text-4xl font-bold leading-tight text-forest-900 sm:text-5xl"
          >
            Ciência aplicada,
            <span class="block text-forest-500">não opinião.</span>
          </h2>
          <span class="mt-7 block h-px w-16 bg-forest-500" />
          <p class="mt-6 max-w-md text-sm leading-7 text-ink/70">
            Minha prática é guiada por evidências científicas, respeitando a
            individualidade biológica e o contexto de cada pessoa. Nada de
            soluções genéricas. Nutrição é estratégia, não é fórmula.
          </p>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <ApproachPrincipleCard
            v-for="(principle, index) in principles"
            :key="principle.title"
            v-bind="principle"
            class="animate-in"
            :style="{ '--delay': `${120 + index * 80}ms` }"
          />
        </div>
      </div>
      <img
        src="../../../assets/leaf.svg"
        alt=""
        class="pointer-events-none absolute -right-12 bottom-0 h-72 opacity-45"
      />
    </section>

    <section
      class="rounded-lg bg-white/72 p-7 shadow-soft ring-1 ring-forest-300/20 sm:p-10"
    >
      <p class="section-kicker animate-in">
        02
        <span class="mx-4 inline-block h-px w-6 bg-forest-500 align-middle" />
        Como funciona meu acompanhamento
      </p>
      <div class="relative mt-8 grid gap-8 lg:grid-cols-4">
        <span
          class="absolute left-[10%] right-[10%] top-8 hidden h-px bg-forest-500/45 lg:block"
        />
        <ApproachStep
          v-for="(step, index) in steps"
          :key="step.title"
          v-bind="step"
          :number="index + 1"
          class="animate-in"
          :style="{ '--delay': `${100 + index * 90}ms` }"
        />
      </div>
    </section>

    <section
      class="relative overflow-hidden rounded-lg bg-white/72 p-7 shadow-soft ring-1 ring-forest-300/20 sm:p-10"
    >
      <div class="grid items-center gap-9 lg:grid-cols-[0.62fr_1.38fr]">
        <div class="animate-in">
          <p class="section-kicker">
            03
            <span
              class="mx-4 inline-block h-px w-6 bg-forest-500 align-middle"
            />
            Minha visão de nutrição
          </p>
          <h2
            class="mt-7 font-serif text-4xl font-bold leading-tight text-forest-900 sm:text-4xl"
          >
            Nutrição não é
            <span class="block">sobre dieta.</span>
          </h2>
          <p
            class="mt-5 max-w-sm font-serif text-3xl leading-tight text-forest-500"
          >
            É sobre fisiologia, comportamento e contexto.
          </p>
          <span class="mt-7 block h-px w-16 bg-forest-500" />
        </div>
        <div
          class="overflow-hidden rounded-lg border border-forest-300/25 bg-white/80 animate-in table-approach"
          style="--delay: 140ms"
        >
          <div
            class="grid grid-cols-2 text-center text-xs font-bold uppercase tracking-[0.22em]"
          >
            <div class="bg-linen px-4 py-4 text-forest-700">
              Abordagem comum
            </div>
            <div class="bg-forest-700 px-4 py-4 text-white">
              Minha abordagem
            </div>
          </div>
          <ApproachComparisonRow
            v-for="row in comparisons"
            :key="row.common"
            v-bind="row"
          />
        </div>
      </div>
      <img
        src="../../../assets/leaf.svg"
        alt=""
        class="pointer-events-none absolute -left-16 bottom-0 h-80 rotate-180 opacity-45"
      />
    </section>
  </div>
</template>

<style scoped>
@media (  max-width: 600px) {
  
.table-approach {
  zoom: 0.75;
}
}
</style>
