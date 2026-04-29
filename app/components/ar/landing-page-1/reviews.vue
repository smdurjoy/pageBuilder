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
import type { ReviewType } from "~/types/landing-page-1";

defineProps<{
  data: ReviewType;
  direction: "ltr" | "rtl";
  headerCentered?: boolean;
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20">
    <div class="container mx-auto px-4 sm:px-6">
      <h2
        :class="`text-navy text-3xl sm:text-4xl lg:text-5xl font-bold text-center ${headerCentered ? '' : 'lg:text-start'}`"
      >
        {{ data?.title }}
      </h2>
      <p
        :class="`text-navy text-lg lg:text-2xl text-center ${headerCentered ? '' : 'lg:text-start'} mt-4`"
      >
        {{ data?.description }}
      </p>
    </div>

    <div class="mt-10">
      <Carousel
        class="relative"
        :opts="{ direction: direction, loop: true }"
        :plugins="[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]"
      >
        <CarouselContent class="px-4 md:px-6">
          <CarouselItem
            v-for="(rev, idx) in data?.items"
            :key="rev.review || idx"
            class="basis-full sm:basis-1/2 md:basis-1/3 pl-6 md:pl-8"
          >
            <Card
              class="py-8 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col gap-6 bg-cream!"
              :style="cardStyle(idx, hovered)"
              @mouseenter="hovered = idx"
              @mouseleave="hovered = null"
            >
              <div class="flex gap-1">
                <template v-for="n in 5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-5 w-5 text-gold"
                    fill="currentColor"
                  >
                    <path
                      d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L18.8 24 12 20.012 5.2 24l1.1-8.694L.6 9.75l7.732-1.732z"
                    />
                  </svg>
                </template>
              </div>

              <p
                class="text-navy w-full font-semibold text-base lg:text-lg"
              >
                "{{ rev.review }}"
              </p>

              <div class="space-y-2">
                <h3 class="text-navy text-lg font-bold">{{ rev.name }}</h3>
                <p class="text-navy">{{ rev.role }}</p>
              </div>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </section>
</template>
