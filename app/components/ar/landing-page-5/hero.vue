<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import type { LandingPage1Response } from "~/types/landing-page-1";

const props = withDefaults(
  defineProps<{
    data: LandingPage1Response;
    direction?: "ltr" | "rtl";
  }>(),
  {
    direction: "rtl",
  },
);

const isLTR = computed(() => props.direction === "ltr");
</script>

<template>
  <section class="mt-20 w-full">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
      <!-- Hero image For Small Screen -->
      <div class="lg:hidden mb-10">
        <div
          class="relative w-[95%] mx-auto h-96 rounded-[39px] overflow-hidden"
        >
          <img
            :src="data.hero.heroImageLight"
            alt="hero"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="/home/play.png"
              alt="play"
              class="w-16 h-16 md:w-20 md:h-20 cursor-pointer"
              style="transition: transform 300ms ease"
              onmouseover="this.style.transform = 'scale(1.1)'"
              onmouseout="this.style.transform = 'scale(1)'"
            />
          </div>
        </div>
      </div>

      <!-- Text content -->
      <div
        :class="[
          'w-[80%] flex justify-center mx-auto',
          isLTR ? 'lg:order-1' : '',
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

      <!-- Hero image (desktop) -->
      <div
        :class="[
          'hidden lg:block',
          isLTR ? 'lg:order-2' : '',
        ]"
      >
        <div
          :class="[
            'relative w-full h-80 md:h-[70vh] rounded-[39px] overflow-hidden',
            isLTR
              ? 'rounded-tr-none rounded-br-none'
              : 'rounded-tl-none rounded-bl-none',
          ]"
        >
          <img
            :src="data.hero.heroImageLight"
            alt="hero"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="/home/play.png"
              alt="play"
              class="w-20 h-20 cursor-pointer"
              style="transition: transform 300ms ease"
              onmouseover="this.style.transform = 'scale(1.1)'"
              onmouseout="this.style.transform = 'scale(1)'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

