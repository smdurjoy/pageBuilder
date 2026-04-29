<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Hero from "~/components/ar/privacy-policy-1/hero.vue";
import Details from "~/components/ar/tac-1/details.vue";
import type { TACResponse } from "~/types/tac";

const { data } = await useFetch<TACResponse>("/api/tac/en");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Hero
      v-if="data"
      :data="data as TACResponse"
      :all-corners-rounded="true"
      button-b-g="var(--cream)"
      button-text-color="var(--gold)"
      hero-b-g="var(--gold-light)"
      hero-title-color="white"
      hero-text-color="white"
      :hero-logo="data?.hero.logoLight"
      direction="ltr"
    />
    <Details v-if="data" :data="data as TACResponse" dir="ltr" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as TACResponse" />
    </div>
  </div>
</template>
