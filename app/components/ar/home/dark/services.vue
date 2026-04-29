<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import { ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { cardStyle } from "~/lib/helper";
import type { HomeResponse } from "~/types/home";

defineProps<{
  data: HomeResponse;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 px-4 sm:px-6">
    <div class="container mx-auto">
      <h2
        class="text-gold-light text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-start"
      >
        {{ data?.services.title }}
      </h2>
      <p
        class="text-cream text-xl lg:text-2xl text-center lg:text-start mt-4"
      >
        {{ data?.services.description }}
      </p>
    </div>

    <div class="mt-10 container mx-auto">
      <Carousel
        class="relative"
        :opts="{
          direction: direction,
          loop: true,
        }"
        :plugins="[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]"
      >
        <CarouselContent>
          <CarouselItem
            v-for="(item, idx) in data?.services.items"
            :key="item.title"
            class="basis-full sm:basis-1/2 xl:basis-1/3 pl-6 md:pl-8"
          >
            <Card
              class="py-8 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col items-start sm:items-center sm:text-center"
              :style="cardStyle(idx, hovered)"
              @mouseenter="hovered = idx"
              @mouseleave="hovered = null"
            >
              <img
                :src="item.icon"
                :alt="item.title"
                class="h-10 md:h-14 w-auto mb-4"
              />
              <h3 class="text-cream text-lg lg:text-2xl font-bold">
                {{ item.title }}
              </h3>
              <p
                class="text-cream w-full lg:w-[75%] font-semibold text-base lg:text-xl mt-3"
              >
                {{ item.description }}
              </p>
              <NuxtLink
                href="#"
                class="mt-auto flex items-center justify-center gap-2 hover:gap-3 transition-all"
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
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </section>
</template>
