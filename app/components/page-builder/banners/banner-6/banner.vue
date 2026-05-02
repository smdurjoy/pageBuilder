<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-6"
    : "/api/page-builder/banner-components/banner-6/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b6-container"
    :dir="props.dir"
  >
    <div class="pb-b6-wrapper">
      <!-- Header -->
      <div class="pb-b6-header">
        <h2 class="pb-b6-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b6-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Main Banner -->
      <div class="pb-b6-banner shadow-2xl">
        <img 
          :src="bannerData.banner.image" 
          :alt="bannerData.banner.title" 
          class="pb-b6-img" 
        />
        
        <!-- Content Overlay -->
        <div class="pb-b6-overlay">
          <div class="pb-b6-content">
            <h3 class="pb-b6-title">{{ bannerData.banner.title }}</h3>
            <a :href="bannerData.banner.cta.href" class="pb-b6-cta">
              {{ bannerData.banner.cta.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b6-loading">
    <div class="pb-b6-wrapper">
      <div class="pb-b6-skeleton-header"></div>
      <div class="pb-b6-skeleton-banner"></div>
    </div>
  </div>
</template>
