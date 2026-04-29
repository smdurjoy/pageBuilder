<script setup lang="ts">
import Hero from "~/components/ar/about-us-2/hero.vue";
import Services from "~/components/ar/about-us-2/services.vue";
import Trust from "~/components/ar/about-us-2/trust.vue";
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

const { data } = await useFetch<AboutUsResponse>("/api/about-us");
const { data: landingPage1Data } = await useFetch<LandingPage1Response>(
  "/api/landing-page-1",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero :data="data as AboutUsResponse" :all-corners-rounded="true" />
    <Trust :data="data?.trust as TrustType" :bg-white="true" />
    <Services :data="data?.services as ServicesType" :image-blend="true" />
    <Accreditations
      :data="landingPage1Data?.accreditations as AccreditationsType"
      direction="rtl"
    />
    <Reviews
      :data="landingPage1Data?.reviews as ReviewType"
      direction="rtl"
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
