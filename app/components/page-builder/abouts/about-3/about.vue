<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-3"
    : "/api/page-builder/about-components/about-3/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a3-container"
    :dir="props.dir"
    :style="{ backgroundImage: `url(${aboutData.backgroundImage})` }"
  >
    <div class="pb-a3-overlay"></div>
    <div class="pb-a3-wrapper">
      <!-- Header -->
      <div class="pb-a3-header">
        <h2 class="pb-a3-title">{{ aboutData.title }}</h2>
        <h3 class="pb-a3-subtitle">{{ aboutData.subtitle }}</h3>
        <p class="pb-a3-description">{{ aboutData.description }}</p>
      </div>

      <!-- Stats Grid (Glassmorphism) -->
      <div class="pb-a3-stats">
        <div
          v-for="(stat, idx) in aboutData.stats"
          :key="idx"
          class="pb-a3-stat-card"
        >
          <span class="pb-a3-stat-value">{{ stat.value }}</span>
          <span class="pb-a3-stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="pb-a3-cta-wrap">
        <a :href="aboutData.cta.href" class="pb-a3-cta shadow-xl">
          {{ aboutData.cta.label }}
        </a>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a3-loading">
    <div class="pb-a3-wrapper">
      <div class="pb-a3-skeleton-header"></div>
      <div class="pb-a3-skeleton-grid">
        <div v-for="i in 3" :key="i" class="pb-a3-skeleton-card"></div>
      </div>
    </div>
  </div>
</template>
