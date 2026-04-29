<script setup lang="ts">
import { computed, ref } from "vue";
import Card from "~/components/ui/card/Card.vue";
import Input from "~/components/ui/input/Input.vue";
import { Select } from "~/components/ui/select";
import SelectTrigger from "~/components/ui/select/SelectTrigger.vue";
import SelectValue from "~/components/ui/select/SelectValue.vue";
import { cardStyle } from "~/lib/helper";
import type { ServicesType } from "~/types/our-services";

const props = defineProps<{
  data: ServicesType;
  bgWhite?: boolean;
  minusItems?: number;
  direction?: "rtl" | "ltr";
}>();

const hovered = ref<number | string | null>(null);

const visibleItems = computed(() => {
  const arr = props.data ?? [];
  return arr.slice(0, Math.max(0, arr.length - (props.minusItems || 0)));
});
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 mt-20">
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
      class="flex flex-col mb-20"
      v-for="(item, index) in visibleItems"
      :key="index"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-navy text-2xl sm:text-3xl md:text-4xl font-bold">
          {{ item.title }}
        </h2>
        <NuxtLink href="#">
          <span
            class="text-navy text-base sm:text-lg md:text-xl hover:text-gold-light transition-colors duration-300"
          >
            {{ item.linkText }}
          </span>
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12"
      >
        <Card
          v-for="(card, idx) in item?.items"
          :key="idx"
          :class="`py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col ${props.bgWhite ? 'bg-white! border! border-tan!' : 'bg-cream!'} rounded-[39px] transition-transform duration-300`"
          :style="cardStyle(String(idx + card.title), String(hovered))"
          @mouseenter="hovered = String(idx + card.title)"
          @mouseleave="hovered = null"
        >
          <img
            :src="card.icon"
            :alt="card.title"
            class="h-10 sm:h-12 md:h-14 w-fit mb-4"
          />
          <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
            {{ card.title }}
          </h3>
          <p class="text-navy text-base sm:text-lg md:text-xl mt-3">
            {{ card.description }}
          </p>
          <NuxtLink
            href="#"
            class="flex items-center justify-start gap-2 hover:gap-3 transition-all"
          >
            <span class="text-gold-light font-semibold lg:text-lg">
              {{ item.linkText }}
            </span>
            <img
              :src="card.arrowIcon"
              :alt="item.linkText"
              :class="direction == 'ltr' ? 'rotate-180' : ''"
            />
          </NuxtLink>
        </Card>
      </div>
    </div>
  </section>
</template>
