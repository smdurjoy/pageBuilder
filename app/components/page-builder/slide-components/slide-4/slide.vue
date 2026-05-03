<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch, ref } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { Slide4Data } from "~/types/page-builder/slide-types/slide-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/slide-components/slide-4"
    : "/api/page-builder/slide-components/slide-4/en",
);

const { data: slideData, pending, error } = useFetch<Slide4Data>(endpoint);

const [emblaRef, emblaApi] = emblaCarouselVue({
  direction: props.dir as "rtl" | "ltr",
  align: "center",
  loop: true,
  dragFree: false, // For better snapping to center
});

const selectedIndex = ref(0);

const onSelect = () => {
  if (!emblaApi.value) return;
  selectedIndex.value = emblaApi.value.selectedScrollSnap();
};

watch(emblaApi, (api) => {
  if (!api) return;
  api.on("select", onSelect);
  api.on("reInit", onSelect);
  onSelect();
});

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
    v-if="!pending && !error && slideData"
    class="pb-s4-container"
    :dir="props.dir"
  >
    <div class="pb-s4-wrapper">
      <!-- Centered Header -->
      <div class="pb-s4-header">
        <h2 class="pb-s4-title">{{ slideData.title }}</h2>
        <p class="pb-s4-desc">{{ slideData.description }}</p>
        <div class="pb-s4-btn-wrapper">
          <button class="pb-s4-btn">{{ slideData.buttonText }}</button>
        </div>
      </div>

      <!-- Centered Carousel Area -->
      <div class="pb-s4-carousel-area">
        <div class="pb-s4-embla" ref="emblaRef">
          <div class="pb-s4-embla-container">
            <div
              v-for="(item, idx) in slideData.items"
              :key="idx"
              class="pb-s4-embla-slide"
              :class="{ 'is-selected': selectedIndex === idx }"
            >
              <div class="pb-s4-card">
                <img
                  :src="item.image"
                  class="pb-s4-card-img"
                  alt="slide image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-s4-loading">
    <div class="pb-s4-skeleton-header"></div>
    <div class="pb-s4-skeleton-carousel"></div>
  </div>
</template>
