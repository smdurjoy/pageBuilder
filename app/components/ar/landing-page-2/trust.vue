<script setup lang="ts">
import { ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import { cardStyle } from "~/lib/helper";
import type { TrustItem } from "~/types/landing-page-1";

defineProps<{
  data: TrustItem;
  bgWhite?: boolean;
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 mt-20">
    <h2 class="text-navy text-3xl lg:text-4xl font-bold text-center">
      {{ data?.title }}
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12"
      dir="ltr"
    >
      <Card
        v-for="(item, idx) in data?.items"
        :key="item.title"
        :class="`py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col items-center text-center ${bgWhite ? 'bg-white! border-none! shadow-none!' : 'bg-cream!'} rounded-[39px] transition-transform duration-300`"
        :style="cardStyle(idx, hovered)"
        @mouseenter="hovered = idx"
        @mouseleave="hovered = null"
      >
        <img
          :src="item.icon"
          :alt="item.title"
          class="h-10 sm:h-12 md:h-14 w-auto mb-4"
        />
        <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
          {{ item.title }}
        </h3>
        <p
          class="text-navy font-semibold text-base sm:text-lg md:text-xl max-w-[520px] mt-3"
        >
          {{ item.description }}
        </p>
      </Card>
    </div>
  </section>
</template>
