<script setup lang="ts">
import { cardStyle } from "~/lib/helper";
import type { ContactUsResponse } from "~/types/contact-us";

defineProps<{
  data: ContactUsResponse;
}>();

const hovered = ref<string | null>(null);
</script>

<template>
  <section class="container mx-auto mt-20 px-4 sm:px-6">
    <h2 class="text-3xl sm:text-4xl font-bold text-center mb-4">
      {{ data.contactInfo.title }}
    </h2>
    <p class="text-lg text-center text-navy">
      {{ data.contactInfo.description }}
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12"
    >
      <Card
        v-for="(card, idx) in data.contactInfo.items"
        :key="idx"
        :class="`py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col bg-cream! border! border-tan! rounded-[39px] transition-transform duration-300`"
        :style="cardStyle(String(idx + card.title), String(hovered))"
        @mouseenter="hovered = String(idx + card.title)"
        @mouseleave="hovered = null"
      >
        <img :src="card.icon" :alt="card.title" class="h-8 w-fit" />
        <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
          {{ card.title }}
        </h3>
        <p class="text-navy text-base sm:text-lg md:text-xl">
          {{ card.description }}
        </p>
      </Card>
    </div>
  </section>
</template>
