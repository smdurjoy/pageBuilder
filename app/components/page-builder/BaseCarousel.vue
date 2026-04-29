<script setup lang="ts">
import { ref, watch } from "vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import type { UnwrapRefCarouselApi as CarouselApi } from "~/components/ui/carousel/interface";

const props = defineProps({
  prevIcon: {
    type: String,
    required: true,
  },
  nextIcon: {
    type: String,
    required: true,
  },
  dir: {
    type: String,
    default: "rtl",
  },
  items: {
    type: Array,
    default: () => [1, 2, 3],
  },
  carouselClass: {
    type: String,
    default: "w-full",
  },
  showDots: {
    type: Boolean,
    default: false,
  },
});

const api = ref<CarouselApi>();
const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);

function onInitApi(carouselApi: CarouselApi) {
  api.value = carouselApi;
}

watch(api, (carouselApi) => {
  if (!carouselApi) return;

  scrollSnaps.value = carouselApi.scrollSnapList();
  selectedIndex.value = carouselApi.selectedScrollSnap();

  carouselApi.on("select", () => {
    selectedIndex.value = carouselApi.selectedScrollSnap();
  });
});

const scrollTo = (index: number) => {
  api.value?.scrollTo(index);
};
</script>

<template>
  <section class="relative w-full">
    <Carousel
      :class="['group relative', carouselClass]"
      :opts="{
        align: 'start',
        loop: true,
        direction: dir === 'rtl' ? 'rtl' : 'ltr',
      }"
      :dir="dir"
      @init-api="onInitApi"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(item, index) in items"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <slot :item="item" :index="index" />
        </CarouselItem>
      </CarouselContent>

      <!-- Custom Arrows -->
      <div class="pb-carousel-controls" dir="ltr">
        <div class="pointer-events-auto">
          <!-- Physically Left Button (Moves Left) -->
          <!-- In LTR, Prev is Left. In RTL, Next is Left. -->
          <component
            :is="dir === 'rtl' ? CarouselNext : CarouselPrevious"
            class="pb-carousel-btn"
            variant="ghost"
          >
            <img :src="prevIcon" alt="Scroll Left" class="pb-carousel-icon" />
          </component>
        </div>

        <div class="pointer-events-auto">
          <!-- Physically Right Button (Moves Right) -->
          <!-- In LTR, Next is Right. In RTL, Prev is Right. -->
          <component
            :is="dir === 'rtl' ? CarouselPrevious : CarouselNext"
            class="pb-carousel-btn"
            variant="ghost"
          >
            <img :src="nextIcon" alt="Scroll Right" class="pb-carousel-icon" />
          </component>
        </div>
      </div>
    </Carousel>

    <!-- Dots -->
    <div v-if="showDots" class="pb-carousel-dots">
      <button
        v-for="(_, index) in scrollSnaps"
        :key="index"
        :class="[
          'pb-carousel-dot',
          index === selectedIndex ? 'pb-carousel-dot-active' : '',
        ]"
        @click="scrollTo(index)"
      />
    </div>
  </section>
</template>

<style scoped>
.pb-carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3.5rem;
  z-index: 20;
}

.pb-carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  padding: 0;
}

.pb-carousel-dot-active {
  width: 32px;
  background-color: #ffffff;
}

@media (max-width: 768px) {
  .pb-carousel-dots {
    margin-top: 1.5rem;
  }
  .pb-carousel-dot {
    width: 8px;
    height: 8px;
  }
  .pb-carousel-dot-active {
    width: 24px;
  }
}
</style>
