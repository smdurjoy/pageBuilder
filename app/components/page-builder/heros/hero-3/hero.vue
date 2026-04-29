<script setup lang="ts">
import { useFetch } from "#app";
import { computed, ref } from "vue";
import type { Hero3Data } from "~/types/page-builder/heros-3";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/hero-components/hero-3"
    : "/api/page-builder/hero-components/hero-3/en";
});

const { data: heroData, pending, error } = useFetch<Hero3Data>(endpoint);

const isRtl = computed(() => props.dir === "rtl");

/* ── Gallery pagination ── */
const currentPage = ref(0);
const totalPages = computed(() => heroData.value?.gallery.length ?? 0);

function goToPage(index: number) {
  currentPage.value = index;
}
</script>

<template>
  <section
    v-if="!pending && !error && heroData"
    class="pb-hero3-section"
    :dir="props.dir"
  >
    <!-- Navbar -->
    <header class="pb-hero-header">
      <div class="pb-hero-navbar-container">
        <div class="flex items-center">
          <a href="/" class="pb-hero-logo">{{ heroData.navbar.logoText }}</a>
        </div>

        <nav class="pb-hero-nav">
          <a
            v-for="(menu, index) in heroData.navbar.menus"
            :key="index"
            :href="menu.link"
            :class="[
              'pb-hero-menu-item',
              index === 0
                ? 'pb-hero-menu-item-active'
                : 'pb-hero-menu-item-default',
            ]"
          >
            <div v-if="index === 0" class="pb-hero-active-dot"></div>
            {{ menu.title }}
          </a>
        </nav>

        <div class="pb-hero-navbar-actions">
          <button class="pb-hero-navbar-btn">
            <img
              :src="heroData.navbar.profileIcon"
              alt="Profile"
              class="pb-hero-navbar-icon"
            />
          </button>
          <button class="pb-hero-navbar-btn">
            <img
              :src="heroData.navbar.langIcon"
              alt="Language"
              class="pb-hero-navbar-icon"
            />
          </button>
          <a :href="heroData.navbar.actionLink" class="pb-hero-navbar-action">
            {{ heroData.navbar.actionText }}
          </a>
        </div>
      </div>
    </header>

    <!-- Centered text content -->
    <div class="pb-hero3-text-area">
      <h1 class="pb-hero3-title">{{ heroData.content.title }}</h1>
      <p class="pb-hero3-desc">
        "{{ heroData.content.description }}"
      </p>
      <div class="pb-hero3-buttons" :class="{ 'pb-hero3-buttons-rtl': isRtl }">
        <a
          :href="heroData.content.primaryButtonLink"
          class="pb-hero-btn-primary"
        >
          {{ heroData.content.primaryButtonText }}
        </a>
        <a
          :href="heroData.content.secondaryButtonLink"
          class="pb-hero3-btn-secondary"
        >
          {{ heroData.content.secondaryButtonText }}
        </a>
      </div>
    </div>

    <!-- Gallery cards -->
    <div class="pb-hero3-gallery">
      <div
        v-for="(item, index) in heroData.gallery"
        :key="index"
        class="pb-hero3-gallery-card"
      >
        <img :src="item.src" :alt="item.alt" class="pb-hero3-gallery-img" />
      </div>
    </div>

    <!-- Pagination dots -->
    <div class="pb-hero3-dots">
      <button
        v-for="(_, index) in heroData.gallery"
        :key="index"
        :class="[
          'pb-hero3-dot',
          currentPage === index ? 'pb-hero3-dot-active' : '',
        ]"
        @click="goToPage(index)"
      ></button>
    </div>
  </section>
</template>
