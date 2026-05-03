<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch, ref } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { SlideData } from "~/types/page-builder/slide-types/slide-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/slide-components/slide-5"
    : "/api/page-builder/slide-components/slide-5/en",
);

const { data: slideData, pending, error } = useFetch<SlideData>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  direction: props.dir as "rtl" | "ltr",
  align: "start",
  loop: true,
  dragFree: true,
});

const progress = ref(0);

const onScroll = () => {
  if (!emblaApi.value) return;
  const progressVal = Math.max(0, Math.min(1, emblaApi.value.scrollProgress()));
  progress.value = progressVal * 100;
};

watch(emblaApi, (api) => {
  if (!api) return;
  api.on("scroll", onScroll);
  api.on("reInit", onScroll);
});

watch(() => props.dir, (newDir) => {
  if (emblaApi.value) {
    emblaApi.value.reInit({ direction: newDir as "rtl" | "ltr" });
  }
});

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();
</script>

<template>
  <section
    v-if="!pending && !error && slideData"
    class="pb-s5-container"
    :dir="props.dir"
  >
    <div class="pb-s5-wrapper">
      <!-- Carousel Column -->
      <div class="pb-s5-carousel-col">
        <div class="pb-s5-embla" ref="emblaRef">
          <div class="pb-s5-embla-container">
            <div 
              v-for="(item, idx) in slideData.items" 
              :key="idx" 
              class="pb-s5-embla-slide"
            >
              <div class="pb-s5-card">
                <img :src="item.image" class="pb-s5-card-img" alt="slide image" />
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation & Progress -->
        <div class="pb-s5-nav-area">
          <div class="pb-s5-nav-btns">
            <button @click="scrollPrev" class="pb-s5-nav-btn prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button @click="scrollNext" class="pb-s5-nav-btn next">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          <div class="pb-s5-progress-container">
            <div 
              class="pb-s5-progress-bar" 
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Content Column -->
      <div class="pb-s5-content-col">
        <div class="pb-s5-badge-wrapper">
          <span class="pb-s5-badge">{{ slideData.badge }}</span>
        </div>
        <h2 class="pb-s5-title">{{ slideData.title }}</h2>
        <p class="pb-s5-desc">{{ slideData.description }}</p>
        <div class="pb-s5-btn-wrapper">
          <button class="pb-s5-btn">{{ slideData.buttonText }}</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-s5-loading">
    <div class="pb-s5-skeleton-layout"></div>
  </div>
</template>
