<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-1"
    : "/api/page-builder/about-components/about-1/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a1-container"
    :dir="props.dir"
  >
    <div class="pb-a1-wrapper">
      <!-- Content Column -->
      <div class="pb-a1-content-col">
        <h2 class="pb-a1-title">{{ aboutData.title }}</h2>
        <p class="pb-a1-description">{{ aboutData.description }}</p>

        <!-- Stats Grid -->
        <div class="pb-a1-stats">
          <div
            v-for="(stat, idx) in aboutData.stats"
            :key="idx"
            class="pb-a1-stat-item"
          >
            <span class="pb-a1-stat-value">{{ stat.value }}</span>
            <span class="pb-a1-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="pb-a1-image-col">
        <div class="pb-a1-image-decor-top"></div>
        <div class="pb-a1-image-wrap shadow-2xl">
          <img :src="aboutData.image" :alt="aboutData.title" class="pb-a1-img" />
        </div>
        <div class="pb-a1-image-decor-bottom"></div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a1-loading">
    <div class="pb-a1-wrapper">
      <div class="pb-a1-skeleton-image"></div>
      <div class="pb-a1-skeleton-content"></div>
    </div>
  </div>
</template>
