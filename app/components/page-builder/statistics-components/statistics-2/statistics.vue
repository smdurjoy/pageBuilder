<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics2Data } from "~/types/page-builder/statistics-types/statistics-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-2"
    : "/api/page-builder/statistics-components/statistics-2/en",
);

const { data: statsData, pending, error } = useFetch<Statistics2Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat2-container"
    :dir="props.dir"
  >
    <div class="pb-stat2-wrapper">
      <div class="pb-stat2-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat2-card"
          :class="item.gradientClass"
          :dir="props.dir"
        >
          <div class="pb-stat2-content">
            <h3 class="pb-stat2-value-wrapper">
              <span class="pb-stat2-value">{{ item.value }}</span>
              <span v-if="item.suffix" class="pb-stat2-suffix">{{ item.suffix }}</span>
            </h3>
            <p class="pb-stat2-label">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat2-loading">
    <div class="pb-stat2-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat2-skeleton-card"></div>
    </div>
  </div>
</template>
