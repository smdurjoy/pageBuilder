<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { VideoData } from "~/types/page-builder/video-types/video-7";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/video-components/video-7"
    : "/api/page-builder/video-components/video-7/en",
);

const { data: videoData, pending, error } = useFetch<VideoData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && videoData"
    class="pb-v7-container"
    :dir="props.dir"
  >
    <div class="pb-v7-wrapper">
      <div class="pb-v7-grid">
        <!-- Content Column -->
        <div class="pb-v7-content-col">
          <div class="pb-v7-badge">{{ videoData.badge }}</div>
          <h2 class="pb-v7-title">{{ videoData.title }}</h2>
          <p class="pb-v7-desc">{{ videoData.description }}</p>
          
          <ul class="pb-v7-features">
            <li v-for="(feature, idx) in videoData.features" :key="idx" class="pb-v7-feature-item">
              <span class="pb-v7-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span class="pb-v7-feature-label">{{ feature.label }}</span>
            </li>
          </ul>

          <a :href="videoData.cta.href" class="pb-v7-cta">
            {{ videoData.cta.label }}
          </a>
        </div>

        <!-- Player Column -->
        <div class="pb-v7-player-col">
          <div class="pb-v7-thumbnail-container">
            <img :src="videoData.thumbnail" :alt="videoData.title" class="pb-v7-thumbnail" />
            <div class="pb-v7-overlay">
              <button class="pb-v7-play-btn" aria-label="Play Video">
                <svg viewBox="0 0 24 24" fill="currentColor" class="pb-v7-play-icon">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-v7-loading">
    <div class="pb-v7-wrapper">
      <div class="pb-v7-skeleton-grid">
        <div class="pb-v7-skeleton-player"></div>
        <div class="pb-v7-skeleton-content"></div>
      </div>
    </div>
  </div>
</template>
