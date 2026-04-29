<script setup lang="ts">
import type { TrustItem } from "~/types/landing-page-1";

defineProps<{
  data: TrustItem;
}>();
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 mt-20">
    <h2
      class="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-start"
    >
      {{ data?.title }}
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12"
    >
      <Card
        v-for="(item, idx) in data?.items"
        :key="idx"
        class="py-10 sm:py-12 md:py-16 px-6 sm:px-8 flex flex-col text-start border-none shadow-none"
      >
        <img :src="item.icon" :alt="item.title" class="h-10 sm:h-12 w-fit" />
        <h3 class="text-navy text-lg sm:text-xl md:text-2xl font-bold">
          {{ item.title }}
        </h3>
        <p
          class="text-navy font-semibold text-base sm:text-lg md:text-xl max-w-[520px]"
        >
          {{ item.description }}
        </p>
      </Card>
    </div>
  </section>
</template>
