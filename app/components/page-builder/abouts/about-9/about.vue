<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-9";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-9"
    : "/api/page-builder/about-components/about-9/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);

const getIcon = (name: string) => {
  if (name === 'star') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
  if (name === 'file-text') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';
  if (name === 'eye') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  return '';
};

const getIconColor = (name: string) => {
  if (name === 'star') return '#d8b4fe';
  if (name === 'file-text') return '#5eead4';
  if (name === 'eye') return '#93c5fd';
  return 'currentColor';
};
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a9-container"
    :dir="props.dir"
  >
    <div class="pb-a9-wrapper">
      <!-- Header -->
      <div class="pb-a9-header">
        <h2 class="pb-a9-title">{{ aboutData.header.title }}</h2>
        <p class="pb-a9-desc">{{ aboutData.header.description }}</p>
      </div>

      <!-- Pillars Row -->
      <div class="pb-a9-pillars">
        <div
          v-for="(pillar, idx) in aboutData.pillars"
          :key="idx"
          class="pb-a9-pillar-card shadow-xl"
        >
          <div class="pb-a9-pillar-icon" :style="{ backgroundColor: pillar.iconBg, color: getIconColor(pillar.icon) }" v-html="getIcon(pillar.icon)"></div>
          <h3 class="pb-a9-pillar-title">{{ pillar.title }}</h3>
          <p class="pb-a9-pillar-desc">{{ pillar.description }}</p>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="pb-a9-stats">
        <div
          v-for="(stat, idx) in aboutData.stats"
          :key="idx"
          class="pb-a9-stat-card shadow-xl"
          :style="{ backgroundColor: stat.color }"
        >
          <span class="pb-a9-stat-value">{{ stat.value }}</span>
          <span class="pb-a9-stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="pb-a9-features">
        <div
          v-for="(feature, idx) in aboutData.features"
          :key="idx"
          class="pb-a9-feature-card shadow-xl"
          :style="{ borderRight: props.dir === 'rtl' ? `4px solid ${feature.borderColor}` : 'none', borderLeft: props.dir === 'ltr' ? `4px solid ${feature.borderColor}` : 'none' }"
        >
          <h4 class="pb-a9-feature-title">{{ feature.title }}</h4>
          <p class="pb-a9-feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a9-loading">
    <div class="pb-a9-wrapper">
      <div class="pb-a9-skeleton-header"></div>
      <div class="pb-a9-skeleton-row"></div>
      <div class="pb-a9-skeleton-row"></div>
    </div>
  </div>
</template>
