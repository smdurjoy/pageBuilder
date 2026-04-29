<script setup lang="ts">
import { cardStyle } from "~/lib/helper";
import type { BlogResponse } from "~/types/blogs";

defineProps<{
  data: BlogResponse;
  direction: "ltr" | "rtl";
}>();

const hovered = ref<number | null>(null);
</script>

<template>
  <section class="mt-20 px-4 sm:px-6 container mx-auto">
    <div class="flex items-center justify-between gap-4 mb-10" dir="ltr">
      <Select :dir="direction || 'rtl'">
        <SelectTrigger
          class="min-w-[220px] sm:w-5/12 rounded-full h-13! flex items-center px-4"
        >
          <SelectValue placeholder="كل المواضيع" />
        </SelectTrigger>
      </Select>
      <Input
        placeholder="ابحث عن الموضوع .."
        class="rounded-full py-6"
        type="search"
        :dir="direction || 'rtl'"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 px-3 sm:px-0"
    >
      <Card
        v-for="(item, idx) in data?.blogs"
        class="py-4 md:py-6 px-3 sm:px-6 flex flex-col text-start bg-white!"
        :style="cardStyle(idx, hovered)"
        @mouseenter="hovered = idx"
        @mouseleave="hovered = null"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="h-96 w-full object-cover rounded-[39px]"
        />
        <h3 class="text-navy text-lg lg:text-2xl font-bold">
          {{ item.title }}
        </h3>
        <NuxtLink
          href="#"
          class="flex items-center gap-2 hover:gap-3 transition-all"
        >
          <span class="text-gold-light font-semibold lg:text-lg">
            {{ item.linkText }}
          </span>
          <img
            :src="item.arrowIcon"
            :alt="item.linkText"
            :class="direction == 'ltr' ? 'rotate-180' : ''"
          />
        </NuxtLink>
      </Card>
    </div>
  </section>
</template>
