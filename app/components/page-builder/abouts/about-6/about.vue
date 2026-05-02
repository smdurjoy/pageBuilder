<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { AboutData } from "~/types/page-builder/about-types/about-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/about-components/about-6"
    : "/api/page-builder/about-components/about-6/en",
);

const { data: aboutData, pending, error } = useFetch<AboutData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && aboutData"
    class="pb-a6-container"
    :dir="props.dir"
  >
    <div class="pb-a6-wrapper">
      <!-- Content Column -->
      <div class="pb-a6-content-col">
        <h2 class="pb-a6-title">{{ aboutData.title }}</h2>
        <p class="pb-a6-description">{{ aboutData.description }}</p>

        <!-- Stats Grid -->
        <div class="pb-a6-stats">
          <div
            v-for="(stat, idx) in aboutData.stats"
            :key="idx"
            class="pb-a6-stat-item"
          >
            <span class="pb-a6-stat-value">{{ stat.value }}</span>
            <span class="pb-a6-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="pb-a6-image-col">
        <!-- Floating Decors -->
        <div class="pb-a6-image-decor-top"></div>
        <div class="pb-a6-image-decor-bottom"></div>

        <div class="pb-a6-image-wrap shadow-2xl">
          <img :src="aboutData.image" alt="About Image" class="pb-a6-img" />
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-a6-loading">
    <div class="pb-a6-wrapper">
      <div class="pb-a6-skeleton-content"></div>
      <div class="pb-a6-skeleton-image"></div>
    </div>
  </div>
</template>
