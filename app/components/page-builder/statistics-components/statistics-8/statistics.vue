<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Statistics8Data } from "~/types/page-builder/statistics-types/statistics-8";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/statistics-components/statistics-8"
    : "/api/page-builder/statistics-components/statistics-8/en",
);

const { data: statsData, pending, error } = useFetch<Statistics8Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && statsData"
    class="pb-stat8-container"
    :dir="props.dir"
  >
    <div class="pb-stat8-wrapper">
      <div class="pb-stat8-grid" dir="ltr">
        <div
          v-for="(item, idx) in statsData.items"
          :key="idx"
          class="pb-stat8-card"
          :dir="props.dir"
        >
          <div class="pb-stat8-icon-wrapper">
            <img :src="item.icon" alt="" class="pb-stat8-icon" />
          </div>
          
          <h3 class="pb-stat8-value-wrapper" dir="ltr">
            <span class="pb-stat8-value">{{ item.value }}</span>
            <span v-if="item.suffix" class="pb-stat8-suffix">{{ item.suffix }}</span>
          </h3>
          <p class="pb-stat8-label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-stat8-loading">
    <div class="pb-stat8-skeleton-grid">
      <div v-for="i in 4" :key="i" class="pb-stat8-skeleton-card"></div>
    </div>
  </div>
</template>
