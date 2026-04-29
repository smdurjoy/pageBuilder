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
import type { TeamType } from "~/types/landing-page-1";

defineProps<{
  data: TeamType;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 px-4 sm:px-6">
    <div class="container mx-auto">
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
    </div>

    <div class="mt-10 container mx-auto">
      <Carousel
        class="relative"
        :opts="{ direction: direction, loop: true }"
        :plugins="[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]"
      >
        <CarouselContent>
          <CarouselItem
            v-for="(member, idx) in data?.items"
            :key="member.title"
            class="basis-full sm:basis-1/2 xl:basis-1/3 pl-6 md:pl-8"
          >
            <Card
              class="py-8 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col gap-8 shadow-none border-3 border-cream! bg-white! hover:bg-cream! transition-all duration-300 ease-out"
              :style="cardStyle(idx, hovered)"
              @mouseenter="hovered = idx"
              @mouseleave="hovered = null"
            >
              <img
                :src="member.image"
                :alt="member.title"
                class="h-30 w-30 lg:h-40 lg:w-40 rounded-full object-cover mx-auto"
              />
              <div class="space-y-3">
                <h3 class="text-navy text-lg lg:text-2xl font-bold">
                  {{ member.title }}
                </h3>
                <p
                  class="text-navy w-full lg:w-[80%] text-base lg:text-xl"
                >
                  {{ member.description }}
                </p>
              </div>
              <NuxtLink
                href="#"
                class="flex items-center gap-2 hover:gap-3 transition-all"
              >
                <span class="text-gold-light font-semibold text-base lg:text-lg">
                  {{ member.linkText || "تفاصيل أكثر" }}
                </span>
                <img
                  :src="member.arrowIcon"
                  :alt="member.linkText || 'تفاصيل'"
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
