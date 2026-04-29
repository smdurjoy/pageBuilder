<script setup lang="ts">
import type { BlogResponse } from "~/types/blogs";

defineProps<{
  data: BlogResponse;
}>();
</script>

<template>
  <section class="container text-center mt-20 mx-auto max-w-2xl px-4 sm:px-6">
    <h1
      :class="`text-navy text-3xl lg:text-4xl lg:text-[50px] xl:text-[60px] font-semibold leading-snug whitespace-pre-line`"
    >
      {{ data.hero.title }}
    </h1>

    <p :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`">
      {{ data.hero.description }}
    </p>
  </section>
</template>
