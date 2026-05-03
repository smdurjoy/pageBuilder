<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-4"
    : "/api/page-builder/testimonial-components/testimonial-4/en",
);

const { data: testimonialData, pending, error } = useFetch<TestimonialData>(endpoint);

// Options for vertical sliding
const emblaOptions = {
  axis: "y" as const,
  direction: props.dir as "rtl" | "ltr",
  align: "start" as const,
  loop: true,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

const [emblaRef1] = emblaCarouselVue(emblaOptions);
const [emblaRef2] = emblaCarouselVue(emblaOptions);

const col1Items = computed(() => {
  if (!testimonialData.value) return [];
  const items = testimonialData.value.items.filter((_, i) => i % 2 === 0);
  return [...items, ...items, ...items]; // Triple for better vertical loop feel
});

const col2Items = computed(() => {
  if (!testimonialData.value) return [];
  const items = testimonialData.value.items.filter((_, i) => i % 2 !== 0);
  return [...items, ...items, ...items]; // Triple for better vertical loop feel
});
</script>

<template>
  <section
    v-if="!pending && !error && testimonialData"
    class="pb-t4-container"
    :dir="props.dir"
  >
    <!-- Background Floating Icons -->
    <div class="pb-t4-bg-patterns">
      <img :src="testimonialData.bgQuoteIcon" class="pb-t4-bg-icon p1" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t4-bg-icon p2" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t4-bg-icon p3" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t4-bg-icon p4" alt="pattern" />
      <img :src="testimonialData.bgQuoteIcon" class="pb-t4-bg-icon p5" alt="pattern" />
    </div>

    <div class="pb-t4-grid">
      <!-- Vertical Slider Side -->
      <div class="pb-t4-slider-side">
        <div class="pb-t4-embla-wrapper">
          <div class="pb-t4-embla-viewport" ref="emblaRef1">
            <div class="pb-t4-embla-container">
              <div 
                v-for="(item, idx) in col1Items" 
                :key="`c1-${idx}`" 
                class="pb-t4-embla-slide"
              >
                <div class="pb-t4-card shadow-2xl">
                  <img :src="testimonialData.quoteIcon" class="pb-t4-quote-icon" alt="quote" />
                  <p class="pb-t4-quote-text">{{ item.quote }}</p>
                  <div class="pb-t4-user-info">
                    <img :src="item.user.avatar" class="pb-t4-avatar" :alt="item.user.name" />
                    <span class="pb-t4-user-name">{{ item.user.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-t4-embla-wrapper">
          <div class="pb-t4-embla-viewport" ref="emblaRef2">
            <div class="pb-t4-embla-container">
              <div 
                v-for="(item, idx) in col2Items" 
                :key="`c2-${idx}`" 
                class="pb-t4-embla-slide"
              >
                <div class="pb-t4-card shadow-2xl">
                  <img :src="testimonialData.quoteIcon" class="pb-t4-quote-icon" alt="quote" />
                  <p class="pb-t4-quote-text">{{ item.quote }}</p>
                  <div class="pb-t4-user-info">
                    <img :src="item.user.avatar" class="pb-t4-avatar" :alt="item.user.name" />
                    <span class="pb-t4-user-name">{{ item.user.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Side -->
      <div class="pb-t4-content-side">
        <div class="pb-t4-badge-container">
          <span class="pb-t4-badge">{{ testimonialData.badge }}</span>
        </div>
        <h2 class="pb-t4-title">{{ testimonialData.title }}</h2>
        <p class="pb-t4-desc">{{ testimonialData.description }}</p>
        <div class="pb-t4-footer">
          <button class="pb-t4-btn">{{ testimonialData.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-t4-loading">
    <div class="pb-t4-wrapper">
      <div class="pb-t4-skeleton-grid">
        <div class="pb-t4-skeleton-slider"></div>
        <div class="pb-t4-skeleton-content"></div>
      </div>
    </div>
  </div>
</template>
