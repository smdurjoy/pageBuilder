<script setup lang="ts">
import { ref } from "vue";
import { cardStyle } from "~/lib/helper";
import type { HomeResponse } from "~/types/home";

defineProps<{
  data: HomeResponse;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 container mx-auto px-4 sm:px-6">
    <h2
      class="text-gold-light text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-start"
    >
      {{ data?.accreditations.title }}
    </h2>
    <p
      class="text-cream text-xl lg:text-2xl text-center lg:text-start mt-4"
    >
      {{ data?.accreditations.description }}
    </p>

    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 px-6 sm:px-0"
    >
      <Card
        v-for="(item, idx) in data?.accreditations.items"
        :key="item.title"
        class="py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col gap-8 text-center xl:text-start"
        :style="cardStyle(idx, hovered)"
        @mouseenter="hovered = idx"
        @mouseleave="hovered = null"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="h-14 lg:h-16 mb-4 mx-auto"
        />
        <div class="space-y-2">
          <h3 class="text-cream text-lg lg:text-xl xl:text-2xl font-bold">
            {{ item.title }}
          </h3>
          <p
            class="text-cream font-semibold text-base lg:text-lg xl:text-xl w-full mt-3"
          >
            {{ item.description }}
          </p>
        </div>
        <NuxtLink
          href="#"
          class="flex items-center gap-2 hover:gap-3 transition-all mx-auto xl:mx-0"
        >
          <span class="text-gold-light font-semibold lg:text-lg">
            {{ item.linkText || "تفاصيل أكثر" }}
          </span>
          <img
            :src="item.arrowIcon"
            :alt="item.linkText || 'تفاصيل'"
            :class="direction == 'ltr' ? 'rotate-180' : ''"
          />
        </NuxtLink>
      </Card>
    </div>
  </section>
</template>
