<script setup lang="ts">
import { ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import { cardStyle } from "~/lib/helper";
import type { OurTeamResponse } from "~/types/our-team";

defineProps<{
  data: OurTeamResponse;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 px-4 sm:px-6">
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
      <div v-for="(member, idx) in data?.team.items" :key="member.title">
        <Card
          :class="`py-8 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col gap-8 bg-white! border-lavender! hover:bg-lavender! transition-colors duration-300`"
          :style="cardStyle(idx, hovered)"
          @mouseenter="hovered = idx"
          @mouseleave="hovered = null"
        >
          <img
            :src="data.teamAvatar"
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
  </section>
</template>
