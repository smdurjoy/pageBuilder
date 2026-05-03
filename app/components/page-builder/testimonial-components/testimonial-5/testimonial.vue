<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-5";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-5"
    : "/api/page-builder/testimonial-components/testimonial-5/en",
);

const {
  data: testimonialData,
  pending,
  error,
} = useFetch<TestimonialData>(endpoint);

const carouselItems = computed(() => {
  if (!testimonialData.value) return [];
  // Triple items for better loop experience
  return [
    ...testimonialData.value.items,
    ...testimonialData.value.items,
    ...testimonialData.value.items,
  ];
});

const emblaOptions = {
  direction: props.dir as "rtl" | "ltr",
  align: "start" as const,
  loop: true,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

const [emblaRef, emblaApi] = emblaCarouselVue(emblaOptions);

watch(
  () => props.dir,
  (newDir) => {
    if (emblaApi.value) {
      emblaApi.value.reInit({ direction: newDir as "rtl" | "ltr" });
    }
  },
);
</script>

<template>
  <section
    v-if="!pending && !error && testimonialData"
    class="pb-t5-container"
    :dir="props.dir"
  >
    <div class="pb-t5-wrapper">
      <!-- Content Section -->
      <div class="pb-t5-content">
        <div class="pb-t5-badge-wrapper">
          <span class="pb-t5-badge">{{ testimonialData.badge }}</span>
        </div>
        <h2 class="pb-t5-title">{{ testimonialData.title }}</h2>
        <p class="pb-t5-desc">{{ testimonialData.description }}</p>
      </div>

      <!-- Carousel Section -->
      <div class="pb-t5-carousel-area">
        <div class="pb-t5-embla" ref="emblaRef">
          <div class="pb-t5-embla-container">
            <div
              v-for="(item, idx) in carouselItems"
              :key="idx"
              class="pb-t5-embla-slide"
            >
              <div class="pb-t5-card">
                <img
                  :src="testimonialData.quoteIcon"
                  class="pb-t5-quote-icon"
                  alt="quote"
                />
                <p class="pb-t5-quote-text">{{ item.quote }}</p>
                <div class="pb-t5-user-info">
                  <img
                    :src="item.user.avatar"
                    class="pb-t5-avatar"
                    :alt="item.user.name"
                  />
                  <div class="pb-t5-user-details">
                    <span class="pb-t5-user-name">{{ item.user.name }}</span>
                    <span class="pb-t5-user-role">{{ item.user.role }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-t5-loading">
    <div class="pb-t5-skeleton-wrapper">
      <div class="pb-t5-skeleton-content"></div>
      <div class="pb-t5-skeleton-carousel"></div>
    </div>
  </div>
</template>
