<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import BaseCarousel from "~/components/page-builder/BaseCarousel.vue";
import type { HeroData } from "~/types/page-builder/heros";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/hero"
    : "/api/page-builder/hero/en";
});

const { data: heroData, pending, error } = useFetch<HeroData>(endpoint);

const slides = [1, 2, 3]; // To demonstrate the carousel
</script>

<template>
  <section
    v-if="!pending && !error && heroData"
    class="pb-hero-section"
    :dir="props.dir"
  >
    <!-- Background Image -->
    <div class="pb-hero-bg-wrapper">
      <img
        :src="heroData.content.backgroundImage"
        alt="Background"
        class="pb-hero-bg-image"
      />
      <div class="pb-hero-bg-overlay"></div>
    </div>

    <div class="pb-hero-content-wrapper">
      <!-- Navbar inside Hero -->
      <header class="pb-hero-header">
        <div class="pb-hero-navbar-container">
          <!-- Logo (First in DOM -> Right in RTL, Left in LTR) -->
          <div class="flex items-center">
            <a href="/" class="pb-hero-logo">
              {{ heroData.navbar.logoText }}
            </a>
          </div>

          <!-- Menus (Absolute for perfect centering) -->
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
              <!-- Active Dot -->
              <div
                v-if="index === 0"
                class="pb-hero-active-dot"
              ></div>
              {{ menu.title }}
            </a>
          </nav>

          <!-- Actions (Last in DOM -> Left in RTL, Right in LTR) -->
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
            <a
              :href="heroData.navbar.actionLink"
              class="pb-hero-navbar-action"
            >
              {{ heroData.navbar.actionText }}
            </a>
          </div>
        </div>
      </header>

      <!-- Main Content with Carousel -->
      <div class="pb-hero-carousel-wrapper">
        <BaseCarousel
          :items="slides"
          :dir="props.dir"
          prevIcon="/page-builder/heros-icons/Left Arrow.png"
          nextIcon="/page-builder/heros-icons/Right Arrow.png"
        >
          <template #default="{ item, index }">
            <div class="pb-hero-slide-content">
              <h1
                class="pb-hero-title"
                :class="
                  props.dir === 'rtl' ? 'pb-hero-title-rtl' : 'pb-hero-title-ltr'
                "
              >
                {{ heroData.content.title }}
              </h1>
              <p class="pb-hero-desc">
                "{{ heroData.content.description }}"
              </p>
              <div class="pb-hero-buttons-row">
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
          </template>
        </BaseCarousel>
      </div>

      <!-- Bottom Floating Box -->
      <div class="pb-hero-bottom-wrapper">
        <div class="pb-hero-bottom-container">
          <h3 class="pb-hero-bottom-title font-arabic">
            {{ heroData.bottomBox.title }}
          </h3>

          <div class="relative w-full">
            <!-- Desktop Step Line -->
            <div
              class="pb-hero-step-line-desktop"
              :style="{ 
                left: (100 / (heroData.bottomBox.steps.length * 2)) + '%', 
                right: (100 / (heroData.bottomBox.steps.length * 2)) + '%' 
              }"
            ></div>

            <div class="pb-hero-steps-row">
              <!-- Steps -->
              <div
                v-for="(step, index) in heroData.bottomBox.steps"
                :key="index"
                class="pb-hero-step-item"
              >
                <!-- Mobile Vertical Line -->
                <div 
                  v-if="index > 0" 
                  class="pb-hero-step-line-mobile"
                ></div>

                <div class="pb-hero-step-icon-wrapper">
                  <img
                    :src="step.icon"
                    :alt="step.title"
                    class="pb-hero-step-icon-img"
                  />
                </div>
                <div class="flex flex-col items-center">
                  <span class="pb-hero-step-title">{{ step.title }}</span>
                  <span class="pb-hero-step-subtitle">{{ step.subtitle }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
