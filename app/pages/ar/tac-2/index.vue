<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Details from "~/components/ar/tac-1/details.vue";
import Hero from "~/components/ar/tac-1/hero.vue";
import type { TACResponse } from "~/types/tac";

const { data } = await useFetch<TACResponse>("/api/tac");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero
      v-if="data"
      :data="data as TACResponse"
      :all-corners-rounded="true"
      button-b-g="var(--cream)"
      button-text-color="var(--navy)"
      hero-b-g="var(--navy)"
      hero-text-color="var(--cream)"
      :hero-logo="data?.hero.logoLight"
      direction="rtl"
    />
    <Details v-if="data" :data="data as TACResponse" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as TACResponse" />
    </div>
  </div>
</template>
