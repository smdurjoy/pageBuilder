<script setup lang="ts">
import { ref } from "vue";
import { cardStyle } from "~/lib/helper";
import type { BlogType } from "~/types/landing-page-1";

defineProps<{
  data: BlogType;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 container mx-auto px-4 sm:px-6">
    <h2
      class="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-start"
    >
      {{ data?.title }}
    </h2>
    <p
      class="text-navy text-lg lg:text-2xl text-center lg:text-start mt-4"
    >
      {{ data?.description }}
    </p>

    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 px-6 sm:px-0"
    >
      <Card
        v-for="(item, idx) in data?.items"
        class="py-4 md:py-8 px-3 sm:px-6 flex flex-col items-start sm:items-center sm:text-center bg-white!"
        :style="cardStyle(idx, hovered)"
        @mouseenter="hovered = idx"
        @mouseleave="hovered = null"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="h-80 w-full object-cover rounded-[39px]"
        />
        <h3 class="text-navy text-lg lg:text-2xl font-bold">
          {{ item.title }}
        </h3>
        <p class="text-navy w-full lg:w-[95%] text-base lg:text-xl">
          {{ item.description }}
        </p>
        <NuxtLink
          href="#"
          class="flex items-center justify-center gap-2 hover:gap-3 transition-all"
        >
          <span class="text-gold-light font-semibold lg:text-lg">
            {{ item.linkText }}
          </span>
          <img
            :src="item.arrowIcon"
            :alt="item.linkText"
            :class="direction == 'ltr' ? 'rotate-180' : ''"
          />
        </NuxtLink>
      </Card>
    </div>

    <div class="mt-10 md:mt-12 flex justify-center">
      <Button
        class="rounded-full text-lg bg-navy text-cream py-6 px-14 hover:bg-tan transition-colors"
      >
        {{ data?.buttonText }}
      </Button>
    </div>
  </section>
</template>
