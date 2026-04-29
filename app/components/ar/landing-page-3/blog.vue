<script setup lang="ts">
import { ref } from "vue";
import { cardStyle } from "~/lib/helper";
import type { BlogType } from "~/types/landing-page-3";

defineProps<{
  data: BlogType;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 container mx-auto px-4 sm:px-6">
    <h2
      class="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold text-center"
    >
      {{ data?.title }}
    </h2>
    <p class="text-navy text-lg lg:text-2xl text-center mt-4">
      {{ data?.description }}
    </p>

    <div
      class="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12 px-6 sm:px-0"
    >
      <Card
        class="py-4 md:py-8 px-3 sm:px-6 flex flex-col items-start sm:items-center sm:text-center bg-white! lg:col-span-2"
        :style="cardStyle(0, hovered)"
        @mouseenter="hovered = 0"
        @mouseleave="hovered = null"
      >
        <img
          :src="data?.items[0]?.image"
          :alt="data?.items[0]?.title"
          class="h-80 w-full object-cover rounded-[39px]"
        />
        <h3 class="text-navy text-lg lg:text-2xl font-bold">
          {{ data?.items[0]?.title }}
        </h3>
        <p class="text-navy w-full lg:w-[95%] text-base lg:text-xl">
          {{ data?.items[0]?.description }}
        </p>
        <NuxtLink
          href="#"
          class="flex items-center justify-center gap-2 hover:gap-3 transition-all"
        >
          <span class="text-gold-light font-semibold lg:text-lg">
            {{ data?.items[0]?.linkText }}
          </span>
          <img
            :src="data?.items[0]?.arrowIcon"
            :alt="data?.items[0]?.linkText"
            :class="direction == 'ltr' ? 'rotate-180' : ''"
          />
        </NuxtLink>
      </Card>
      <Card
        class="py-4 md:py-8 px-3 sm:px-6 flex flex-col items-start sm:items-center sm:text-center bg-white! lg:col-span-2"
        :style="cardStyle(1, hovered)"
        @mouseenter="hovered = 1"
        @mouseleave="hovered = null"
      >
        <img
          :src="data?.items[1]?.image"
          :alt="data?.items[1]?.title"
          class="h-80 w-full object-cover rounded-[39px]"
        />
        <h3 class="text-navy text-lg lg:text-2xl font-bold">
          {{ data?.items[1]?.title }}
        </h3>
        <p class="text-navy w-full lg:w-[95%] text-base lg:text-xl">
          {{ data?.items[1]?.description }}
        </p>
        <NuxtLink
          href="#"
          class="flex items-center justify-center gap-2 hover:gap-3 transition-all"
        >
          <span class="text-gold-light font-semibold lg:text-lg">
            {{ data?.items[1]?.linkText }}
          </span>
          <img
            :src="data?.items[1]?.arrowIcon"
            :alt="data?.items[1]?.linkText"
            :class="direction == 'ltr' ? 'rotate-180' : ''"
          />
        </NuxtLink>
      </Card>
    </div>

    <div class="my-10 md:mt-12 flex justify-center">
      <Button
        class="rounded-full text-lg bg-navy text-cream py-6 px-14 hover:bg-tan transition-colors"
      >
        {{ data?.buttonText }}
      </Button>
    </div>
  </section>
</template>
