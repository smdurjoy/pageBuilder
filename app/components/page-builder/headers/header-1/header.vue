<script setup lang="ts">
import { useFetch } from "#app";
import { computed, ref } from "vue";
import type { HeaderData } from "~/types/page-builder/header";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
  isFixed: {
    type: Boolean,
    default: false,
  },
});

// Based on dir, decide which api to call
// rtl typically implies Arabic (index.get.ts), ltr implies English (en.get.ts)
const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/header"
    : "/api/page-builder/header/en";
});

const { data: headerData, pending, error } = useFetch<HeaderData>(endpoint);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header
    :class="[
      'w-full bg-white py-4 px-4 md:px-8 transition-all duration-300',
      isFixed ? 'sticky top-0 left-0 right-0 z-[100] shadow-md' : 'relative',
    ]"
    :dir="props.dir"
  >
    <div
      v-if="!pending && !error && headerData"
      class="max-w-7xl mx-auto flex items-center justify-between"
    >
      <!-- Desktop View -->
      <!-- Left side (RTL context: Logo to the right, Button to the left) -->
      <div class="hidden md:flex flex-1 items-center justify-between">
        <!-- Logo -->
        <a
          href="/"
          class="text-2xl font-bold text-pb-header-logo-text no-underline whitespace-nowrap"
        >
          {{ headerData.logoText }}
        </a>

        <!-- Menus -->
        <nav class="flex items-center gap-10">
          <a
            v-for="(menu, index) in headerData.menus"
            :key="index"
            :href="menu.link"
            class="text-pb-header-menu-text hover:text-pb-header-logo-text transition-colors no-underline font-medium text-base"
          >
            {{ menu.title }}
          </a>
        </nav>

        <!-- Button -->
        <a
          :href="headerData.buttonLink"
          class="pb-header-btn pb-header-btn-desktop pb-header-btn-dark"
        >
          {{ headerData.buttonText }}
        </a>
      </div>

      <!-- Mobile View -->
      <div class="md:hidden flex flex-1 items-center justify-between">
        <!-- Mobile Logo -->
        <a
          href="/"
          class="text-2xl font-bold text-pb-header-logo-text no-underline"
        >
          {{ headerData.logoText }}
        </a>

        <!-- Mobile Hamburger Menu -->
        <button
          @click="toggleMobileMenu"
          class="text-pb-header-menu-text hover:text-pb-header-logo-text focus:outline-none cursor-pointer"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isMobileMenuOpen && headerData"
      class="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4"
    >
      <a
        v-for="(menu, index) in headerData.menus"
        :key="index"
        :href="menu.link"
        class="text-pb-header-menu-text block w-full no-underline font-medium text-lg hover:text-pb-header-logo-text transition-colors"
      >
        {{ menu.title }}
      </a>
      <a
        :href="headerData.buttonLink"
        class="pb-header-btn pb-header-btn-mobile pb-header-btn-dark"
      >
        {{ headerData.buttonText }}
      </a>
    </div>
  </header>
</template>
