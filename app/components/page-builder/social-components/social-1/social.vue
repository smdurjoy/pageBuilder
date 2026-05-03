<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Social1Data } from "~/types/page-builder/social-types/social-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/social-components/social-1"
    : "/api/page-builder/social-components/social-1/en",
);

const { data: socialData, pending, error } = useFetch<Social1Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && socialData"
    class="pb-soc1-container"
    :dir="props.dir"
  >
    <div class="pb-soc1-wrapper">
      <!-- Header -->
      <div class="pb-soc1-header">
        <h2 class="pb-soc1-title">{{ socialData.title }}</h2>
        <p class="pb-soc1-desc">{{ socialData.description }}</p>
      </div>

      <!-- Social Cards Grid -->
      <div class="pb-soc1-grid">
        <a
          v-for="(item, idx) in socialData.items"
          :key="idx"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="pb-soc1-card"
        >
          <div class="pb-soc1-icon-wrapper">
            <img :src="item.icon" :alt="item.name" class="pb-soc1-icon" />
          </div>
          <span class="pb-soc1-name">{{ item.name }}</span>
          <span class="pb-soc1-followers" :style="{ color: item.color }">{{ item.followers }}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-soc1-loading">
    <div class="pb-soc1-skeleton-header"></div>
    <div class="pb-soc1-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-soc1-skeleton-card"></div>
    </div>
  </div>
</template>
