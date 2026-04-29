<script setup lang="ts">
import { ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import { cardStyle } from "~/lib/helper";
import type { TrustType } from "~/types/about-us";

defineProps<{
  data: TrustType;
  bgWhite?: boolean;
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 mt-20">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12"
    >
      <Card
        v-for="(item, idx) in data?.items"
        :key="item.title"
        :class="`py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col ${bgWhite ? 'bg-white! border! border-tan!' : 'bg-cream!'} rounded-[39px] transition-transform duration-300`"
        :style="cardStyle(idx, hovered)"
        @mouseenter="hovered = idx"
        @mouseleave="hovered = null"
      >
        <img
          :src="item.icon"
          :alt="item.title"
          class="h-10 sm:h-12 md:h-14 w-fit mb-4"
        />
        <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
          {{ item.title }}
        </h3>
        <p class="text-navy text-base sm:text-lg md:text-xl mt-3">
          {{ item.description }}
        </p>
      </Card>
    </div>
  </section>
</template>
