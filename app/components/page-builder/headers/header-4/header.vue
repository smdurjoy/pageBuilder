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

const endpoint = computed(() => {
  return props.dir === "rtl"
    ? "/api/page-builder/header"
    : "/api/page-builder/header/en";
});

const { data: headerData, pending, error } = useFetch<HeaderData>(endpoint);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header
    :class="[
      'w-full flex flex-col transition-all duration-300 bg-white md:bg-black',
      isFixed ? 'sticky top-0 left-0 right-0 z-[100] md:shadow-md' : 'relative md:shadow-none shadow-pb-header',
    ]"
    :dir="props.dir"
  >
    <div v-if="!pending && !error && headerData" class="w-full">
      <div class="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <!-- Desktop View -->
        <div
          class="hidden md:flex w-full items-center justify-between text-white"
        >
          <!-- Logo -->
          <a
            href="/"
            class="text-2xl font-bold text-white no-underline whitespace-nowrap"
          >
            {{ headerData.logoText }}
          </a>

          <!-- Menus -->
          <nav class="flex items-center gap-10">
            <a
              v-for="(menu, index) in headerData.menus"
              :key="index"
              :href="menu.link"
              class="text-white hover:text-gray-300 transition-colors no-underline font-medium text-base"
            >
              {{ menu.title }}
            </a>
          </nav>

          <!-- Button -->
          <a
            :href="headerData.buttonLink"
            class="pb-header-btn pb-header-btn-desktop pb-header-btn-light"
          >
            {{ headerData.buttonText }}
          </a>
        </div>

        <!-- Mobile View -->
        <div
          class="md:hidden flex w-full items-center justify-between text-black relative h-[44px]"
        >
          <!-- Start (Right in RTL, Left in LTR) - Hamburger -->
          <div class="flex items-center">
            <button
              @click="toggleMenu"
              class="text-pb-header-logo-text hover:opacity-70 transition-opacity cursor-pointer focus:outline-none"
            >
              <svg
                v-if="!isMenuOpen"
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

          <!-- Center Logo -->
          <div class="absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/"
              class="text-2xl font-bold text-pb-header-logo-text no-underline whitespace-nowrap"
            >
              {{ headerData.logoText }}
            </a>
          </div>

          <!-- End (Left in RTL, Right in LTR) - Button -->
          <div class="flex items-center h-full">
            <a
              :href="headerData.buttonLink"
              class="pb-header-btn pb-header-btn-dark px-4 py-2"
            >
              {{ headerData.buttonText }}
            </a>
          </div>
        </div>

        <!-- Dropdown Menu (Mobile) -->
        <div
          v-if="isMenuOpen && headerData"
          class="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4 text-black"
        >
          <a
            v-for="(menu, index) in headerData.menus"
            :key="index"
            :href="menu.link"
            class="text-pb-header-menu-text block w-full no-underline font-medium text-lg hover:text-pb-header-logo-text transition-colors"
          >
            {{ menu.title }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
