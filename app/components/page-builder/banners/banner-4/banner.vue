<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { BannerData } from "~/types/page-builder/banner-types/banner-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/banner-components/banner-4"
    : "/api/page-builder/banner-components/banner-4/en",
);

const { data: bannerData, pending, error } = useFetch<BannerData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bannerData"
    class="pb-b4-container"
    :dir="props.dir"
  >
    <div class="pb-b4-wrapper">
      <!-- Header -->
      <div class="pb-b4-header">
        <h2 class="pb-b4-header-title">{{ bannerData.header.title }}</h2>
        <p class="pb-b4-header-subtitle">{{ bannerData.header.subtitle }}</p>
      </div>

      <!-- Masonry Grid -->
      <div class="pb-b4-grid">
        <!-- Stacked Cards (First in HTML -> Right in RTL, Left in LTR) -->
        <div class="pb-b4-col-stack">
          <div
            v-for="(card, idx) in bannerData.cards.slice(1)"
            :key="card.id"
            class="pb-b4-card pb-b4-card-small shadow-xl"
          >
            <img :src="card.image" :alt="card.title" class="pb-b4-img" />
            <div class="pb-b4-overlay">
              <div class="pb-b4-content">
                <h3 class="pb-b4-title">{{ card.title }}</h3>
                <a :href="card.cta.href" class="pb-b4-cta">
                  {{ card.cta.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Tall Card (Second in HTML -> Left in RTL, Right in LTR) -->
        <div class="pb-b4-col-tall">
          <div v-if="bannerData.cards[0]" class="pb-b4-card pb-b4-card-tall shadow-xl">
            <img :src="bannerData.cards[0].image" :alt="bannerData.cards[0].title" class="pb-b4-img" />
            <div class="pb-b4-overlay">
              <div class="pb-b4-content">
                <h3 class="pb-b4-title">{{ bannerData.cards[0].title }}</h3>
                <a :href="bannerData.cards[0].cta.href" class="pb-b4-cta">
                  {{ bannerData.cards[0].cta.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-b4-loading">
    <div class="pb-b4-wrapper">
      <div class="pb-b4-skeleton-header"></div>
      <div class="pb-b4-skeleton-grid"></div>
    </div>
  </div>
</template>
