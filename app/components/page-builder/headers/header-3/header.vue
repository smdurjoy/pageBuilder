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
      'w-full flex flex-col transition-all duration-300 bg-white',
      isFixed ? 'sticky top-0 left-0 right-0 z-[100] md:shadow-md' : 'relative md:shadow-none shadow-pb-header',
    ]"
    :dir="props.dir"
  >
    <div v-if="!pending && !error && headerData" class="w-full">
      <!-- Top Bar (Desktop: Dark, Mobile: Light) -->
      <div
        class="w-full md:bg-pb-header-topbar-bg-desktop bg-pb-header-topbar-bg-mobile md:text-pb-header-topbar-text-desktop text-pb-header-topbar-text-mobile border-b md:border-none border-gray-100"
      >
        <div
          class="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3 flex flex-row md:flex-row-reverse items-center justify-between"
        >
          <!-- Contact Info -->
          <div
            class="flex flex-row-reverse items-center gap-4 md:gap-8 text-xs md:text-sm font-medium"
            :dir="props.dir === 'rtl' ? 'rtl' : 'ltr'"
          >
            <div class="flex flex-row-reverse items-center gap-1.5 md:gap-2">
              <img
                src="/page-builder/headers-icons/haeder-3-location-mobile.png"
                alt="location"
                class="w-3.5 h-3.5 md:hidden block object-contain"
              />
              <img
                src="/page-builder/headers-icons/haeder-3-location-desktop.png"
                alt="location"
                class="w-3 h-3 hidden md:block object-contain"
              />
              <span class="text-[12px]">{{ headerData.address }}</span>
            </div>

            <div class="flex flex-row-reverse items-center gap-1.5 md:gap-2">
              <img
                src="/page-builder/headers-icons/header-3-mail-mobile.png"
                alt="mail"
                class="w-3.5 h-3.5 md:hidden block object-contain"
              />
              <img
                src="/page-builder/headers-icons/header-3-mail-desktop.png"
                alt="mail"
                class="w-3 h-3 hidden md:block object-contain"
              />
              <span class="text-[12px]">{{ headerData.email }}</span>
            </div>
          </div>

          <!-- Language Switcher (Desktop Only) -->
          <div class="hidden md:flex items-center text-sm" dir="ltr">
            <span class="mr-2">Select Language:</span>
            <div class="flex items-center gap-2">
              <span
                class="font-medium cursor-pointer"
                :class="
                  props.dir === 'ltr'
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                "
                >English</span
              >
              <span class="text-[#155DFC]">|</span>
              <span
                class="cursor-pointer font-arabic transition-colors"
                :class="
                  props.dir === 'rtl'
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                "
                >العربية</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <div class="w-full bg-white px-4 md:px-8 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <!-- Desktop View -->
          <div class="hidden md:flex w-full items-center justify-between">
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
          <div class="md:hidden flex w-full items-center justify-between">
            <button
              @click="toggleMenu"
              class="text-pb-header-menu-text hover:text-pb-header-logo-text transition-colors cursor-pointer"
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
            <a
              href="/"
              class="text-2xl font-bold text-pb-header-logo-text no-underline"
            >
              {{ headerData.logoText }}
            </a>
          </div>
        </div>

        <!-- Dropdown Menu -->
        <div
          v-if="isMenuOpen && headerData"
          class="max-w-7xl mx-auto md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4"
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

          <!-- Mobile Language Switcher (since it's hidden in the top bar) -->
          <div
            class="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100 text-sm font-medium"
            dir="ltr"
          >
            <span
              class="cursor-pointer font-semibold transition-colors"
              :class="
                props.dir === 'ltr'
                  ? 'text-gray-900 border-b-2 border-black pb-1'
                  : 'text-gray-500 hover:text-gray-900 pb-1'
              "
              >English</span
            >
            <span class="text-gray-500 mb-1">|</span>
            <span
              class="cursor-pointer font-arabic transition-colors"
              :class="
                props.dir === 'rtl'
                  ? 'text-gray-900 border-b-2 border-black pb-1'
                  : 'text-gray-500 hover:text-gray-900 pb-1'
              "
              >العربية</span
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
