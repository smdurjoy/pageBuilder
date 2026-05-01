<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { OurServices5Data } from "~/types/page-builder/our-services-types/our-services-5";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/our-services-components/our-services-5"
    : "/api/page-builder/our-services-components/our-services-5/en";
});

const {
  data: servicesData,
  pending,
  error,
} = useFetch<OurServices5Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && servicesData"
    class="pb-os5-section"
    :dir="props.dir"
  >
    <!-- Section Header -->
    <div class="pb-os5-header">
      <h2 class="pb-os5-title">{{ servicesData.section.title }}</h2>
      <p class="pb-os5-subtitle">{{ servicesData.section.subtitle }}</p>
    </div>

    <!-- 3-column grid -->
    <div class="pb-os5-grid">
      <article
        v-for="(service, index) in servicesData.services"
        :key="index"
        class="pb-os5-card"
      >
        <!-- Image with icon badge -->
        <div class="pb-os5-img-wrap">
          <img :src="service.image" :alt="service.title" class="pb-os5-img" />
          <!-- Icon badge overlapping bottom-inline-end corner of image -->
          <div class="pb-os5-icon-badge">
            <img :src="service.icon" :alt="service.title" class="pb-os5-icon" />
          </div>
        </div>

        <!-- Content -->
        <div class="pb-os5-content">
          <h3 class="pb-os5-card-title">{{ service.title }}</h3>
          <p class="pb-os5-card-desc">{{ service.description }}</p>
        </div>

        <!-- Full-width dark button -->
        <a :href="service.linkHref" class="pb-os5-btn">
          {{ service.linkText }}
        </a>
      </article>
    </div>
  </section>

  <!-- Loading skeleton -->
  <div v-else-if="pending" class="pb-os5-loading">
    <div v-for="i in 6" :key="i" class="pb-os5-skeleton"></div>
  </div>
</template>
