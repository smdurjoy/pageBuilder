<script setup lang="ts">
import type { TACResponse } from "~/types/tac";

const props = defineProps<{
  data: TACResponse;
}>();

const datePart = computed(() => {
  if (!props.data?.details?.c1) return "";
  const index = props.data.details.c1.indexOf("يرجى");
  return index !== -1
    ? props.data.details.c1.substring(0, index).trim()
    : props.data.details.c1;
});

const introPart = computed(() => {
  if (!props.data?.details?.c1) return "";
  const index = props.data.details.c1.indexOf("يرجى");
  return index !== -1 ? props.data.details.c1.substring(index).trim() : "";
});
</script>

<template>
  <section
    v-if="data?.details"
    class="w-full pb-16 pt-8 px-4 sm:px-6 lg:px-8 bg-white"
  >
    <div class="container mx-auto space-y-12 text-start">
      <!-- Date and Introduction Section -->
      <div class="space-y-6">
        <p v-if="datePart" class="text-gray-500 text-sm font-semibold">
          {{ datePart }}
        </p>
        <p
          v-if="introPart"
          class="text-gray-700 text-base leading-[1.8] font-medium"
        >
          {{ introPart }}
        </p>
        <p class="text-gray-700 text-base leading-[1.8] font-medium">
          {{ data.details.c2 }}
        </p>
      </div>

      <!-- Numbered Sections -->
      <div class="space-y-12">
        <div
          v-for="(point, index) in data.details.points"
          :key="index"
          class="space-y-4"
        >
          <h2
            class="text-xl sm:text-2xl font-extrabold text-navy leading-tight"
          >
            {{ point.title }}
          </h2>
          <p
            class="text-gray-700 leading-[1.8] text-base sm:text-lg font-medium"
          >
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>
