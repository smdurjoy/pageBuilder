<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
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
    ? "/api/page-builder/slide-components/slide-3"
    : "/api/page-builder/slide-components/slide-3/en",
);

const { data: slideData, pending, error } = useFetch<SlideData>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  direction: props.dir as "rtl" | "ltr",
  align: "start",
  loop: true,
  dragFree: true,
});

watch(() => props.dir, (newDir) => {
  if (emblaApi.value) {
    emblaApi.value.reInit({ direction: newDir as "rtl" | "ltr" });
  }
});
</script>

<template>
  <section
    v-if="!pending && !error && slideData"
    class="pb-s3-container"
    :dir="props.dir"
  >
    <div class="pb-s3-wrapper">
      <!-- Header Area -->
      <div class="pb-s3-header">
        <div class="pb-s3-badge-wrapper">
          <span class="pb-s3-badge">{{ slideData.badge }}</span>
        </div>
        <h2 class="pb-s3-title">{{ slideData.title }}</h2>
        <p class="pb-s3-desc">{{ slideData.description }}</p>
      </div>

      <!-- Carousel Area -->
      <div class="pb-s3-carousel-area">
        <div class="pb-s3-embla" ref="emblaRef">
          <div class="pb-s3-embla-container">
            <div 
              v-for="(item, idx) in slideData.items" 
              :key="idx" 
              class="pb-s3-embla-slide"
            >
              <div class="pb-s3-card">
                <img :src="item.image" class="pb-s3-card-img" alt="slide image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Area -->
      <div class="pb-s3-footer">
        <button class="pb-s3-btn">{{ slideData.buttonText }}</button>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-s3-loading">
    <div class="pb-s3-skeleton-header"></div>
    <div class="pb-s3-skeleton-carousel"></div>
  </div>
</template>
