<script setup lang="ts">
import { ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import { cardStyle } from "~/lib/helper";
import type { ServicesType } from "~/types/our-services";

const props = defineProps<{
  data: ServicesType;
  bgWhite?: boolean;
  minusItems?: number;
  direction?: "rtl" | "ltr";
}>();

const hovered = ref<number | string | null>(null);
</script>

<template>
  <section class="mt-8">
    <!-- make a breakcrumb here -->
    <nav
      class="flex items-center space-x-2 text-sm text-navy bg-cream p-4"
    >
      <div class="container mx-auto space-x-1">
        <a href="/" class="hover:underline">{{
          data[0]?.items[0]?.breakCrumbs?.[0]
        }}</a>
        <span>/ </span>
        <a href="/our-services" class="hover:underline">{{
          data[0]?.items[0]?.breakCrumbs?.[1]
        }}</a>
        <span>/ </span>
        <a href="our-services" class="text-black font-semibold">{{
          data[0]?.items[0]?.breakCrumbs?.[2]
        }}</a>
      </div>
    </nav>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 container mx-auto px-4 sm:px-6"
    >
      <Card
        :class="`py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col ${props.bgWhite ? 'bg-white! border! border-tan!' : 'bg-cream!'} rounded-[39px] transition-transform duration-300`"
        :style="cardStyle(0, hovered)"
        @mouseenter="hovered = 0"
        @mouseleave="hovered = null"
      >
        <img
          :src="data[0]?.items[0]?.icon"
          class="h-10 sm:h-12 md:h-14 w-fit mb-4"
        />
        <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
          {{ data[0]?.items[0]?.title }}
        </h3>
        <p class="text-navy text-base sm:text-lg md:text-xl mt-3">
          {{ data[0]?.items[0]?.description }}
        </p>
        <NuxtLink
          href="#"
          class="flex items-center justify-start gap-2 hover:gap-3 transition-all"
        >
          <span class="text-gold-light font-semibold lg:text-lg">
            {{ data[0]?.items[0]?.linkText }}
          </span>
          <img
            :src="data[0]?.items[0]?.arrowIcon"
            :alt="data[0]?.items[0]?.linkText"
            :class="direction == 'ltr' ? 'rotate-180' : ''"
          />
        </NuxtLink>
      </Card>
    </div>
  </section>
</template>
