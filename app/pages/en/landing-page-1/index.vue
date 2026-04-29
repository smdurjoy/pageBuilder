<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import Accreditations from "~/components/ar/landing-page-1/accreditations.vue";
import Blog from "~/components/ar/landing-page-1/blog.vue";
import Header from "~/components/ar/landing-page-1/header.vue";
import Hero from "~/components/ar/landing-page-1/hero.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import Reviews from "~/components/ar/landing-page-1/reviews.vue";
import Services from "~/components/ar/landing-page-1/services.vue";
import Team from "~/components/ar/landing-page-1/team.vue";
import Trust from "~/components/ar/landing-page-1/trust.vue";
import type {
  AccreditationsType,
  BlogType,
  LandingPage1Response,
  LegalSupportType,
  ReviewType,
  ServicesType,
  TeamType,
  TrustItem,
} from "~/types/landing-page-1";

const { data } = await useFetch<LandingPage1Response>("/api/landing-page-1/en");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Header :data="data as LandingPage1Response" />
    <Hero :data="data as LandingPage1Response" direction="ltr" />
    <Trust :data="data?.trust as TrustItem" />
    <Services :data="data?.services as ServicesType" direction="ltr" />
    <Team :data="data?.team as TeamType" direction="ltr" />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <Blog :data="data?.blog as BlogType" direction="ltr" />
    </div>
    <Accreditations
      :data="data?.accreditations as AccreditationsType"
      direction="ltr"
    />
    <Reviews :data="data?.reviews as ReviewType" direction="ltr" />
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
