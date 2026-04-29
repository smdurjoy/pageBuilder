<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import type { ContactUsResponse } from "~/types/contact-us";

const props = withDefaults(
  defineProps<{
    data: ContactUsResponse;
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
    direction: "rtl",
  },
);

const isLTR = computed(() => props.direction === "ltr");

const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
</script>

<template>
  <section v-if="data" class="w-full px-4 sm:px-6 lg:px-8 py-8">
    <div
      :class="`relative overflow-hidden ${allCornersRounded ? 'rounded-[39px]' : 'rounded-[39px] rounded-bl-none rounded-br-none'} min-h-[90vh] flex flex-col`"
    >
      <div class="absolute inset-0" :style="`background: ${heroBG}`"></div>

      <img
        :src="data.hero.heroImageMask"
        alt=""
        class="absolute left-1/2 top-[70%] sm:top-[60%] md:top-[40%] lg:top-[15%] xl:top-[20%] w-full -translate-x-1/2 -translate-y-1/4 pointer-events-none object-cover opacity-10"
      />

      <header
        class="absolute top-0 right-0 left-0 z-20 w-full px-4 sm:px-6 lg:px-10 pt-5"
      >
        <div
          class="mx-auto flex max-w-[90%] items-center justify-between gap-4 rounded-2xl px-3 py-2 text-white"
        >
          <NuxtLink to="/" class="inline-flex items-center">
            <img
              :src="heroLogo || data.hero.logo"
              alt="logo"
              class="h-10 w-auto sm:h-12"
            />
          </NuxtLink>

          <div class="hidden items-center gap-8 text-base font-medium xl:flex">
            <a
              v-for="item in data.hero.nav"
              :key="item.name"
              :href="item.link"
              class="transition-opacity hover:opacity-80 duration-300"
              :style="`color: ${heroTextColor}`"
            >
              {{ item.name }}
            </a>
          </div>

          <div class="flex items-center gap-2">
            <Button
              class="hidden lg:inline-flex rounded-full bg-navy text-cream px-8 py-6 hover:bg-navy/90 transition-colors duration-300"
              :style="`background: ${buttonBG}; color: ${buttonTextColor}`"
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
                class="w-full mt-2 rounded-full bg-navy text-white p-4 hover:bg-gold hover:text-white transition-colors duration-300"
                :style="`background: ${buttonBG}; color: ${buttonTextColor}`"
              >
                {{ data?.hero.buttonText }}
              </Button>
            </div>
          </nav>
        </transition>
      </header>

      <div
        v-if="data && data.formLabels"
        class="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full w-full max-w-7xl mx-auto px-6 pt-40 pb-12 gap-12 lg:gap-20"
      >
        <!-- Form Section -->
        <div
          :class="[
            'w-full lg:w-1/2 flex justify-center order-2',
            isLTR ? 'lg:justify-start lg:order-2' : 'lg:justify-end lg:order-1',
          ]"
        >
          <Card
            class="w-full max-w-[500px] border-none shadow-xl rounded-[24px] bg-white pt-8"
          >
            <CardContent class="space-y-6">
              <div :class="['space-y-2', isLTR ? 'text-left' : 'text-right']">
                <h3
                  v-if="data.formLabels.title"
                  class="text-2xl font-bold text-navy"
                >
                  {{ data.formLabels.title }}
                </h3>
                <p
                  v-if="data.formLabels.description"
                  class="text-navy/60 text-sm"
                >
                  {{ data.formLabels.description }}
                </p>
              </div>

              <form class="space-y-4" :dir="isLTR ? 'ltr' : 'rtl'">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div :class="['space-y-2', isLTR ? 'text-left' : 'text-right']">
                    <Label class="text-navy font-medium">{{
                      data.formLabels.labels[0]?.label
                    }}</Label>
                    <Input
                      class="bg-input-bg border-none rounded-xl h-12 focus-visible:ring-1 focus-visible:ring-gold"
                      :placeholder="data.formLabels.labels[0]?.placeholder"
                    />
                  </div>
                  <div :class="['space-y-2', isLTR ? 'text-left' : 'text-right']">
                    <Label class="text-navy font-medium">{{
                      data.formLabels.labels[1]?.label
                    }}</Label>
                    <Input
                      class="bg-input-bg border-none rounded-xl h-12 focus-visible:ring-1 focus-visible:ring-gold"
                      :placeholder="data.formLabels.labels[1]?.placeholder"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div :class="['space-y-2', isLTR ? 'text-left' : 'text-right']">
                    <Label class="text-navy font-medium">{{
                      data.formLabels.labels[2]?.label
                    }}</Label>
                    <div class="relative">
                      <Input
                        class="bg-input-bg border-none rounded-xl h-12 focus-visible:ring-1 focus-visible:ring-gold"
                        :placeholder="data.formLabels.labels[2]?.placeholder"
                      />
                    </div>
                  </div>
                  <div :class="['space-y-2', isLTR ? 'text-left' : 'text-right']">
                    <Label class="text-navy font-medium">{{
                      data.formLabels.labels[3]?.label
                    }}</Label>
                    <Input
                      class="bg-input-bg border-none rounded-xl h-12 focus-visible:ring-1 focus-visible:ring-gold"
                      :placeholder="data.formLabels.labels[3]?.placeholder"
                    />
                  </div>
                </div>

                <div :class="['space-y-2', isLTR ? 'text-left' : 'text-right']">
                  <Label class="text-navy font-medium">{{
                    data.formLabels.labels[4]?.label
                  }}</Label>
                  <Textarea
                    class="bg-input-bg border-none rounded-xl min-h-[120px] focus-visible:ring-1 focus-visible:ring-gold"
                    :placeholder="data.formLabels.labels[4]?.placeholder"
                  />
                </div>

                <div class="pt-2 flex justify-end">
                  <Button
                    class="bg-gold hover:bg-gold-dark text-white rounded-full px-10 py-5 transition-all duration-300 flex items-center gap-4"
                  >
                    إرسال
                    <img
                      src="/contact-us/form-arrow.png"
                      class="h-4 w-4"
                      alt=""
                    />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <!-- Text Section -->
        <div
          :class="[
            'w-full lg:w-1/2 text-center space-y-6 order-1',
            isLTR ? 'lg:text-left lg:order-1' : 'lg:text-right lg:order-2',
          ]"
        >
          <h1
            class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            :style="`color: ${heroTitleColor || heroTextColor}`"
          >
            {{ data.hero.title }}
          </h1>

          <p
            :class="[
              'text-lg lg:text-xl leading-relaxed max-w-xl mx-auto opacity-80',
              isLTR ? 'lg:mr-auto' : 'lg:ml-auto',
            ]"
            :style="`color: ${heroTextColor}`"
          >
            {{ data.hero.description }}
          </p>
        </div>
      </div>
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
