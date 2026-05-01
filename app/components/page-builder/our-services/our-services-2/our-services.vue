<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { OurServices2Data } from "~/types/page-builder/our-services-types/our-services-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/our-services-components/our-services-2"
    : "/api/page-builder/our-services-components/our-services-2/en";
});

const {
  data: servicesData,
  pending,
  error,
} = useFetch<OurServices2Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && servicesData"
    class="pb-os2-section"
    :dir="props.dir"
  >
    <!-- Section Header -->
    <div class="pb-os2-header">
      <h2 class="pb-os2-title">{{ servicesData.section.title }}</h2>
      <p class="pb-os2-subtitle">{{ servicesData.section.subtitle }}</p>
    </div>

    <!-- Services List -->
    <div class="pb-os2-list">
      <article
        v-for="(service, index) in servicesData.services"
        :key="index"
        class="pb-os2-row"
      >
        <!-- Icon -->
        <div class="pb-os2-icon-wrap">
          <img :src="service.icon" :alt="service.title" class="pb-os2-icon" />
        </div>

        <!-- Content -->
        <div class="pb-os2-content">
          <h3 class="pb-os2-card-title">{{ service.title }}</h3>
          <p class="pb-os2-card-desc">{{ service.description }}</p>
          <!-- Feature bullets -->
          <ul class="pb-os2-features">
            <li
              v-for="(feat, fi) in service.features"
              :key="fi"
              class="pb-os2-feature-item"
            >
              <span class="pb-os2-check" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="7"
                    fill="#20d066"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M4 7l2 2 4-4"
                    stroke="#20d066"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {{ feat }}
            </li>
          </ul>
        </div>

        <!-- CTA Button -->
        <a :href="service.linkHref" class="pb-os2-btn">
          {{ service.linkText }}
        </a>
      </article>
    </div>
  </section>

  <!-- Loading skeleton -->
  <div v-else-if="pending" class="pb-os2-loading">
    <div v-for="i in 6" :key="i" class="pb-os2-skeleton"></div>
  </div>
</template>
