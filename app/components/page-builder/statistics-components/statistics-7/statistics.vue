<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics7Data } from "~/types/page-builder/statistics-types/statistics-7";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-7"
    : "/api/page-builder/statistics-components/statistics-7/en",
);

const { data: statsData, pending, error } = useFetch<Statistics7Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat7-container"
    :dir="props.dir"
  >
    <div class="pb-stat7-wrapper">
      <div class="pb-stat7-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat7-card"
          :class="item.bgClass"
          :dir="props.dir"
        >
          <div class="pb-stat7-content">
            <h3 class="pb-stat7-value-wrapper" dir="ltr">
              <span class="pb-stat7-value">{{ item.value }}</span>
              <span v-if="item.suffix" class="pb-stat7-suffix">{{ item.suffix }}</span>
            </h3>
            <p class="pb-stat7-label">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat7-loading">
    <div class="pb-stat7-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat7-skeleton-card"></div>
    </div>
  </div>
</template>
