<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { Hero6Data } from "~/types/page-builder/heros-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/hero-6"
    : "/api/page-builder/hero-6/en";
});

const { data: heroData, pending, error } = useFetch<Hero6Data>(endpoint);

const isRtl = computed(() => props.dir === "rtl");
</script>

<template>
  <section
    v-if="!pending && !error && heroData"
    class="pb-hero6-section"
    :dir="props.dir"
  >
    <!-- Navbar -->
    <header class="pb-hero6-header">
      <div class="pb-hero6-navbar-container">
        <div class="flex items-center">
          <a href="/" class="pb-hero6-logo">{{ heroData.navbar.logoText }}</a>
        </div>

        <nav class="pb-hero6-nav">
          <a
            v-for="(menu, index) in heroData.navbar.menus"
            :key="index"
            :href="menu.link"
            :class="[
              'pb-hero6-menu-item',
              index === 0
                ? 'pb-hero6-menu-item-active'
                : 'pb-hero6-menu-item-default',
            ]"
          >
            <div v-if="index === 0" class="pb-hero6-active-dot"></div>
            {{ menu.title }}
          </a>
        </nav>

        <div class="pb-hero6-navbar-actions">
          <button class="pb-hero6-navbar-btn">
            <img
              :src="heroData.navbar.profileIcon"
              alt="Profile"
              class="pb-hero6-navbar-icon"
            />
          </button>
          <button class="pb-hero6-navbar-btn">
            <img
              :src="heroData.navbar.langIcon"
              alt="Language"
              class="pb-hero6-navbar-icon"
            />
          </button>
          <a :href="heroData.navbar.actionLink" class="pb-hero6-navbar-action">
            {{ heroData.navbar.actionText }}
          </a>
        </div>
      </div>
    </header>

    <!-- Two-column content -->
    <div class="pb-hero6-content">
      <!-- Image column (Left for RTL, Right for LTR) -->
      <div v-if="isRtl" class="pb-hero6-image-col">
        <div class="pb-hero6-phones-wrapper">
          <div class="pb-hero6-phone-card">
            <img
              :src="heroData.content.images[0]"
              alt="Phone"
              class="pb-hero6-phone-img"
            />
          </div>
        </div>
      </div>

      <!-- Text column -->
      <div class="pb-hero6-text-col">
        <h1 class="pb-hero6-title">{{ heroData.content.title }}</h1>
        <p class="pb-hero6-desc">{{ heroData.content.description }}</p>
        <div class="pb-hero6-store-buttons">
          <a :href="heroData.content.appStoreLink" class="pb-hero6-store-btn">
            <img
              :src="heroData.content.appStoreIcon"
              alt="App Store"
              class="pb-hero6-store-icon"
            />
            <div class="pb-hero6-store-info">
              <span class="pb-hero6-store-tag">Download on the</span>
              <span class="pb-hero6-store-name">App Store</span>
            </div>
          </a>
          <a :href="heroData.content.playStoreLink" class="pb-hero6-store-btn">
            <img
              :src="heroData.content.playStoreIcon"
              alt="Play Store"
              class="pb-hero6-store-icon"
            />
            <div class="pb-hero6-store-info">
              <span class="pb-hero6-store-tag">GET IT ON</span>
              <span class="pb-hero6-store-name">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Image column (Right for LTR) -->
      <div v-if="!isRtl" class="pb-hero6-image-col">
        <div class="pb-hero6-phones-wrapper">
          <div class="pb-hero6-phone-card">
            <img
              :src="heroData.content.images[0]"
              :alt="`Phone`"
              class="pb-hero6-phone-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pb-hero6-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #071d39;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pb-hero6-header {
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
  z-index: 50;
}

.pb-hero6-navbar-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .pb-hero6-navbar-container {
    padding: 0 2rem 1rem;
  }
}

.pb-hero6-logo {
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

.pb-hero6-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .pb-hero6-nav {
    display: flex;
  }
}

.pb-hero6-menu-item {
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s;
}

.pb-hero6-menu-item-active {
  color: #ffffff;
}

.pb-hero6-active-dot {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
}

.pb-hero6-navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pb-hero6-navbar-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pb-hero6-navbar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.pb-hero6-navbar-action {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.3s;
}

.pb-hero6-navbar-action:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Content Layout */
.pb-hero6-content {
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 4rem 1rem;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .pb-hero6-content {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
  }

  [dir="rtl"] .pb-hero6-content {
    flex-direction: row-reverse;
  }
}

.pb-hero6-text-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width: 1024px) {
  .pb-hero6-text-col {
    flex: 0.8;
    align-items: flex-start;
    text-align: start;
  }

  [dir="rtl"] .pb-hero6-text-col {
    align-items: flex-end;
    text-align: end;
  }
}

.pb-hero6-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

@media (min-width: 1024px) {
  .pb-hero6-title {
    font-size: 4rem;
  }
}

.pb-hero6-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
  max-width: 500px;
  line-height: 1.6;
}

.pb-hero6-store-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 1024px) {
  .pb-hero6-store-buttons {
    justify-content: flex-start;
  }
}

.pb-hero6-store-btn {
  display: flex;
  align-items: center;
  background: #0d2645;
  border-radius: 12px;
  padding: 0.6rem 1.25rem;
  text-decoration: none;
  color: #ffffff;
  transition:
    transform 0.3s,
    background 0.3s;
  min-width: 180px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pb-hero6-store-btn:hover {
  transform: translateY(-3px);
  background: #143154;
}

.pb-hero6-store-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  margin-right: 12px;
}

[dir="rtl"] .pb-hero6-store-icon {
  margin-right: 0;
  margin-left: 12px;
}

.pb-hero6-store-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.pb-hero6-store-tag {
  font-size: 0.65rem;
  font-weight: 400;
  opacity: 0.8;
}

.pb-hero6-store-name {
  font-size: 1.125rem;
  font-weight: 600;
}

/* Phone Images */
.pb-hero6-image-col {
  flex: 1.2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .pb-hero6-image-col {
    justify-content: flex-start;
    padding-left: 2rem;
  }
}

.pb-hero6-phone-card {
  width: 100%;
  max-width: 320px;
  overflow: hidden;
}

.pb-hero6-image-col {
  justify-content: flex-end;
}

@media (min-width: 640px) {
  .pb-hero6-phone-card {
    max-width: 420px;
  }
}

@media (max-width: 576px) {
  .pb-hero6-image-col {
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .pb-hero6-phone-card {
    max-width: 550px;
  }
}

.pb-hero6-phone-img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
