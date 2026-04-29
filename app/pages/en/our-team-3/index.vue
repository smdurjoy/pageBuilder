<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Hero from "~/components/ar/our-team-1/hero.vue";
import Team from "~/components/ar/our-team-1/team.vue";
import type { OurTeamResponse } from "~/types/our-team";

const { data } = await useFetch<OurTeamResponse>("/api/our-team/en");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Hero
      :data="data as OurTeamResponse"
      :all-corners-rounded="true"
      button-b-g="var(--gold)"
      button-text-color="var(--cream)"
      hero-b-g="var(--navy)"
      hero-text-color="var(--cream)"
      :hero-logo="data?.hero.logoNormal"
    />
    <Team :data="data as OurTeamResponse" direction="ltr" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as OurTeamResponse" />
    </div>
  </div>
</template>
