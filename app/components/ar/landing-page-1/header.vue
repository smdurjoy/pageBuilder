<script setup lang="ts">
import { ref } from "vue";
import Button from "~/components/ui/button/Button.vue";
import type { LandingPage1Response } from "~/types/landing-page-1";

defineProps<{
  data: LandingPage1Response;
}>();
const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
</script>

<template>
  <header class="w-full px-4 sm:px-6 lg:px-10 pt-5">
    <div
      class="mx-auto flex max-w-[90%] items-center justify-between gap-4 rounded-2xl px-3 py-2 text-white"
    >
      <NuxtLink to="/" class="inline-flex items-center">
        <img
          :src="data?.hero.logoLight"
          alt="logo"
          class="h-10 w-auto sm:h-12"
        />
      </NuxtLink>

      <div
        class="hidden items-center gap-8 text-base text-black font-medium lg:flex"
      >
        <a
          v-for="item in data?.hero.nav"
          :key="item.name"
          :href="item.link"
          class="transition-opacity hover:opacity-80"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <Button
          class="hidden lg:inline-flex rounded-full bg-cream text-black p-6 hover:bg-gold hover:text-white transition-colors duration-300"
        >
          {{ data?.hero.buttonText }}
        </Button>

        <button
          @click="toggleMobile"
          size="icon-lg"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/90 text-black hover:bg-white/95 border border-gold/26 hover:border-cream transition-colors cursor-pointer"
        >
          <svg
            v-if="!mobileOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition name="fade">
      <nav v-if="mobileOpen" class="lg:hidden bg-white">
        <div
          class="mx-auto max-w-[90%] px-4 pb-4 pt-4 flex flex-col gap-2 text-black font-medium"
        >
          <a
            v-for="item in data?.hero.nav"
            :key="item.name"
            :href="item.link"
            @click="mobileOpen = false"
            class="py-3 border-b last:border-b-0 transition-opacity hover:opacity-80"
          >
            {{ item.name }}
          </a>

          <Button
            @click="mobileOpen = false"
            class="w-full mt-2 rounded-full bg-cream text-black p-4 hover:bg-gold hover:text-white transition-colors duration-300"
          >
            {{ data?.hero.buttonText }}
          </Button>
        </div>
      </nav>
    </transition>
  </header>
</template>
