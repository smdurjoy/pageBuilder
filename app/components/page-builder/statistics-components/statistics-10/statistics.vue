<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics10Data } from "~/types/page-builder/statistics-types/statistics-10";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-10"
    : "/api/page-builder/statistics-components/statistics-10/en",
);

const { data: statsData, pending, error } = useFetch<Statistics10Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat10-container"
    :dir="props.dir"
  >
    <div class="pb-stat10-wrapper">
      <div class="pb-stat10-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat10-card"
          :dir="props.dir"
        >
          <div class="pb-stat10-header">
            <!-- Text Info (Right in RTL, Left in LTR) -->
            <div class="pb-stat10-info">
              <h3 class="pb-stat10-value-wrapper" dir="ltr">
                <span class="pb-stat10-value">{{ item.value }}</span>
                <span v-if="item.suffix" class="pb-stat10-suffix">{{ item.suffix }}</span>
              </h3>
              <p class="pb-stat10-label">{{ item.label }}</p>
            </div>
            <!-- Percentage (Left in RTL, Right in LTR) -->
            <div class="pb-stat10-percent">{{ item.percentage }}%</div>
          </div>

          <!-- Progress Bar -->
          <div class="pb-stat10-progress-track">
            <div
              class="pb-stat10-progress-fill"
              :style="{ width: `${item.percentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat10-loading">
    <div class="pb-stat10-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat10-skeleton-card"></div>
    </div>
  </div>
</template>
