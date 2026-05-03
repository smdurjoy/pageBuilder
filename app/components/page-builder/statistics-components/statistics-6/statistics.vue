<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics6Data } from "~/types/page-builder/statistics-types/statistics-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-6"
    : "/api/page-builder/statistics-components/statistics-6/en",
);

const { data: statsData, pending, error } = useFetch<Statistics6Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat6-container"
    :dir="props.dir"
  >
    <div class="pb-stat6-wrapper">
      <div class="pb-stat6-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat6-item"
          :dir="props.dir"
        >
          <h3 class="pb-stat6-value-wrapper" dir="ltr">
            <span class="pb-stat6-value">{{ item.value }}</span>
            <span v-if="item.suffix" class="pb-stat6-suffix">{{ item.suffix }}</span>
          </h3>
          <p class="pb-stat6-label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat6-loading">
    <div class="pb-stat6-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat6-skeleton-card"></div>
    </div>
  </div>
</template>
