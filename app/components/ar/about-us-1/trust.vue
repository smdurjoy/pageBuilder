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
    <div class="mt-8 md:mt-12">
      <div>
        <Card
          v-if="data?.items && data.items.length"
          :class="[
            'py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col rounded-[39px] transition-transform duration-300 w-full',
            bgWhite ? 'bg-white! border-none! shadow-none!' : 'bg-cream!',
          ]"
          :style="cardStyle(0, hovered)"
          @mouseenter="hovered = 0"
          @mouseleave="hovered = null"
        >
          <img
            :src="data.items[0]?.icon"
            :alt="data.items[0]?.title"
            class="h-10 sm:h-12 md:h-14 w-fit mb-4"
          />
          <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
            {{ data.items[0]?.title }}
          </h3>
          <p class="text-navy text-base sm:text-lg md:text-xl mt-3">
            {{ data.items[0]?.description }}
          </p>
        </Card>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8">
        <Card
          v-for="(item, idx) in (data?.items || []).slice(1)"
          :key="item.title"
          :class="[
            'py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col rounded-[39px] transition-transform duration-300 w-full',
            bgWhite ? 'bg-white! border-none! shadow-none!' : 'bg-cream!',
          ]"
          :style="cardStyle(idx + 1, hovered)"
          @mouseenter="hovered = idx + 1"
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
    </div>
  </section>
</template>
