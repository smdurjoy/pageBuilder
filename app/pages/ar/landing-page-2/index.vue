<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Hero from "~/components/ar/home/dark/hero.vue";
import Accreditations from "~/components/ar/landing-page-1/accreditations.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import Reviews from "~/components/ar/landing-page-1/reviews.vue";
import Services from "~/components/ar/landing-page-1/services.vue";
import Team from "~/components/ar/landing-page-1/team.vue";
import Blog from "~/components/ar/landing-page-2/blog.vue";
import Trust from "~/components/ar/landing-page-2/trust.vue";
import type {
  AccreditationsType,
  LandingPage1Response,
  LegalSupportType,
  ReviewType,
  ServicesType,
  TeamType,
  TrustItem,
} from "~/types/landing-page-1";
import type { BlogType, LandingPage2Response } from "~/types/landing-page-2";

const { data } = await useFetch<LandingPage1Response>("/api/landing-page-1");
const { data: landingPage2Data } = await useFetch<LandingPage2Response>(
  "/api/landing-page-2",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero :data="data as any" :all-corners-rounded="true" />
    <Trust :data="landingPage2Data?.trust as TrustItem" />
    <Services
      :data="data?.services as ServicesType"
      image-blend-mode="multiply"
    />
    <Team :data="data?.team as TeamType" direction="rtl" />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <Blog :data="landingPage2Data?.blog as BlogType" direction="rtl" />
    </div>
    <Accreditations
      :data="data?.accreditations as AccreditationsType"
      direction="rtl"
    />
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
