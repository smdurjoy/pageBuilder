<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-2"
    : "/api/page-builder/testimonial-components/testimonial-2/en",
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
    class="pb-t2-container"
    :dir="props.dir"
  >
    <!-- Background Floating Icons -->
    <div class="pb-t2-bg-patterns">
      <img :src="testimonialData.bgQuoteIcon" class="pb-t2-bg-icon p1" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t2-bg-icon p2" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t2-bg-icon p3" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t2-bg-icon p4" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t2-bg-icon p5" alt="pattern" />
    </div>

    <div class="pb-t2-wrapper">
      <div class="pb-t2-grid">
        <!-- Carousel Side -->
        <div class="pb-t2-carousel-side">
          <div class="pb-t2-embla" ref="emblaRef">
            <div class="pb-t2-embla-container">
              <div 
                v-for="(item, idx) in testimonialData.items" 
                :key="idx" 
                class="pb-t2-embla-slide"
              >
                <div class="pb-t2-card shadow-2xl">
                  <img :src="testimonialData.quoteIcon" class="pb-t2-quote-icon" alt="quote" />
                  <p class="pb-t2-quote-text">{{ item.quote }}</p>
                  
                  <div class="pb-t2-user-info">
                    <img :src="item.user.avatar" class="pb-t2-avatar" :alt="item.user.name" />
                    <span class="pb-t2-user-name">{{ item.user.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div class="pb-t2-content-side">
          <div class="pb-t2-badge-container">
            <span class="pb-t2-badge">{{ testimonialData.badge }}</span>
          </div>
          <h2 class="pb-t2-title">{{ testimonialData.title }}</h2>
          <p class="pb-t2-desc">{{ testimonialData.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-t2-loading">
    <div class="pb-t2-wrapper">
      <div class="pb-t2-skeleton-grid">
        <div class="pb-t2-skeleton-carousel"></div>
        <div class="pb-t2-skeleton-content"></div>
      </div>
    </div>
  </div>
</template>
