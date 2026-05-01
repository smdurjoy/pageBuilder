<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { VideoData } from "~/types/page-builder/video-types/video-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/video-components/video-2"
    : "/api/page-builder/video-components/video-2/en",
);

const { data: videoData, pending, error } = useFetch<VideoData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && videoData"
    class="pb-v2-container"
    :dir="props.dir"
  >
    <div class="pb-v2-wrapper">
      <div class="pb-v2-grid">
        <!-- Content Column -->
        <div class="pb-v2-content-col">
          <div class="pb-v2-badge">{{ videoData.badge }}</div>
          <h2 class="pb-v2-title">{{ videoData.title }}</h2>
          <p class="pb-v2-desc">{{ videoData.description }}</p>
          
          <ul class="pb-v2-features">
            <li v-for="(feature, idx) in videoData.features" :key="idx" class="pb-v2-feature-item">
              <span class="pb-v2-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span class="pb-v2-feature-label">{{ feature.label }}</span>
            </li>
          </ul>

          <a :href="videoData.cta.href" class="pb-v2-cta">
            {{ videoData.cta.label }}
          </a>
        </div>

        <!-- Player Column -->
        <div class="pb-v2-player-col">
          <div class="pb-v2-thumbnail-container">
            <img :src="videoData.thumbnail" :alt="videoData.title" class="pb-v2-thumbnail" />
            <div class="pb-v2-overlay">
              <button class="pb-v2-play-btn" aria-label="Play Video">
                <svg viewBox="0 0 24 24" fill="currentColor" class="pb-v2-play-icon">
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
  <div v-else-if="pending" class="pb-v2-loading">
    <div class="pb-v2-wrapper">
      <div class="pb-v2-skeleton-grid">
        <div class="pb-v2-skeleton-player"></div>
        <div class="pb-v2-skeleton-content"></div>
      </div>
    </div>
  </div>
</template>
