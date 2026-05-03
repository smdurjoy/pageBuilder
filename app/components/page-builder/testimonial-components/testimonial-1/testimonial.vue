<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-1"
    : "/api/page-builder/testimonial-components/testimonial-1/en",
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
    class="pb-t1-container"
    :dir="props.dir"
  >
    <div class="pb-t1-wrapper">
      <!-- Header -->
      <div class="pb-t1-header">
        <h2 class="pb-t1-title">{{ testimonialData.title }}</h2>
        <p class="pb-t1-desc">{{ testimonialData.description }}</p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="pb-t1-embla" ref="emblaRef">
        <div class="pb-t1-embla-container">
          <div 
            v-for="(item, idx) in testimonialData.items" 
            :key="idx" 
            class="pb-t1-embla-slide"
          >
            <div class="pb-t1-card shadow-2xl">
              <img :src="testimonialData.quoteIcon" class="pb-t1-quote-icon" alt="quote" />
              <p class="pb-t1-quote-text">{{ item.quote }}</p>
              
              <div class="pb-t1-user-info">
                <img :src="item.user.avatar" class="pb-t1-avatar" :alt="item.user.name" />
                <span class="pb-t1-user-name">{{ item.user.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Action -->
      <div class="pb-t1-footer">
        <button class="pb-t1-btn">{{ testimonialData.buttonText }}</button>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-t1-loading">
    <div class="pb-t1-wrapper">
      <div class="pb-t1-skeleton-header"></div>
      <div class="pb-t1-skeleton-grid">
        <div v-for="i in 4" :key="i" class="pb-t1-skeleton-card"></div>
      </div>
    </div>
  </div>
</template>
