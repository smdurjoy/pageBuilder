<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { OurServices3Data } from "~/types/page-builder/our-services-types/our-services-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/our-services-components/our-services-3"
    : "/api/page-builder/our-services-components/our-services-3/en";
});

const {
  data: servicesData,
  pending,
  error,
} = useFetch<OurServices3Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && servicesData"
    class="pb-os3-section"
    :dir="props.dir"
  >
    <!-- Section Header -->
    <div class="pb-os3-header">
      <h2 class="pb-os3-title">{{ servicesData.section.title }}</h2>
      <p class="pb-os3-subtitle">{{ servicesData.section.subtitle }}</p>
    </div>

    <!-- Services Grid -->
    <div class="pb-os3-grid">
      <article
        v-for="(service, index) in servicesData.services"
        :key="index"
        class="pb-os3-card"
        :style="{ backgroundColor: service.bgColor }"
      >
        <!-- Icon — top corner, colored box -->
        <div
          class="pb-os3-icon-wrap"
          :style="{ backgroundColor: service.iconBgColor }"
        >
          <img
            :src="service.icon"
            :alt="service.title"
            class="pb-os3-icon"
          />
        </div>

        <!-- Content -->
        <div class="pb-os3-content">
          <h3 class="pb-os3-card-title">{{ service.title }}</h3>
          <p class="pb-os3-card-desc">{{ service.description }}</p>
        </div>

        <!-- Full-width CTA button -->
        <a
          :href="service.linkHref"
          class="pb-os3-btn"
          :style="{
            backgroundColor: service.btnColor,
            color: service.btnTextColor,
          }"
        >
          {{ service.linkText }}
        </a>
      </article>
    </div>
  </section>

  <!-- Loading skeleton -->
  <div v-else-if="pending" class="pb-os3-loading">
    <div v-for="i in 6" :key="i" class="pb-os3-skeleton"></div>
  </div>
</template>
