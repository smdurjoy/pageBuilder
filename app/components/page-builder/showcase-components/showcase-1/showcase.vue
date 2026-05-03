<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { Showcase1Data } from "~/types/page-builder/showcase-types/showcase-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/showcase-components/showcase-1"
    : "/api/page-builder/showcase-components/showcase-1/en",
);

const { data: showcaseData, pending, error } = useFetch<Showcase1Data>(endpoint);

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
    v-if="!pending && !error && showcaseData"
    class="pb-show1-container"
    :dir="props.dir"
  >
    <div class="pb-show1-wrapper">
      <!-- Header -->
      <div class="pb-show1-header">
        <div class="pb-show1-badge-wrap">
          <span class="pb-show1-badge">{{ showcaseData.badge }}</span>
        </div>
        <h2 class="pb-show1-title">{{ showcaseData.title }}</h2>
        <p class="pb-show1-desc">{{ showcaseData.description }}</p>
      </div>

      <!-- Carousel -->
      <div class="pb-show1-embla" ref="emblaRef">
        <div class="pb-show1-embla-container">
          <div
            v-for="(item, idx) in showcaseData.items"
            :key="idx"
            class="pb-show1-embla-slide"
          >
            <div class="pb-show1-card">
              <div class="pb-show1-card-img-wrapper">
                <img :src="item.image" :alt="item.title" class="pb-show1-card-img" />
              </div>
              <div class="pb-show1-card-body">
                <h3 class="pb-show1-card-title">{{ item.title }}</h3>
                <p class="pb-show1-card-desc">{{ item.description }}</p>
                <a :href="item.link" class="pb-show1-card-btn">
                  {{ item.detailsText }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="pb-show1-footer">
        <a href="#" class="pb-show1-explore-btn">{{ showcaseData.exploreText }}</a>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-show1-loading">
    <div class="pb-show1-skeleton-header"></div>
    <div class="pb-show1-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-show1-skeleton-card"></div>
    </div>
  </div>
</template>
