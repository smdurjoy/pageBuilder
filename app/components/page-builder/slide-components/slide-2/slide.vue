<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { SlideData } from "~/types/page-builder/slide-types/slide-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/slide-components/slide-2"
    : "/api/page-builder/slide-components/slide-2/en",
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
    class="pb-s2-container"
    :dir="props.dir"
  >
    <div class="pb-s2-wrapper">
      <div class="pb-s2-glow"></div>
      <!-- Centered Header -->
      <div class="pb-s2-header">
        <h2 class="pb-s2-title">{{ slideData.title }}</h2>
        <p class="pb-s2-desc">{{ slideData.description }}</p>
      </div>

      <!-- Full Width Carousel Area -->
      <div class="pb-s2-carousel-area">
        <div class="pb-s2-embla" ref="emblaRef">
          <div class="pb-s2-embla-container">
            <div 
              v-for="(item, idx) in slideData.items" 
              :key="idx" 
              class="pb-s2-embla-slide"
            >
              <div class="pb-s2-card">
                <img :src="item.image" class="pb-s2-card-img" alt="slide image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-s2-loading">
    <div class="pb-s2-skeleton-header"></div>
    <div class="pb-s2-skeleton-carousel"></div>
  </div>
</template>
