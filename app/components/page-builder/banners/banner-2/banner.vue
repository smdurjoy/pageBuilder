<script setup lang="ts">
import { useFetch } from "#app";
import { computed, onMounted, ref, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-2"
    : "/api/page-builder/banner-components/banner-2/en",
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
    class="pb-b2-container"
    :dir="props.dir"
  >
    <div class="pb-b2-wrapper">
      <!-- Header -->
      <div class="pb-b2-header">
        <h2 class="pb-b2-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b2-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Carousel -->
      <div class="pb-b2-carousel-wrap shadow-xl">
        <div class="pb-b2-embla" ref="emblaRef">
          <div class="pb-b2-embla-container">
            <div
              v-for="slide in bannerData.slides"
              :key="slide.id"
              class="pb-b2-embla-slide"
            >
              <img :src="slide.image" :alt="slide.title" class="pb-b2-img" />
              <div class="pb-b2-overlay">
                <div class="pb-b2-content">
                  <h3 class="pb-b2-title">{{ slide.title }}</h3>
                  <a :href="slide.cta.href" class="pb-b2-cta">
                    {{ slide.cta.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button class="pb-b2-nav-btn pb-b2-prev" @click="scrollPrev" aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="pb-b2-nav-btn pb-b2-next" @click="scrollNext" aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <!-- Pagination Dots -->
        <div class="pb-b2-dots">
          <button
            v-for="(_, index) in scrollSnaps"
            :key="index"
            class="pb-b2-dot"
            :class="{ 'pb-b2-dot-active': index === selectedIndex }"
            @click="scrollTo(index)"
            aria-label="Go to slide"
          ></button>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b2-loading">
    <div class="pb-b2-wrapper">
      <div class="pb-b2-skeleton-header"></div>
      <div class="pb-b2-skeleton-carousel"></div>
    </div>
  </div>
</template>
