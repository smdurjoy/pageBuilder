<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-8";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-8"
    : "/api/page-builder/about-components/about-8/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);

const getIcon = (name: string) => {
  if (name === 'check-circle') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
  if (name === 'zap') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>';
  if (name === 'users') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
  return '';
};
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a8-container"
    :dir="props.dir"
  >
    <div class="pb-a8-wrapper">
      <!-- Header -->
      <div class="pb-a8-header">
        <h2 class="pb-a8-title">{{ aboutData.header.title }}</h2>
        <p class="pb-a8-desc">{{ aboutData.header.description }}</p>
        <p class="pb-a8-subdesc" v-if="aboutData.header.subDescription">{{ aboutData.header.subDescription }}</p>
      </div>

      <!-- Gallery Grid -->
      <div class="pb-a8-gallery">
        <div class="pb-a8-gallery-tall" v-if="props.dir === 'rtl'">
          <div class="pb-a8-img-wrap pb-a8-img-tall shadow-xl">
            <img :src="aboutData.gallery.tall" alt="Tall" class="pb-a8-img" />
          </div>
        </div>
        
        <div class="pb-a8-gallery-stack">
          <div class="pb-a8-img-wrap pb-a8-img-landscape shadow-xl">
            <img :src="aboutData.gallery.landscape1" alt="L1" class="pb-a8-img" />
          </div>
          <div class="pb-a8-img-wrap pb-a8-img-landscape shadow-xl">
            <img :src="aboutData.gallery.landscape2" alt="L2" class="pb-a8-img" />
          </div>
        </div>

        <div class="pb-a8-gallery-tall" v-if="props.dir === 'ltr'">
          <div class="pb-a8-img-wrap pb-a8-img-tall shadow-xl">
            <img :src="aboutData.gallery.tall" alt="Tall" class="pb-a8-img" />
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="pb-a8-features">
        <div
          v-for="(feature, idx) in aboutData.features"
          :key="idx"
          class="pb-a8-feature-card shadow-lg"
          :style="{ backgroundColor: feature.bgColor }"
        >
          <div class="pb-a8-feature-icon" v-html="getIcon(feature.icon)"></div>
          <h4 class="pb-a8-feature-title">{{ feature.title }}</h4>
          <p class="pb-a8-feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a8-loading">
    <div class="pb-a8-wrapper">
      <div class="pb-a8-skeleton-header"></div>
      <div class="pb-a8-skeleton-gallery"></div>
      <div class="pb-a8-skeleton-features"></div>
    </div>
  </div>
</template>
