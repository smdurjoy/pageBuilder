<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Hero2Data } from "~/types/page-builder/heros-2";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/hero-components/hero-2"
    : "/api/page-builder/hero-components/hero-2/en";
});

const { data: heroData, pending, error } = useFetch<Hero2Data>(endpoint);

const isRtl = computed(() => props.dir === "rtl");
</script>

<template>
  <section
    v-if="!pending && !error && heroData"
    class="pb-hero2-section"
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

    <!-- Two-column content -->
    <div class="pb-hero2-content">
      <!--
        DOM order determines visual position under flex-direction: row.
        RTL: image first → LEFT | text second → RIGHT
        LTR: text first → LEFT | image second → RIGHT
      -->

      <!-- Image LEFT for Arabic (RTL) -->
      <div v-if="isRtl" class="pb-hero2-image-col">
        <div class="pb-hero2-image-card">
          <img
            :src="heroData.content.image"
            alt="Hero"
            class="pb-hero2-image"
          />
        </div>
      </div>

      <!-- Text column -->
      <div class="pb-hero2-text-col">
        <h1 class="pb-hero2-title">{{ heroData.content.title }}</h1>
        <p class="pb-hero2-desc">"{{ heroData.content.description }}"</p>
        <div class="pb-hero2-buttons">
          <a
            :href="heroData.content.primaryButtonLink"
            class="pb-hero-btn-primary"
          >
            {{ heroData.content.primaryButtonText }}
          </a>
          <a
            :href="heroData.content.secondaryButtonLink"
            class="pb-hero-btn-secondary"
          >
            {{ heroData.content.secondaryButtonText }}
          </a>
        </div>
      </div>

      <!-- Image RIGHT for English (LTR) -->
      <div v-if="!isRtl" class="pb-hero2-image-col">
        <div class="pb-hero2-image-card">
          <img
            :src="heroData.content.image"
            alt="Hero"
            class="pb-hero2-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
