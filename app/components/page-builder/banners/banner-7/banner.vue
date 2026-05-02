<script setup lang="ts">
import { useFetch } from "#app";
import { computed, ref, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-7";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-7"
    : "/api/page-builder/banner-components/banner-7/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: true,
  direction: props.dir as 'rtl' | 'ltr',
});

const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);

const onSelect = () => {
  if (!emblaApi.value) return;
  selectedIndex.value = emblaApi.value.selectedScrollSnap();
};

const onInit = () => {
  if (!emblaApi.value) return;
  scrollSnaps.value = emblaApi.value.scrollSnapList();
};

watch(emblaApi, (api) => {
  if (!api) return;
  onInit();
  onSelect();
  api.on("select", onSelect);
  api.on("reInit", onInit);
});

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();
const scrollTo = (index: number) => emblaApi.value?.scrollTo(index);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b7-container"
    :dir="props.dir"
  >
    <div class="pb-b7-wrapper">
      <!-- Header -->
      <div class="pb-b7-header">
        <h2 class="pb-b7-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b7-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Carousel -->
      <div class="pb-b7-carousel-wrap shadow-2xl">
        <div class="pb-b7-embla" ref="emblaRef">
          <div class="pb-b7-embla-container">
            <div
              v-for="slide in bannerData.slides"
              :key="slide.id"
              class="pb-b7-embla-slide"
            >
              <img :src="slide.image" :alt="slide.title" class="pb-b7-img" />
              <div class="pb-b7-overlay">
                <div class="pb-b7-content">
                  <h3 class="pb-b7-title">{{ slide.title }}</h3>
                  <a :href="slide.cta.href" class="pb-b7-cta">
                    {{ slide.cta.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button class="pb-b7-nav-btn pb-b7-prev" @click="scrollPrev" aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="pb-b7-nav-btn pb-b7-next" @click="scrollNext" aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <!-- Pagination Dots -->
        <div class="pb-b7-dots">
          <button
            v-for="(_, index) in scrollSnaps"
            :key="index"
            class="pb-b7-dot"
            :class="{ 'pb-b7-dot-active': index === selectedIndex }"
            @click="scrollTo(index)"
            aria-label="Go to slide"
          ></button>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b7-loading">
    <div class="pb-b7-wrapper">
      <div class="pb-b7-skeleton-header"></div>
      <div class="pb-b7-skeleton-carousel"></div>
    </div>
  </div>
</template>
