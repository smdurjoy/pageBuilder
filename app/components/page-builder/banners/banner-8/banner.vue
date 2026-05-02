<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-8";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-8"
    : "/api/page-builder/banner-components/banner-8/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b8-container"
    :dir="props.dir"
  >
    <div class="pb-b8-wrapper">
      <!-- Header -->
      <div class="pb-b8-header">
        <h2 class="pb-b8-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b8-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Cards Grid -->
      <div class="pb-b8-grid">
        <div
          v-for="(card, idx) in bannerData.cards"
          :key="idx"
          class="pb-b8-card shadow-2xl"
        >
          <img :src="card.image" :alt="card.title" class="pb-b8-img" />
          <div class="pb-b8-overlay">
            <div class="pb-b8-content">
              <h3 class="pb-b8-title">{{ card.title }}</h3>
              <a :href="card.cta.href" class="pb-b8-cta">
                <span class="pb-b8-cta-text">{{ card.cta.label }}</span>
                <span class="pb-b8-cta-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b8-loading">
    <div class="pb-b8-wrapper">
      <div class="pb-b8-skeleton-header"></div>
      <div class="pb-b8-skeleton-grid">
        <div class="pb-b8-skeleton-card"></div>
        <div class="pb-b8-skeleton-card"></div>
      </div>
    </div>
  </div>
</template>
