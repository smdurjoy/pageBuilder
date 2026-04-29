<script setup lang="ts">
import Services from "~/components/ar/about-us-1/services.vue";
import Trust from "~/components/ar/about-us-2/trust.vue";
import Header from "~/components/ar/about-us-3/header.vue";
import Hero from "~/components/ar/about-us-3/hero.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import Accreditations from "~/components/ar/landing-page-1/accreditations.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import Reviews from "~/components/ar/landing-page-1/reviews.vue";
import type {
  AboutUsResponse,
  ServicesType,
  TrustType,
} from "~/types/about-us";
import type {
  AccreditationsType,
  LandingPage1Response,
  LegalSupportType,
  ReviewType,
} from "~/types/landing-page-1";

const { data } = await useFetch<AboutUsResponse>("/api/about-us/en");
const { data: landingPage1Data } = await useFetch<LandingPage1Response>(
  "/api/landing-page-1/en",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Header :data="landingPage1Data as LandingPage1Response" />
    <Hero
      :data="data as AboutUsResponse"
      :all-corners-rounded="true"
      direction="ltr"
    />
    <Trust :data="data?.trust as TrustType" />
    <Services :data="data?.services as ServicesType" :image-blend="true" />
    <Accreditations
      :data="landingPage1Data?.accreditations as AccreditationsType"
      direction="ltr"
    />
    <Reviews
      :data="landingPage1Data?.reviews as ReviewType"
      direction="ltr"
      :header-centered="true"
    />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <LegalSupport
        :data="landingPage1Data?.legalSupport as LegalSupportType"
      />
    </div>
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as AboutUsResponse" :socials-exist="false" />
    </div>
  </div>
</template>
