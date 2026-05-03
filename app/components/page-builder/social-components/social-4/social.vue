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
    ? "/api/page-builder/social-components/social-4"
    : "/api/page-builder/social-components/social-4/en",
);

const { data: socialData, pending, error } = useFetch<Social3Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && socialData"
    class="pb-soc4-container"
    :dir="props.dir"
  >
    <div class="pb-soc4-wrapper">
      <!-- Centered Header -->
      <div class="pb-soc4-header">
        <h2 class="pb-soc4-title">{{ socialData.title }}</h2>
        <p class="pb-soc4-desc">{{ socialData.description }}</p>
      </div>

      <!-- Social Cards Grid -->
      <div class="pb-soc4-grid">
        <div
          v-for="(item, idx) in socialData.items"
          :key="idx"
          class="pb-soc4-card"
        >
          <div class="pb-soc4-icon-wrapper">
            <img :src="item.icon" :alt="item.name" class="pb-soc4-icon" />
          </div>
          <span class="pb-soc4-name">{{ item.name }}</span>
          <span class="pb-soc4-followers" :style="{ color: item.color }">{{ item.followers }}</span>
          <p class="pb-soc4-card-desc">{{ item.description }}</p>
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="pb-soc4-btn"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <div v-else-if="pending" class="pb-soc4-loading">
    <div class="pb-soc4-skeleton-header"></div>
    <div class="pb-soc4-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-soc4-skeleton-card"></div>
    </div>
  </div>
</template>
