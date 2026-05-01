<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { VideoData } from "~/types/page-builder/video-types/video-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/video-components/video-3"
    : "/api/page-builder/video-components/video-3/en",
);

const { data: videoData, pending, error } = useFetch<VideoData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && videoData"
    class="pb-v3-container"
    :dir="props.dir"
    :style="{ backgroundImage: `url(${videoData.bgImage})` }"
  >
    <!-- Overlay -->
    <div class="pb-v3-overlay-bg"></div>

    <div class="pb-v3-wrapper">
      <div class="pb-v3-grid">
        <!-- Content Column -->
        <div class="pb-v3-content-col">
          <div class="pb-v3-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M11 5L6 9H2V15H6L11 19V5Z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            {{ videoData.badge }}
          </div>
          <h2 class="pb-v3-title">{{ videoData.title }}</h2>
          <p class="pb-v3-desc">{{ videoData.description }}</p>

          <div class="pb-v3-ctas">
            <a
              v-for="(cta, idx) in videoData.ctas"
              :key="idx"
              :href="cta.href"
              :class="['pb-v3-cta', `pb-v3-cta-${cta.variant}`]"
            >
              {{ cta.label }}
            </a>
          </div>
        </div>

        <!-- Player Column -->
        <div class="pb-v3-player-col">
          <div class="pb-v3-thumbnail-container">
            <img
              :src="videoData.thumbnail"
              :alt="videoData.title"
              class="pb-v3-thumbnail"
            />

            <!-- Live Badge -->
            <div v-if="videoData.isLive" class="pb-v3-live-badge">
              {{ videoData.liveText }}
            </div>

            <!-- Play Button -->
            <div class="pb-v3-play-overlay">
              <button class="pb-v3-play-btn" aria-label="Play Video">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="pb-v3-play-icon"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <!-- Floating Stat Card -->
            <div class="pb-v3-stat-card">
              <div class="pb-v3-stat-value">{{ videoData.stat.value }}</div>
              <div class="pb-v3-stat-label">{{ videoData.stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-v3-loading">
    <div class="pb-v3-wrapper">
      <div class="pb-v3-skeleton-grid">
        <div class="pb-v3-skeleton-content"></div>
        <div class="pb-v3-skeleton-player"></div>
      </div>
    </div>
  </div>
</template>
