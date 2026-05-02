<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-4"
    : "/api/page-builder/about-components/about-4/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);

const getIcon = (name: string) => {
  if (name === 'users') return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
  if (name === 'zap') return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>';
  if (name === 'check-circle') return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
  return '';
};

const getIconColor = (name: string) => {
  if (name === 'users') return '#38b2ac';
  if (name === 'zap') return '#805ad5';
  if (name === 'check-circle') return '#3182ce';
  return 'currentColor';
};
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a4-container"
    :dir="props.dir"
  >
    <div class="pb-a4-wrapper">
      <!-- Header Section -->
      <div class="pb-a4-header">
        <h2 class="pb-a4-title">{{ aboutData.header.title }}</h2>
        <p class="pb-a4-desc">{{ aboutData.header.description }}</p>
        <p class="pb-a4-subdesc">{{ aboutData.header.subDescription }}</p>
      </div>

      <!-- Gallery Grid -->
      <div class="pb-a4-gallery">
        <!-- Tall Card (Left in LTR, Right in RTL) -->
        <div class="pb-a4-gallery-tall">
          <div v-if="aboutData.gallery[2]" class="pb-a4-img-wrap pb-a4-img-tall shadow-lg">
            <img :src="aboutData.gallery[2]" alt="Gallery 3" class="pb-a4-img" />
          </div>
        </div>

        <!-- Stacked Cards (Right in LTR, Left in RTL) -->
        <div class="pb-a4-gallery-stack">
          <div class="pb-a4-img-wrap pb-a4-img-landscape shadow-lg">
            <img :src="aboutData.gallery[0]" alt="Gallery 1" class="pb-a4-img" />
          </div>
          <div class="pb-a4-img-wrap pb-a4-img-landscape shadow-lg">
            <img :src="aboutData.gallery[1]" alt="Gallery 2" class="pb-a4-img" />
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="pb-a4-features">
        <div
          v-for="(feature, idx) in aboutData.features"
          :key="idx"
          class="pb-a4-feature-card"
          :style="{ backgroundColor: feature.color }"
        >
          <div class="pb-a4-feature-icon" :style="{ color: getIconColor(feature.icon) }" v-html="getIcon(feature.icon)"></div>
          <h4 class="pb-a4-feature-title">{{ feature.title }}</h4>
          <p class="pb-a4-feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a4-loading">
    <div class="pb-a4-wrapper">
      <div class="pb-a4-skeleton-header"></div>
      <div class="pb-a4-skeleton-gallery"></div>
      <div class="pb-a4-skeleton-features"></div>
    </div>
  </div>
</template>
