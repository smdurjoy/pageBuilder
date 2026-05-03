<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics4Data } from "~/types/page-builder/statistics-types/statistics-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-4"
    : "/api/page-builder/statistics-components/statistics-4/en",
);

const { data: statsData, pending, error } = useFetch<Statistics4Data>(endpoint);

const backgroundStyle = computed(() => {
  if (!statsData.value?.backgroundImage) return {};
  return {
    backgroundImage: `url(${statsData.value.backgroundImage})`,
  };
});
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat4-container"
    :dir="props.dir"
    :style="backgroundStyle"
  >
    <div class="pb-stat4-overlay"></div>
    <div class="pb-stat4-wrapper">
      <div class="pb-stat4-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat4-card"
          :dir="props.dir"
        >
          <div class="pb-stat4-content">
            <h3 class="pb-stat4-value-wrapper">
              <span class="pb-stat4-value">{{ item.value }}</span>
              <span v-if="item.suffix" class="pb-stat4-suffix">{{ item.suffix }}</span>
            </h3>
            <p class="pb-stat4-label">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat4-loading">
    <div class="pb-stat4-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat4-skeleton-card"></div>
    </div>
  </div>
</template>
