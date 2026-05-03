<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-6"
    : "/api/page-builder/testimonial-components/testimonial-6/en",
);

const { data: testimonialData, pending, error } = useFetch<TestimonialData>(endpoint);

const carouselItems = computed(() => {
  if (!testimonialData.value) return [];
  return [...testimonialData.value.items, ...testimonialData.value.items, ...testimonialData.value.items];
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
    class="pb-t6-container"
    :dir="props.dir"
  >
    <!-- Background Patterns -->
    <div class="pb-t6-bg-patterns">
      <img :src="testimonialData.bgQuoteIcon" class="pb-t6-bg-icon p1" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t6-bg-icon p2" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t6-bg-icon p3" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t6-bg-icon p4" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t6-bg-icon p5" alt="pattern" />
    </div>

    <div class="pb-t6-wrapper">
      <!-- Content Section -->
      <div class="pb-t6-content">
        <h2 class="pb-t6-title">{{ testimonialData.title }}</h2>
        <p class="pb-t6-desc">{{ testimonialData.description }}</p>
        <div class="pb-t6-btn-wrapper">
          <button class="pb-t6-btn">{{ testimonialData.buttonText }}</button>
        </div>
      </div>

      <!-- Carousel Section (Full Width) -->
      <div class="pb-t6-carousel-area">
        <div class="pb-t6-embla" ref="emblaRef">
          <div class="pb-t6-embla-container">
            <div
              v-for="(item, idx) in carouselItems"
              :key="idx"
              class="pb-t6-embla-slide"
            >
              <div class="pb-t6-card">
                <img :src="testimonialData.quoteIcon" class="pb-t6-quote-icon" alt="quote" />
                <p class="pb-t6-quote-text">{{ item.quote }}</p>
                <div class="pb-t6-user-info">
                  <img :src="item.user.avatar" class="pb-t6-avatar" :alt="item.user.name" />
                  <div class="pb-t6-user-details">
                    <span class="pb-t6-user-name">{{ item.user.name }}</span>
                    <span class="pb-t6-user-role">{{ item.user.role }}</span>
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
  <div v-else-if="pending" class="pb-t6-loading">
    <div class="pb-t6-skeleton-content"></div>
    <div class="pb-t6-skeleton-carousel"></div>
  </div>
</template>
