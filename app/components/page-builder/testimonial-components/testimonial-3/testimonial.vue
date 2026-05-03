<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch, onMounted, ref } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/testimonial-components/testimonial-3"
    : "/api/page-builder/testimonial-components/testimonial-3/en",
);

const {
  data: testimonialData,
  pending,
  error,
} = useFetch<TestimonialData>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  direction: props.dir as "rtl" | "ltr",
  align: "start",
  containScroll: "trimSnaps",
  loop: true,
});

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();

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
    class="pb-t3-container"
    :dir="props.dir"
  >
    <!-- Background Floating Icons -->
    <div class="pb-t3-bg-patterns">
      <img
        :src="testimonialData.bgQuoteIcon"
        class="pb-t3-bg-icon p1"
        alt="pattern"
      />
      <img
        :src="testimonialData.bgQuoteIcon"
        class="pb-t3-bg-icon p2"
        alt="pattern"
      />
      <img
        :src="testimonialData.bgQuoteIcon"
        class="pb-t3-bg-icon p3"
        alt="pattern"
      />
      <img
        :src="testimonialData.bgQuoteIcon"
        class="pb-t3-bg-icon p4"
        alt="pattern"
      />
      <img
        :src="testimonialData.bgQuoteIcon"
        class="pb-t3-bg-icon p5"
        alt="pattern"
      />
    </div>

    <div class="pb-t3-wrapper">
      <div class="pb-t3-grid">
        <!-- Carousel Side (Single Card) -->
        <div class="pb-t3-carousel-side">
          <div class="pb-t3-embla" ref="emblaRef">
            <div class="pb-t3-embla-container">
              <div
                v-for="(item, idx) in testimonialData.items"
                :key="idx"
                class="pb-t3-embla-slide"
              >
                <div class="pb-t3-card shadow-2xl">
                  <img
                    :src="testimonialData.quoteIcon"
                    class="pb-t3-quote-icon"
                    alt="quote"
                  />
                  <p class="pb-t3-quote-text">"{{ item.quote }}"</p>

                  <div class="pb-t3-user-info">
                    <img
                      :src="item.user.avatar"
                      class="pb-t3-avatar"
                      :alt="item.user.name"
                    />
                    <div class="pb-t3-user-details">
                      <span class="pb-t3-user-name">{{ item.user.name }}</span>
                      <span class="pb-t3-user-role">{{ item.user.role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Arrows -->
          <div class="pb-t3-nav">
            <button @click="scrollPrev" class="pb-t3-nav-btn prev">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button @click="scrollNext" class="pb-t3-nav-btn next">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <!-- Content Side -->
        <div class="pb-t3-content-side">
          <div class="pb-t3-badge-container">
            <span class="pb-t3-badge">{{ testimonialData.badge }}</span>
          </div>
          <h2 class="pb-t3-title">{{ testimonialData.title }}</h2>
          <p class="pb-t3-desc">{{ testimonialData.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-t3-loading">
    <div class="pb-t3-wrapper">
      <div class="pb-t3-skeleton-grid">
        <div class="pb-t3-skeleton-carousel"></div>
        <div class="pb-t3-skeleton-content"></div>
      </div>
    </div>
  </div>
</template>
