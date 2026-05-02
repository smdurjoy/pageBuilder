<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-2"
    : "/api/page-builder/about-components/about-2/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a2-container"
    :dir="props.dir"
    :style="{ backgroundImage: `url(${aboutData.backgroundImage})` }"
  >
    <div class="pb-a2-overlay"></div>
    <div class="pb-a2-wrapper">
      <!-- Content Section -->
      <div class="pb-a2-content">
        <h2 class="pb-a2-title">{{ aboutData.title }}</h2>
        <h3 class="pb-a2-subtitle">{{ aboutData.subtitle }}</h3>
        <p class="pb-a2-description">{{ aboutData.description }}</p>
      </div>

      <!-- Stats Grid -->
      <div class="pb-a2-stats">
        <div
          v-for="(stat, idx) in aboutData.stats"
          :key="idx"
          class="pb-a2-stat-card shadow-lg"
        >
          <span class="pb-a2-stat-value">{{ stat.value }}</span>
          <span class="pb-a2-stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a2-loading">
    <div class="pb-a2-wrapper">
      <div class="pb-a2-skeleton-content"></div>
      <div class="pb-a2-skeleton-grid">
        <div v-for="i in 4" :key="i" class="pb-a2-skeleton-card"></div>
      </div>
    </div>
  </div>
</template>
