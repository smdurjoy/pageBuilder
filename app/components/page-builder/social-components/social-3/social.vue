<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Social3Data } from "~/types/page-builder/social-types/social-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/social-components/social-3"
    : "/api/page-builder/social-components/social-3/en",
);

const { data: socialData, pending, error } = useFetch<Social3Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && socialData"
    class="pb-soc3-container"
    :dir="props.dir"
  >
    <div class="pb-soc3-wrapper">
      <!-- Centered Header -->
      <div class="pb-soc3-header">
        <h2 class="pb-soc3-title">{{ socialData.title }}</h2>
        <p class="pb-soc3-desc">{{ socialData.description }}</p>
      </div>

      <!-- Social Cards Grid -->
      <div class="pb-soc3-grid">
        <div
          v-for="(item, idx) in socialData.items"
          :key="idx"
          class="pb-soc3-card"
        >
          <!-- Icon -->
          <div class="pb-soc3-icon-wrapper">
            <img :src="item.icon" :alt="item.name" class="pb-soc3-icon" />
          </div>

          <!-- Name -->
          <span class="pb-soc3-name">{{ item.name }}</span>

          <!-- Followers -->
          <span class="pb-soc3-followers" :style="{ color: item.color }">{{
            item.followers
          }}</span>

          <!-- Description -->
          <p class="pb-soc3-card-desc">{{ item.description }}</p>

          <!-- Follow Button -->
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="pb-soc3-btn"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-soc3-loading">
    <div class="pb-soc3-skeleton-header"></div>
    <div class="pb-soc3-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-soc3-skeleton-card"></div>
    </div>
  </div>
</template>
