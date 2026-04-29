<script setup lang="ts">
import { ref } from "vue";
import { cardStyle } from "~/lib/helper";
import type { AccreditationsType } from "~/types/landing-page-1";

defineProps<{
  data: AccreditationsType;
  direction: "ltr" | "rtl";
  isLandingPage3?: boolean;
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section
    :class="` container mx-auto px-4 sm:px-6 ${isLandingPage3 ? 'my-20' : 'mt-20'}`"
  >
    <h2
      :class="` text-3xl sm:text-4xl lg:text-5xl font-bold text-center ${isLandingPage3 ? 'text-cream' : 'lg:text-start text-navy'}`"
    >
      {{ data?.title }}
    </h2>
    <p
      :class="`text-xl lg:text-2xl text-center mt-4 ${isLandingPage3 ? 'text-cream' : 'lg:text-start text-navy'}`"
    >
      {{ data?.description }}
    </p>

    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 px-6 sm:px-0"
    >
      <Card
        v-for="(item, idx) in data?.items"
        :key="item.title"
        class="py-8 px-6 sm:px-8 flex flex-col gap-8 text-center xl:text-start bg-white!"
        :style="cardStyle(idx, hovered)"
        @mouseenter="hovered = idx"
        @mouseleave="hovered = null"
      >
        <div class="bg-cream w-full py-24 px-4 rounded-[39px]">
          <img
            :src="item.image"
            :alt="item.title"
            class="h-12 lg:h-14 xl:h-16 mb-4 mx-auto"
          />
        </div>
        <div class="space-y-2">
          <h3 class="text-navy text-lg lg:text-xl xl:text-2xl font-bold">
            {{ item.title }}
          </h3>
          <p class="text-navy text-base lg:text-lg xl:text-xl w-full mt-3">
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
