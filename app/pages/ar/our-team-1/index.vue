<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Hero from "~/components/ar/our-team-1/hero.vue";
import Team from "~/components/ar/our-team-1/team.vue";
import type { OurTeamResponse } from "~/types/our-team";

const { data } = await useFetch<OurTeamResponse>("/api/our-team");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero
      :data="data as OurTeamResponse"
      :all-corners-rounded="true"
      button-b-g="var(--gold)"
      button-text-color="white"
      hero-b-g="var(--cream)"
      hero-text-color="var(--navy)"
    />
    <Team :data="data as OurTeamResponse" direction="rtl" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as OurTeamResponse" />
    </div>
  </div>
</template>
