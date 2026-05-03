<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics5Data } from "~/types/page-builder/statistics-types/statistics-5";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-5"
    : "/api/page-builder/statistics-components/statistics-5/en",
);

const { data: statsData, pending, error } = useFetch<Statistics5Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat5-container"
    :dir="props.dir"
  >
    <div class="pb-stat5-wrapper">
      <div class="pb-stat5-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat5-card"
          :dir="props.dir"
        >
          <div class="pb-stat5-header">
            <!-- Text Info (Start) -->
            <div class="pb-stat5-info">
              <h3 class="pb-stat5-value-wrapper" dir="ltr">
                <span class="pb-stat5-value">{{ item.value }}</span>
                <span v-if="item.suffix" class="pb-stat5-suffix">{{ item.suffix }}</span>
              </h3>
              <p class="pb-stat5-label">{{ item.label }}</p>
            </div>
            <!-- Percentage (End) -->
            <div class="pb-stat5-percent">{{ item.percentage }}%</div>
          </div>

          <!-- Progress Bar -->
          <div class="pb-stat5-progress-track">
            <div
              class="pb-stat5-progress-fill"
              :class="item.colorClass"
              :style="{ width: `${item.percentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat5-loading">
    <div class="pb-stat5-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat5-skeleton-card"></div>
    </div>
  </div>
</template>
