<script setup lang="ts">
import { useFetch } from "#app";
import { computed, watch } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
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
    ? "/api/page-builder/showcase-components/showcase-2"
    : "/api/page-builder/showcase-components/showcase-2/en",
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
    class="pb-show2-container"
    :dir="props.dir"
  >
    <div class="pb-show2-wrapper">
      
      <!-- Text Content (Right in RTL, Left in LTR natively via Flexbox) -->
      <div class="pb-show2-content">
        <div class="pb-show2-badge-wrap">
          <span class="pb-show2-badge">{{ showcaseData.badge }}</span>
        </div>
        <h2 class="pb-show2-title">{{ showcaseData.title }}</h2>
        <p class="pb-show2-desc">{{ showcaseData.description }}</p>
        <a href="#" class="pb-show2-explore-btn">{{ showcaseData.exploreText }}</a>
      </div>

      <!-- Carousel Section (Left in RTL, Right in LTR natively via Flexbox) -->
      <div class="pb-show2-carousel-col">
        <div class="pb-show2-embla" ref="emblaRef">
          <div class="pb-show2-embla-container">
            <div
              v-for="(item, idx) in showcaseData.items"
              :key="idx"
              class="pb-show2-embla-slide"
            >
              <div class="pb-show2-card">
                <div class="pb-show2-card-img-wrapper">
                  <img :src="item.image" :alt="item.title" class="pb-show2-card-img" />
                </div>
                <div class="pb-show2-card-body">
                  <h3 class="pb-show2-card-title">{{ item.title }}</h3>
                  <p class="pb-show2-card-desc">{{ item.description }}</p>
                  
                  <div class="pb-show2-card-btn-wrap">
                    <a :href="item.link" class="pb-show2-card-btn">
                      <span>{{ item.detailsText }}</span>
                      <span class="pb-show2-btn-icon-circle">
                        <ArrowLeft v-if="props.dir === 'rtl'" class="pb-show2-btn-icon" />
                        <ArrowRight v-else class="pb-show2-btn-icon" />
                      </span>
                    </a>
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
  <div v-else-if="pending" class="pb-show2-loading">
    <div class="pb-show2-skeleton-header"></div>
    <div class="pb-show2-skeleton-grid">
      <div v-for="i in 2" :key="i" class="pb-show2-skeleton-card"></div>
    </div>
  </div>
</template>
