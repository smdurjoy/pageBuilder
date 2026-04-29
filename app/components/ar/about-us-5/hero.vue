<script setup lang="ts">
import { computed } from "vue";
import Button from "~/components/ui/button/Button.vue";
import type { AboutUsResponse } from "~/types/about-us";

const props = withDefaults(
  defineProps<{
    data: AboutUsResponse;
    direction?: "ltr" | "rtl";
  }>(),
  {
    direction: "rtl",
  },
);

const isLTR = computed(() => props.direction === "ltr");

const images = computed(() => [
  props.data?.hero?.heroab1,
  props.data?.hero?.heroab2,
  props.data?.hero?.heroab3,
]);
</script>

<template>
  <section class="mt-20 w-full">
    <div
      class="container mx-auto w-full grid grid-cols-1 gap-6 xl:grid-cols-2 items-center"
    >
      <!-- Hero image For Small Screen -->
      <div class="lg:hidden mb-10">
        <div class="flex items-center gap-6 justify-center">
          <div
            v-for="(img, i) in images"
            :key="i"
            class="w-30 sm:w-38 md:w-46 lg:w-44 h-76 md:h-[40vh] rounded-[39px] overflow-hidden shadow-[0_20px_30px_rgba(31,42,68,0.12)]"
          >
            <img :src="img" alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Text content -->
      <div
        :class="[
          'w-[80%] flex justify-center mx-auto xl:mx-0',
          isLTR ? 'xl:order-1' : '',
        ]"
      >
        <div
          :class="[
            'space-y-8 text-center',
            isLTR ? 'xl:text-left' : 'xl:text-right',
          ]"
        >
          <h1
            class="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-navy leading-tight"
          >
            {{ data?.hero.title }}
          </h1>
          <p class="text-navy text-lg xl:text-xl">
            {{ data?.hero.description }}
          </p>
          <Button
            class="bg-cream text-navy px-8 py-6 rounded-full hover:bg-gold hover:text-white transition-colors duration-300"
          >
            {{ data?.hero.buttonText }}
          </Button>
        </div>
      </div>

      <!-- Hero images (desktop) -->
      <div
        :class="[
          'hidden lg:flex justify-center',
          isLTR ? 'xl:order-2' : '',
        ]"
      >
        <div class="flex items-center gap-6">
          <div
            v-for="(img, i) in images"
            :key="i"
            class="w-40 sm:w-48 md:w-56 lg:w-64 h-96 md:h-[70vh] rounded-[39px] overflow-hidden shadow-[0_20px_30px_rgba(31,42,68,0.12)]"
          >
            <img :src="img" alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

