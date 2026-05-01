<script setup lang="ts">
import { useFetch } from "#app";
import { computed, ref } from "vue";
import { Play, X } from "lucide-vue-next";
import type { Hero4Data } from "~/types/page-builder/heros-4";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const showVideo = ref(false);

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/hero-components/hero-4"
    : "/api/page-builder/hero-components/hero-4/en";
});

const { data: heroData, pending, error } = useFetch<Hero4Data>(endpoint);

const isRtl = computed(() => props.dir === "rtl");

const closeVideo = () => {
  showVideo.value = false;
};
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
          <button class="pb-hero4-play-btn" @click="showVideo = true">
            <div class="pb-hero4-play-icon-wrapper">
              <Play class="pb-hero4-play-icon" />
            </div>
          </button>
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
          <button class="pb-hero4-play-btn" @click="showVideo = true">
            <div class="pb-hero4-play-icon-wrapper">
              <Play class="pb-hero4-play-icon" />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <div
        v-if="showVideo"
        class="pb-hero4-video-modal"
        @click.self="closeVideo"
      >
        <div class="pb-hero4-video-container">
          <button class="pb-hero4-close-btn" @click="closeVideo">
            <X class="w-6 h-6" />
          </button>
          <iframe
            :src="heroData.content.videoUrl"
            class="pb-hero4-iframe"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.pb-hero2-image-card {
  position: relative;
}

.pb-hero4-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.pb-hero4-play-btn:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.pb-hero4-play-icon-wrapper {
  background: #ef0000;
  border-radius: 9999px;
  width: 68px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
}

.pb-hero4-play-icon {
  width: 28px;
  height: 28px;
  fill: #ffffff;
  color: #ffffff;
  margin-left: 4px; /* Offset for better visual centering of triangle */
}

/* Video Modal Styles */
.pb-hero4-video-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.pb-hero4-video-container {
  position: relative;
  width: 90%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.pb-hero4-close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s;
}

.pb-hero4-close-btn:hover {
  opacity: 0.7;
}

.pb-hero4-iframe {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .pb-hero4-play-icon-wrapper {
    width: 54px;
    height: 54px;
  }
  .pb-hero4-play-icon {
    width: 22px;
    height: 22px;
  }
}
</style>
