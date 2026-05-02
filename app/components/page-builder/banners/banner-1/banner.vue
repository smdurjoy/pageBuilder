<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-1"
    : "/api/page-builder/banner-components/banner-1/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b1-container"
    :dir="props.dir"
  >
    <div class="pb-b1-wrapper">
      <!-- Header -->
      <div class="pb-b1-header">
        <h2 class="pb-b1-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b1-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Main Banner -->
      <div class="pb-b1-banner shadow-xl">
        <img 
          :src="bannerData.banner.image" 
          :alt="bannerData.banner.title" 
          class="pb-b1-img" 
        />
        
        <!-- Content Overlay -->
        <div class="pb-b1-overlay">
          <div class="pb-b1-content">
            <h3 class="pb-b1-title">{{ bannerData.banner.title }}</h3>
            <a :href="bannerData.banner.cta.href" class="pb-b1-cta">
              {{ bannerData.banner.cta.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b1-loading">
    <div class="pb-b1-wrapper">
      <div class="pb-b1-skeleton-header"></div>
      <div class="pb-b1-skeleton-banner"></div>
    </div>
  </div>
</template>
