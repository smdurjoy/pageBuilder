<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { OurServices4Data } from "~/types/page-builder/our-services-types/our-services-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/our-services-components/our-services-4"
    : "/api/page-builder/our-services-components/our-services-4/en";
});

const {
  data: servicesData,
  pending,
  error,
} = useFetch<OurServices4Data>(endpoint);

const arrowChar = computed(() => (props.dir === "rtl" ? "←" : "→"));
</script>

<template>
  <section
    v-if="!pending && !error && servicesData"
    class="pb-os4-section"
    :dir="props.dir"
  >
    <!-- Section Header -->
    <div class="pb-os4-header">
      <h2 class="pb-os4-title">{{ servicesData.section.title }}</h2>
      <p class="pb-os4-subtitle">{{ servicesData.section.subtitle }}</p>
    </div>

    <!-- 2-column grid -->
    <div class="pb-os4-grid">
      <article
        v-for="(service, index) in servicesData.services"
        :key="index"
        class="pb-os4-card"
      >
        <!-- Number badge — overlaps top corner -->
        <div class="pb-os4-badge">{{ service.number }}</div>

        <!-- Icon + Content row -->
        <div class="pb-os4-row">
          <!-- Icon box -->
          <div class="pb-os4-icon-wrap">
            <img
              :src="service.icon"
              :alt="service.title"
              class="pb-os4-icon"
            />
          </div>

          <!-- Content -->
          <div class="pb-os4-content">
            <h3 class="pb-os4-card-title">{{ service.title }}</h3>
            <p class="pb-os4-card-desc">{{ service.description }}</p>
            <!-- Link -->
            <a :href="service.linkHref" class="pb-os4-link">
              {{ service.linkText }}
              <span aria-hidden="true">{{ arrowChar }}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!-- Loading skeleton -->
  <div v-else-if="pending" class="pb-os4-loading">
    <div v-for="i in 6" :key="i" class="pb-os4-skeleton"></div>
  </div>
</template>
