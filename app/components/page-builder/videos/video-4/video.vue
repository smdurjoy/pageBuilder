<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { VideoData } from "~/types/page-builder/video-types/video-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/video-components/video-4"
    : "/api/page-builder/video-components/video-4/en",
);

const { data: videoData, pending, error } = useFetch<VideoData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && videoData"
    class="pb-v4-container"
    :dir="props.dir"
  >
    <div class="pb-v4-wrapper">
      <!-- Header -->
      <div class="pb-v4-header">
        <h2 class="pb-v4-header-title">{{ videoData.header.title }}</h2>
        <p class="pb-v4-header-subtitle">{{ videoData.header.subtitle }}</p>
      </div>

      <!-- Main Card -->
      <div class="pb-v4-card">
        <!-- Player -->
        <div class="pb-v4-player">
          <img :src="videoData.card.thumbnail" :alt="videoData.card.title" class="pb-v4-thumb" />
          <div class="pb-v4-badge">{{ videoData.card.badge }}</div>
          <div class="pb-v4-play-overlay">
            <button class="pb-v4-play-btn" aria-label="Play Video">
              <svg viewBox="0 0 24 24" fill="currentColor" class="pb-v4-play-icon">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="pb-v4-info">
          <h3 class="pb-v4-title">{{ videoData.card.title }}</h3>
          <p class="pb-v4-desc">{{ videoData.card.description }}</p>
        </div>

        <!-- Meta -->
        <div class="pb-v4-meta">
          <div class="pb-v4-meta-left">
            <button class="pb-v4-share">
              <img src="/video/Share.svg" alt="Share" class="pb-v4-share-icon" />
              <span>{{ videoData.card.shareLabel }}</span>
            </button>
          </div>
          <div class="pb-v4-meta-right">
            <div class="pb-v4-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{{ videoData.card.duration }}</span>
            </div>
            <div class="pb-v4-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
              <span>{{ videoData.card.views }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pb-v4-footer">
        <a :href="videoData.footer.ctaHref" class="pb-v4-footer-cta">
          {{ videoData.footer.ctaLabel }}
        </a>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-v4-loading">
    <div class="pb-v4-wrapper">
      <div class="pb-v4-skeleton-header"></div>
      <div class="pb-v4-skeleton-card"></div>
    </div>
  </div>
</template>
