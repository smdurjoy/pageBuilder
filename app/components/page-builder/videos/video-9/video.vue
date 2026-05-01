<script setup lang="ts">
import { useFetch } from "#app";
import { computed, ref } from "vue";
import type { VideoData } from "~/types/page-builder/video-types/video-9";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/video-components/video-9"
    : "/api/page-builder/video-components/video-9/en",
);

const { data: videoData, pending, error } = useFetch<VideoData>(endpoint);

const activeIndex = ref(0);

const activeVideo = computed(() => videoData.value?.playlist[activeIndex.value]);

const formatIndexLabel = (label: string, current: number, total: number) => {
  return label.replace("{current}", current.toString()).replace("{total}", total.toString());
};
</script>

<template>
  <section
    v-if="!pending && !error && videoData"
    class="pb-v9-container"
    :dir="props.dir"
  >
    <div class="pb-v9-wrapper">
      <!-- Header -->
      <div class="pb-v9-header">
        <h2 class="pb-v9-header-title">{{ videoData.header.title }}</h2>
        <p class="pb-v9-header-subtitle">{{ videoData.header.subtitle }}</p>
      </div>

      <!-- Main Player -->
      <div class="pb-v9-main-player">
        <div class="pb-v9-player-container shadow-2xl">
          <img 
            :src="activeVideo?.thumbnail" 
            :alt="activeVideo?.title" 
            class="pb-v9-main-thumb" 
          />
          
          <div class="pb-v9-play-overlay">
            <button class="pb-v9-play-btn" aria-label="Play Video">
              <svg viewBox="0 0 24 24" fill="currentColor" class="pb-v9-play-icon">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <!-- Video Info Overlay -->
          <div class="pb-v9-info-overlay">
            <h3 class="pb-v9-active-title">{{ activeVideo?.title }}</h3>
            <div class="pb-v9-active-meta">
              <span class="pb-v9-timer">{{ activeVideo?.duration }}</span>
              <span class="pb-v9-index-label">
                {{
                  formatIndexLabel(
                    videoData.currentIndexLabel,
                    activeIndex + 1,
                    videoData.playlist.length,
                  )
                }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Playlist Thumbnails -->
      <div class="pb-v9-playlist">
        <div class="pb-v9-playlist-grid">
          <button
            v-for="(item, idx) in videoData.playlist"
            :key="item.id"
            class="pb-v9-playlist-item"
            :class="{ 'pb-v9-playlist-item-active': activeIndex === idx }"
            @click="activeIndex = idx"
          >
            <div class="pb-v9-item-thumb-container">
              <img :src="item.thumbnail" :alt="item.title" class="pb-v9-item-thumb" />
              <div class="pb-v9-item-overlay">
                <div class="pb-v9-item-info">
                  <p class="pb-v9-item-title">{{ item.title }}</p>
                  <p class="pb-v9-item-duration">
                    <span class="pb-v9-item-timer">{{ item.duration }}</span>
                  </p>
                </div>
              </div>
              <!-- Active Dot -->
              <div v-if="activeIndex === idx" class="pb-v9-active-dot"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-v9-loading">
    <div class="pb-v9-wrapper">
      <div class="pb-v9-skeleton-header"></div>
      <div class="pb-v9-skeleton-player"></div>
      <div class="pb-v9-skeleton-playlist"></div>
    </div>
  </div>
</template>
