<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import type { TACResponse } from "~/types/tac";

const props = withDefaults(
  defineProps<{
    data: TACResponse;
    allCornersRounded?: boolean;
    buttonBG: string;
    buttonTextColor: string;
    heroBG: string;
    heroTextColor: string;
    heroLogo?: string;
    heroTitleColor?: string;
    direction?: "ltr" | "rtl";
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
      :class="`relative overflow-hidden ${allCornersRounded ? 'rounded-[39px]' : 'rounded-[39px] rounded-bl-none rounded-br-none'} min-h-[400px] flex flex-col justify-center items-center`"
      :style="`background: ${heroBG}`"
    >
      <header
        class="absolute top-0 right-0 left-0 z-20 w-full px-4 sm:px-6 lg:px-10 pt-5"
      >
        <div
          class="mx-auto flex max-w-[95%] items-center justify-between gap-4 py-2 text-white"
        >
          <!-- Logo (Right) -->
          <NuxtLink to="/" class="inline-flex items-center">
            <img
              :src="heroLogo || data.hero.logo"
              alt="logo"
              class="h-10 w-auto sm:h-12"
            />
          </NuxtLink>
          <!-- Consultation Button (Left) -->

          <!-- Navigation Links (Middle) -->
          <div class="hidden items-center gap-6 text-sm font-medium xl:flex">
            <a
              v-for="item in data.hero.nav"
              :key="item.name"
              :href="item.link"
              class="transition-opacity hover:opacity-100 opacity-90 duration-300"
              :style="`color: ${heroTextColor}`"
            >
              {{ item.name }}
            </a>
          </div>

          <div class="flex items-center gap-2">
            <Button
              class="hidden lg:inline-flex rounded-full px-6 py-5 text-sm font-semibold duration-300"
              :style="`background: ${buttonBG}; color: ${buttonTextColor}`"
            >
              {{ data.hero.buttonText }}
            </Button>
            <button
              @click="toggleMobile"
              size="icon-lg"
              :aria-expanded="mobileOpen"
              aria-label="Toggle menu"
              class="lg:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/90 text-black hover:bg-white/95 transition-colors cursor-pointer"
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

        <!-- Mobile Menu -->
        <transition name="fade">
          <nav
            v-if="mobileOpen"
            class="lg:hidden bg-white/10 backdrop-blur-md mt-2 rounded-lg"
          >
            <div
              class="mx-auto max-w-[90%] px-4 pb-8 pt-4 flex flex-col gap-2 text-white font-medium"
            >
              <a
                v-for="item in data?.hero.nav"
                :key="item.name"
                :href="item.link"
                @click="mobileOpen = false"
                class="py-3 border-b border-white/20 last:border-b-0 transition-opacity hover:opacity-80"
              >
                {{ item.name }}
              </a>

              <Button
                @click="mobileOpen = false"
                class="w-full mt-2 rounded-full p-4 hover:opacity-90 transition-opacity duration-300 text-sm font-bold"
                :style="`background: ${buttonBG}; color: ${buttonTextColor}`"
              >
                {{ data?.hero.buttonText }}
              </Button>
            </div>
          </nav>
        </transition>
      </header>

      <!-- Text Content (Centered) -->
      <div
        :class="`relative z-10 w-full text-center lg:text-start space-y-4 px-4 mt-20 ${direction === 'ltr' ? 'ml-20' : 'mr-20'}`"
      >
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          :style="`color: ${heroTitleColor || heroTextColor}`"
        >
          {{ data.ppDetails.c1 }}
        </h1>

        <p
          class="text-base sm:text-lg lg:text-xl opacity-90"
          :style="`color: ${heroTextColor}`"
        >
          {{ data.ppDetails.c2 }}
        </p>
      </div>

      <!-- Decorative mask image -->
      <img
        v-if="data.hero.heroImageMask"
        :src="data.hero.heroImageMask"
        alt=""
        class="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
