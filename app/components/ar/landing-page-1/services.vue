<script setup lang="ts">
import type { ServicesType } from "~/types/landing-page-1";

defineProps<{
  data: ServicesType;
  imageBlendMode?: string;
  direction?: "ltr" | "rtl";
}>();
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 mt-20">
    <h2
      class="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-start"
    >
      {{ data?.title }}
    </h2>
    <p
      class="text-navy text-xl lg:text-2xl text-center lg:text-start mt-4"
    >
      {{ data?.description }}
    </p>

    <div class="grid grid-cols-1 gap-10 mt-20">
      <div
        v-for="(service, index) in data?.items"
        :key="index"
        :class="[
          'flex flex-col text-start mb-8 lg:mb-0 gap-6 lg:gap-12 lg:items-center',
          index % 2 === 1
            ? 'lg:flex-row lg:justify-between'
            : 'lg:flex-row-reverse lg:justify-between',
        ]"
      >
        <div
          class="w-full h-56 sm:h-72 md:h-80 lg:w-150 lg:h-110 rounded-[39px] overflow-hidden"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="w-full h-full object-cover"
            :style="`mix-blend-mode: ${imageBlendMode || 'normal'}; ${imageBlendMode ? 'filter: grayscale(100%) brightness(0.5) sepia(2) hue-rotate(175deg) saturate(200%)' : ''}`"
            style=""
          />
        </div>
        <div
          :class="[
            'space-y-6 w-full lg:w-auto lg:max-w-130 lg:self-center',
            index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8',
          ]"
        >
          <h3 class="text-navy text-lg sm:text-2xl lg:text-3xl font-bold">
            {{ service.title }}
          </h3>
          <p class="text-navy text-base sm:text-lg md:text-xl max-w-130">
            {{ service.description }}
          </p>

          <div>
            <NuxtLink
              href="#"
              class="flex items-center gap-2 hover:gap-3 transition-all"
            >
              <span class="text-gold-light font-semibold text-base lg:text-lg">
                {{ service.linkText || "تفاصيل أكثر" }}
              </span>
              <img
                :src="service.arrowIcon"
                :alt="service.linkText || 'تفاصيل'"
                :class="`${direction === 'ltr' ? 'rotate-180' : ''}`"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
