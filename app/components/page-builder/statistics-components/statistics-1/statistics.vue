<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics1Data } from "~/types/page-builder/statistics-types/statistics-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-1"
    : "/api/page-builder/statistics-components/statistics-1/en",
);

const { data: statsData, pending, error } = useFetch<Statistics1Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat1-container"
    :dir="props.dir"
  >
    <div class="pb-stat1-wrapper">
      <div class="pb-stat1-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat1-item"
          :dir="props.dir"
        >
          <h3 class="pb-stat1-value-wrapper">
            <span v-if="item.suffix" class="pb-stat1-suffix">{{ item.suffix }}</span>
            <span class="pb-stat1-value">{{ item.value }}</span>
          </h3>
          <p class="pb-stat1-label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat1-loading">
    <div class="pb-stat1-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat1-skeleton-item"></div>
    </div>
  </div>
</template>
