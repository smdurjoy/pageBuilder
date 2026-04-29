<script setup lang="ts">
import About from "~/components/ar/about-lawyer-3/about.vue";
import Header from "~/components/ar/about-us-3/header.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import type { LandingPage1Response } from "~/types/landing-page-1";
import type { OurTeamResponse } from "~/types/our-team";

const { data } = await useFetch<OurTeamResponse>("/api/our-team/en");
const { data: landingPage1Data } = await useFetch<LandingPage1Response>(
  "/api/landing-page-1/en",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Header :data="landingPage1Data as LandingPage1Response" />
    <About :data="data as OurTeamResponse" :minus-items="4" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer
        :data="landingPage1Data as LandingPage1Response"
        :socials-exist="false"
      />
    </div>
  </div>
</template>
