<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-5";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-5"
    : "/api/page-builder/banner-components/banner-5/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b5-container"
    :dir="props.dir"
  >
    <div class="pb-b5-wrapper">
      <!-- Header -->
      <div class="pb-b5-header">
        <h2 class="pb-b5-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b5-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Cards Grid -->
      <div class="pb-b5-grid">
        <div
          v-for="(card, idx) in bannerData.cards"
          :key="idx"
          class="pb-b5-card shadow-lg"
        >
          <img :src="card.image" :alt="card.title" class="pb-b5-img" />
          <div class="pb-b5-overlay">
            <div class="pb-b5-content">
              <h3 class="pb-b5-title">{{ card.title }}</h3>
              <a :href="card.cta.href" class="pb-b5-cta">
                {{ card.cta.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b5-loading">
    <div class="pb-b5-wrapper">
      <div class="pb-b5-skeleton-header"></div>
      <div class="pb-b5-skeleton-grid">
        <div v-for="i in 4" :key="i" class="pb-b5-skeleton-card"></div>
      </div>
    </div>
  </div>
</template>
