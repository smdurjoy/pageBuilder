<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch, ref } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { SlideData } from "~/types/page-builder/slide-types/slide-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/slide-components/slide-6"
    : "/api/page-builder/slide-components/slide-6/en",
);

const { data: slideData, pending, error } = useFetch<SlideData>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  direction: props.dir as "rtl" | "ltr",
  align: "start",
  loop: true,
  dragFree: true,
});

watch(
  () => props.dir,
  (newDir) => {
    if (emblaApi.value) {
      emblaApi.value.reInit({ direction: newDir as "rtl" | "ltr" });
    }
  },
);

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();
</script>

<template>
  <section
    v-if="!pending && !error && slideData"
    class="pb-s6-container"
    :dir="props.dir"
  >
    <div class="pb-s6-wrapper">
      <!-- Glow Effect -->
      <div class="pb-s6-glow"></div>

      <!-- Carousel Column -->
      <div class="pb-s6-carousel-col">
        <div class="pb-s6-embla" ref="emblaRef">
          <div class="pb-s6-embla-container">
            <div
              v-for="(item, idx) in slideData.items"
              :key="idx"
              class="pb-s6-embla-slide"
            >
              <div class="pb-s6-card">
                <img
                  :src="item.image"
                  class="pb-s6-card-img"
                  alt="slide image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="pb-s6-nav-area">
          <div class="pb-s6-nav-btns">
            <button @click="scrollPrev" class="pb-s6-nav-btn prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button @click="scrollNext" class="pb-s6-nav-btn next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Content Column -->
      <div class="pb-s6-content-col">
        <div class="pb-s6-badge-wrapper">
          <span class="pb-s6-badge">{{ slideData.badge }}</span>
        </div>
        <h2 class="pb-s6-title">{{ slideData.title }}</h2>
        <p class="pb-s6-desc">{{ slideData.description }}</p>
        <div class="pb-s6-btn-wrapper">
          <button class="pb-s6-btn">{{ slideData.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-s6-loading">
    <div class="pb-s6-skeleton-layout"></div>
  </div>
</template>
