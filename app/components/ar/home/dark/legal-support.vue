<script setup lang="ts">
import { ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import { cardStyle } from "~/lib/helper";
import type { HomeResponse } from "~/types/home";

defineProps<{
  data: HomeResponse;
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 container mx-auto px-4 sm:px-6">
    <Card
      class="py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col gap-6 text-center lg:text-start border-none! shadow-none!"
      :style="cardStyle(0, hovered)"
      @mouseenter="hovered = 0"
      @mouseleave="hovered = null"
    >
      <h2 class="text-cream text-3xl lg:text-4xl font-bold">
        {{ data?.legalSupport.title }}
      </h2>
      <p class="text-cream text-lg lg:text-2xl mb-4">
        {{ data?.legalSupport.description }}
      </p>
      <Button
        class="w-fit bg-gold-light text-cream py-6 px-12 rounded-full hover:bg-gold-light/90 transition-colors mx-auto lg:mx-0"
        >{{ data?.legalSupport.buttonText }}</Button
      >
    </Card>
  </section>
</template>
