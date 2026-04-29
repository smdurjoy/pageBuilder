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
  <header class="w-full bg-white py-4 px-4 md:px-8" :dir="props.dir">
    <div
      v-if="!pending && !error && headerData"
      class="max-w-7xl mx-auto flex flex-col"
    >
      <div class="w-full relative flex items-center justify-between">
        <!-- Desktop View -->
        <div class="hidden md:flex w-full items-center justify-between">
          <!-- Start (Right in RTL, Left in LTR) -->
          <div class="flex items-center gap-4 text-pb-header-menu-text">
            <!-- Hamburger -->
            <button
              @click="toggleMenu"
              class="w-11 h-11 flex items-center justify-center bg-white rounded hover:text-pb-header-logo-text transition-colors cursor-pointer shadow-[0px_4px_20px_0px_var(--SurfaceCardShadow,rgba(0,0,0,0.05))]"
            >
              <svg
                v-if="!isMenuOpen"
                class="w-6 h-6"
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
                class="w-6 h-6"
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
            <!-- Language Switcher (Forced LTR to maintain visual layout "EN AR") -->
            <div
              class="flex items-center gap-1 bg-white p-1 rounded font-medium shadow-[0px_4px_20px_0px_var(--SurfaceCardShadow,rgba(0,0,0,0.05))]"
              dir="ltr"
            >
              <span
                class="px-3 py-1.5 text-sm rounded cursor-pointer transition-shadow"
                :class="
                  props.dir === 'ltr'
                    ? 'text-gray-900 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'
                    : 'text-pb-header-menu-text hover:text-gray-900'
                "
              >
                EN
              </span>
              <span
                class="px-3 py-1.5 text-sm rounded cursor-pointer transition-shadow"
                :class="
                  props.dir === 'rtl'
                    ? 'text-gray-900 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'
                    : 'text-pb-header-menu-text hover:text-gray-900'
                "
              >
                AR
              </span>
            </div>
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

          <!-- End (Left in RTL, Right in LTR) -->
          <div>
            <a
              :href="headerData.buttonLink"
              class="pb-header-btn pb-header-btn-desktop pb-header-btn-dark"
            >
              {{ headerData.buttonText }}
            </a>
          </div>
        </div>

        <!-- Mobile View -->
        <div class="md:hidden flex w-full items-center justify-between">
          <!-- Start (Right in RTL) - Logo -->
          <div class="flex">
            <a
              href="/"
              class="text-2xl font-bold text-pb-header-logo-text no-underline"
            >
              {{ headerData.logoText }}
            </a>
          </div>

          <!-- End (Left in RTL) - Menu & Lang -->
          <div class="flex items-center gap-4 text-pb-header-menu-text">
            <!-- Language Switcher -->
            <div
              class="flex items-center gap-1 bg-white p-1 rounded font-medium shadow-[0px_4px_20px_0px_var(--SurfaceCardShadow,rgba(0,0,0,0.05))]"
              dir="ltr"
            >
              <span
                class="px-3 py-1.5 text-sm rounded cursor-pointer transition-shadow"
                :class="
                  props.dir === 'ltr'
                    ? 'text-gray-900 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'
                    : 'text-pb-header-menu-text hover:text-gray-900'
                "
              >
                EN
              </span>
              <span
                class="px-3 py-1.5 text-sm rounded cursor-pointer transition-shadow"
                :class="
                  props.dir === 'rtl'
                    ? 'text-gray-900 shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'
                    : 'text-pb-header-menu-text hover:text-gray-900'
                "
              >
                AR
              </span>
            </div>
            <!-- Hamburger Menu -->
            <button
              @click="toggleMenu"
              class="w-11 h-11 flex items-center justify-center bg-white rounded hover:text-pb-header-logo-text focus:outline-none transition-colors cursor-pointer shadow-[0px_4px_20px_0px_var(--SurfaceCardShadow,rgba(0,0,0,0.05))]"
            >
              <svg
                v-if="!isMenuOpen"
                class="w-6 h-6"
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
                class="w-6 h-6"
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
      </div>

      <!-- Dropdown Menu (for both desktop and mobile since it's hamburger based) -->
      <div
        v-if="isMenuOpen && headerData"
        class="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4"
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
          class="pb-header-btn pb-header-btn-desktop pb-header-btn-dark md:hidden mt-2"
        >
          {{ headerData.buttonText }}
        </a>
      </div>
    </div>
  </header>
</template>
