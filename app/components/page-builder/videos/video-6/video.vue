<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { VideoData } from "~/types/page-builder/video-types/video-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/video-components/video-6"
    : "/api/page-builder/video-components/video-6/en",
);

const { data: videoData, pending, error } = useFetch<VideoData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && videoData"
    class="pb-v6-container"
    :dir="props.dir"
  >
    <div class="pb-v6-wrapper">
      <!-- Header Section -->
      <div class="pb-v6-header">
        <h2 class="pb-v6-title">{{ videoData.title }}</h2>
        <p class="pb-v6-subtitle">{{ videoData.subtitle }}</p>
      </div>

      <!-- Video Player Section -->
      <div class="pb-v6-player-wrap">
        <div class="pb-v6-thumbnail-container">
          <img
            :src="videoData.thumbnail"
            :alt="videoData.title"
            class="pb-v6-thumbnail"
          />

          <!-- Overlay and Play Button -->
          <div class="pb-v6-overlay">
            <button class="pb-v6-play-btn" aria-label="Play Video">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="pb-v6-play-icon"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <!-- Duration Badge -->
          <div class="pb-v6-duration">
            {{ videoData.duration }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-v6-loading">
    <div class="pb-v6-wrapper">
      <div class="pb-v6-skeleton-header"></div>
      <div class="pb-v6-skeleton-player"></div>
    </div>
  </div>
</template>
