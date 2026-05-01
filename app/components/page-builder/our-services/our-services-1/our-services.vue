<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { OurServicesData } from "~/types/page-builder/our-services-types/our-services";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/our-services-components/our-services"
    : "/api/page-builder/our-services-components/our-services/en";
});

const { data: servicesData, pending, error } = useFetch<OurServicesData>(endpoint);

const arrowChar = computed(() => (props.dir === "rtl" ? "←" : "→"));
</script>

<template>
  <section
    v-if="!pending && !error && servicesData"
    class="pb-os-section"
    :dir="props.dir"
  >
    <!-- Section Header -->
    <div class="pb-os-header">
      <h2 class="pb-os-title">{{ servicesData.section.title }}</h2>
      <p class="pb-os-subtitle">{{ servicesData.section.subtitle }}</p>
    </div>

    <!-- Services Grid -->
    <div class="pb-os-grid">
      <article
        v-for="(service, index) in servicesData.services"
        :key="index"
        class="pb-os-card"
      >
        <!-- Icon -->
        <div class="pb-os-card-icon-wrap">
          <img
            :src="service.icon"
            :alt="service.title"
            class="pb-os-card-icon"
          />
        </div>

        <!-- Content -->
        <div class="pb-os-card-body">
          <h3 class="pb-os-card-title">{{ service.title }}</h3>
          <p class="pb-os-card-desc">{{ service.description }}</p>
        </div>

        <!-- Link -->
        <a :href="service.linkHref" class="pb-os-card-link">
          {{ service.linkText }}
          <span class="pb-os-card-arrow" aria-hidden="true">{{ arrowChar }}</span>
        </a>
      </article>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-os-loading">
    <div
      v-for="i in 6"
      :key="i"
      class="pb-os-skeleton"
    ></div>
  </div>
</template>
