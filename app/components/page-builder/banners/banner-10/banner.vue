<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-10";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-10"
    : "/api/page-builder/banner-components/banner-10/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b10-container"
    :dir="props.dir"
  >
    <div class="pb-b10-wrapper">
      <!-- Header -->
      <div class="pb-b10-header">
        <h2 class="pb-b10-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b10-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Cards Grid -->
      <div class="pb-b10-grid">
        <div
          v-for="(card, idx) in bannerData.cards"
          :key="idx"
          class="pb-b10-card shadow-2xl"
        >
          <img :src="card.image" :alt="card.title" class="pb-b10-img" />
          <div class="pb-b10-overlay">
            <div class="pb-b10-content">
              <h3 class="pb-b10-title">{{ card.title }}</h3>
              <a :href="card.cta.href" class="pb-b10-cta">
                {{ card.cta.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b10-loading">
    <div class="pb-b10-wrapper">
      <div class="pb-b10-skeleton-header"></div>
      <div class="pb-b10-skeleton-grid">
        <div v-for="i in 4" :key="i" class="pb-b10-skeleton-card"></div>
      </div>
    </div>
  </div>
</template>
