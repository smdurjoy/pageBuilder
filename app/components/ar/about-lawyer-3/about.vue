<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { cardStyle } from "~/lib/helper";
import type { OurTeamResponse } from "~/types/our-team";

const props = defineProps<{
  data: OurTeamResponse;
  minusItems?: number;
  direction?: "rtl" | "ltr";
}>();

const visibleItems = computed(() => {
  const arr = props.data.team.items ?? [];
  return arr.slice(0, Math.max(0, arr.length - (props.minusItems || 0)));
});

const hovered = ref<number | string | null>(null);
</script>

<template>
  <nav
    class="flex items-center space-x-2 text-sm text-navy bg-cream p-4 mt-6"
  >
    <div class="container mx-auto space-x-1">
      <a href="/" class="hover:underline">{{
        data?.lawyersDetails?.breadCrumbs?.[0]
      }}</a>
      <span>/ </span>
      <a href="/our-services" class="hover:underline">{{
        data?.lawyersDetails?.breadCrumbs?.[1]
      }}</a>
      <span>/ </span>
      <a href="our-services" class="text-black font-semibold">{{
        data?.lawyersDetails?.breadCrumbs?.[2]
      }}</a>
    </div>
  </nav>

  <div class="mt-10 px-4 sm:px-6 space-y-6">
    <Card
      :class="`py-8 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col items-center text-center gap-8 border-lavender! hover:bg-lavender! transition-colors duration-300`"
      :style="cardStyle(0, hovered, '#D9DFEE')"
      @mouseenter="hovered = 0"
      @mouseleave="hovered = null"
    >
      <img
        :src="data.lawyersDetails.image"
        :alt="data.lawyersDetails.title"
        class="h-20 w-20 xl:h-35 lg:w-35 rounded-full object-cover mx-auto"
      />
      <div class="space-y-3">
        <h3 class="text-navy text-lg lg:text-xl font-bold">
          {{ data.lawyersDetails.title }}
        </h3>
        <p
          class="text-navy w-full lg:w-[90%] mx-auto text-base lg:text-lg"
        >
          {{ data.lawyersDetails.description }}
        </p>
      </div>
      <Button class="bg-tan text-gold-muted px-8">{{
        data.lawyersDetails.buttonText
      }}</Button>
    </Card>

    <div class="container mx-auto my-20 space-y-10">
      <div class="space-y-4">
        <h2
          class="text-navy text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-start"
        >
          {{ data?.lawyersDetails.aboutLawyer[0]?.title }}
        </h2>
        <p class="text-navy w-full text-base lg:text-lg">
          {{ data?.lawyersDetails.aboutLawyer[0]?.description }}
        </p>
      </div>

      <div class="space-y-4">
        <h2
          class="text-navy text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-start"
        >
          {{ data?.lawyersDetails.aboutLawyer[1]?.title }}
        </h2>
        <p class="text-navy w-full lg:w-[30%] text-base lg:text-lg">
          {{ data?.lawyersDetails.aboutLawyer[1]?.description }}
        </p>
      </div>
      <div class="space-y-4">
        <h2
          class="text-navy text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-start"
        >
          {{ data?.lawyersDetails.aboutLawyer[2]?.title }}
        </h2>
        <p class="text-navy w-full lg:w-[30%] text-base lg:text-lg">
          {{ data?.lawyersDetails.aboutLawyer[2]?.description }}
        </p>
      </div>
      <div class="space-y-4">
        <h2
          class="text-navy text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-start"
        >
          {{ data?.lawyersDetails.aboutLawyer[3]?.title }}
        </h2>
        <p class="text-navy w-full text-base lg:text-lg">
          {{ data?.lawyersDetails.aboutLawyer[3]?.description }}
        </p>
      </div>
    </div>
  </div>

  <div class="bg-cream my-10 h-0.5 w-full" />

  <div class="mt-10">
    <div class="container mx-auto">
      <h2
        class="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-start"
      >
        {{ data?.team.title }}
      </h2>
    </div>

    <div
      class="mt-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <div v-for="(member, idx) in visibleItems" :key="member.title">
        <Card
          :class="`py-8 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col gap-8 bg-white! border-cream! hover:bg-cream! transition-colors duration-300`"
          :style="cardStyle(idx, hovered)"
          @mouseenter="hovered = idx"
          @mouseleave="hovered = null"
        >
          <img
            :src="member.image"
            :alt="member.title"
            class="h-20 w-20 xl:h-35 lg:w-35 rounded-full object-cover mx-auto"
          />
          <div class="space-y-3">
            <h3 class="text-navy text-lg lg:text-xl font-bold">
              {{ member.title }}
            </h3>
            <p class="text-navy w-full lg:w-[90%] text-base lg:text-lg">
              {{ member.description }}
            </p>
          </div>
          <NuxtLink
            href="#"
            class="flex items-center gap-2 hover:gap-3 transition-all"
          >
            <span class="text-gold-light font-semibold text-base lg:text-lg">
              {{ member.linkText || "تفاصيل أكثر" }}
            </span>
            <img
              :src="member.arrowIcon"
              :alt="member.linkText || 'تفاصيل'"
              :class="direction == 'ltr' ? 'rotate-180' : ''"
            />
          </NuxtLink>
        </Card>
      </div>
    </div>
  </div>
</template>
