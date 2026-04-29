<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import type { OurServicesResponse } from "~/types/our-services";

const props = withDefaults(
  defineProps<{
    data: OurServicesResponse;
    allCornersRounded?: boolean;
  }>(),
  {
    allCornersRounded: false,
  },
);

const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
</script>

<template>
  <section v-if="data" class="w-full px-4 sm:px-6 lg:px-8 py-8">
    <div
      :class="`relative overflow-hidden  ${allCornersRounded ? 'rounded-[39px]' : 'rounded-[39px] rounded-bl-none rounded-br-none'} min-h-[90vh] bg-navy-deep flex items-center justify-center`"
    >
      <div class="absolute inset-0" style="background: #1a2b4b"></div>

      <img
        :src="data.hero.ourServicesMask"
        alt=""
        class="absolute left-1/2 top-[70%] sm:top-[60%] md:top-[40%] lg:top-[15%] xl:top-[20%] w-full -translate-x-1/2 -translate-y-1/4 pointer-events-none object-cover"
      />

      <header
        class="absolute top-0 right-0 left-0 z-20 w-full px-4 sm:px-6 lg:px-10 pt-5"
      >
        <div
          class="mx-auto flex max-w-[90%] items-center justify-between gap-4 rounded-2xl px-3 py-2 text-white"
        >
          <NuxtLink to="/" class="inline-flex items-center">
            <img :src="data.hero.logo" alt="logo" class="h-10 w-auto sm:h-12" />
          </NuxtLink>

          <div class="hidden items-center gap-8 text-base font-medium xl:flex">
            <a
              v-for="item in data.hero.nav"
              :key="item.name"
              :href="item.link"
              class="transition-opacity hover:opacity-80 duration-300"
            >
              {{ item.name }}
            </a>
          </div>

          <div class="flex items-center gap-2">
            <Button
              class="hidden lg:inline-flex rounded-full bg-cream text-navy p-6 hover:bg-cream/90 transition-colors duration-300"
            >
              {{ data.hero.buttonText }}
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
          <nav v-if="mobileOpen" class="lg:hidden bg-navy-deep mt-2 rounded-lg">
            <div
              class="mx-auto max-w-[90%] px-4 pb-8 pt-4 flex flex-col gap-2 text-white font-medium"
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

      <div class="relative z-10 w-full">
        <div
          class="mx-auto max-w-2xl px-6 pt-24 pb-0 text-center sm:pt-28 lg:pt-26 space-y-10"
        >
          <h1
            class="text-gold-light text-3xl lg:text-4xl lg:text-[50px] xl:text-[60px] font-semibold leading-snug whitespace-pre-line"
          >
            {{ data.hero.title }}
          </h1>

          <p class="text-cream leading-7 md:text-xl lg:text-2xl">
            {{ data.hero.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
