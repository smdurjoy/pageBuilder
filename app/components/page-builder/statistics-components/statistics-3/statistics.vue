<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics3Data } from "~/types/page-builder/statistics-types/statistics-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-3"
    : "/api/page-builder/statistics-components/statistics-3/en",
);

const { data: statsData, pending, error } = useFetch<Statistics3Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat3-container"
    :dir="props.dir"
  >
    <div class="pb-stat3-wrapper">
      <div class="pb-stat3-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat3-card"
          :dir="props.dir"
        >
          <div class="pb-stat3-icon-wrapper" :class="item.iconBgColor">
            <img :src="item.icon" alt="" class="pb-stat3-icon" />
          </div>
          
          <h3 class="pb-stat3-value-wrapper">
            <span class="pb-stat3-value">{{ item.value }}</span>
            <span v-if="item.suffix" class="pb-stat3-suffix">{{ item.suffix }}</span>
          </h3>
          <p class="pb-stat3-label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat3-loading">
    <div class="pb-stat3-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat3-skeleton-card"></div>
    </div>
  </div>
</template>
