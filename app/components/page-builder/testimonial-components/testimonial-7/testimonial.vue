<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-7";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-7"
    : "/api/page-builder/testimonial-components/testimonial-7/en",
);

const { data: testimonialData, pending, error } = useFetch<TestimonialData>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  direction: props.dir as "rtl" | "ltr",
  align: "start",
  containScroll: "trimSnaps",
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
    v-if="!pending && !error && testimonialData"
    class="pb-t7-container"
    :dir="props.dir"
  >
    <div class="pb-t7-wrapper">
      <!-- Header -->
      <div class="pb-t7-header">
        <h2 class="pb-t7-title">{{ testimonialData.title }}</h2>
        <p class="pb-t7-desc">{{ testimonialData.description }}</p>
        <div class="pb-t7-btn-wrapper">
          <button class="pb-t7-btn">{{ testimonialData.buttonText }}</button>
        </div>
      </div>

      <!-- Testimonials Carousel -->
      <div class="pb-t7-carousel-area">
        <div class="pb-t7-embla" ref="emblaRef">
          <div class="pb-t7-embla-container">
            <div 
              v-for="(item, idx) in testimonialData.items" 
              :key="idx" 
              class="pb-t7-embla-slide"
            >
              <div class="pb-t7-card">
                <img :src="testimonialData.quoteIcon" class="pb-t7-quote-icon" alt="quote" />
                <p class="pb-t7-quote-text">{{ item.quote }}</p>
                
                <div class="pb-t7-user-info">
                  <img :src="item.user.avatar" class="pb-t7-avatar" :alt="item.user.name" />
                  <span class="pb-t7-user-name">{{ item.user.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-t7-loading">
    <div class="pb-t7-skeleton-header"></div>
    <div class="pb-t7-skeleton-carousel"></div>
  </div>
</template>
