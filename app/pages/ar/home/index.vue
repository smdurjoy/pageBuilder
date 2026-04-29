<script setup lang="ts">
import Accreditations from "~/components/ar/home/dark/accreditations.vue";
import Blog from "~/components/ar/home/dark/blog.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import Hero from "~/components/ar/home/dark/hero.vue";
import LegalSupport from "~/components/ar/home/dark/legal-support.vue";
import Reviews from "~/components/ar/home/dark/reviews.vue";
import Services from "~/components/ar/home/dark/services.vue";
import Team from "~/components/ar/home/dark/team.vue";
import Trust from "~/components/ar/home/dark/trust.vue";

import type { HomeResponse } from "~/types/home";

const { data } = await useFetch<HomeResponse>("/api/home");
</script>

<template>
  <div class="bg-navy-gradient w-full min-h-screen pb-6" dir="rtl">
    <Hero :data="data as HomeResponse" />
    <Trust :data="data as HomeResponse" />
    <Services :data="data as HomeResponse" :direction="'rtl'" />
    <Team :data="data as HomeResponse" :direction="'rtl'" />
    <Accreditations :data="data as HomeResponse" :direction="'rtl'" />
    <Blog :data="data as HomeResponse" :direction="'rtl'" />
    <Reviews :data="data as HomeResponse" :direction="'rtl'" />
    <div
      class="bg-navy-gradient border border-white/12 mx-4 pb-6 rounded-[39px] mt-10"
    >
      <LegalSupport :data="data as HomeResponse" />
    </div>

    <Footer :data="data as HomeResponse" />
  </div>
</template>
