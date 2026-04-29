<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Accreditations from "~/components/ar/landing-page-1/accreditations.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import Reviews from "~/components/ar/landing-page-1/reviews.vue";
import Team from "~/components/ar/landing-page-1/team.vue";
import Trust from "~/components/ar/landing-page-2/trust.vue";
import Blog from "~/components/ar/landing-page-3/blog.vue";
import Hero from "~/components/ar/landing-page-3/hero.vue";
import Services from "~/components/ar/landing-page-3/services.vue";
import type {
  AccreditationsType,
  LandingPage1Response,
  LegalSupportType,
  ReviewType,
  TeamType,
  TrustItem,
} from "~/types/landing-page-1";
import type { LandingPage2Response } from "~/types/landing-page-2";
import type {
  BlogType,
  LandingPage3Response,
  ServicesType,
} from "~/types/landing-page-3";

const { data } = await useFetch<LandingPage1Response>("/api/landing-page-1");
const { data: landingPage2Data } = await useFetch<LandingPage2Response>(
  "/api/landing-page-2",
);
const { data: landingPage3Data } = await useFetch<LandingPage3Response>(
  "/api/landing-page-3",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero :data="data as any" :all-corners-rounded="true" />
    <Trust :data="landingPage2Data?.trust as TrustItem" :bg-white="true" />
    <Services
      :data="landingPage3Data?.services as ServicesType"
      :direction="'rtl'"
    />
    <div class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] mt-20">
      <Accreditations
        :data="data?.accreditations as AccreditationsType"
        direction="rtl"
        :is-landing-page3="true"
      />
    </div>

    <Team :data="data?.team as TeamType" direction="rtl" />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <Blog :data="landingPage3Data?.blog as BlogType" direction="rtl" />
    </div>
    <Reviews
      :data="data?.reviews as ReviewType"
      direction="rtl"
      :header-centered="true"
    />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <LegalSupport :data="data?.legalSupport as LegalSupportType" />
    </div>
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as LandingPage1Response" />
    </div>
  </div>
</template>
