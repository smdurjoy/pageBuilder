<script setup lang="ts">
import Footer from "~/components/ar/home/dark/footer.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import Hero from "~/components/ar/our-services-1/hero.vue";
import Services from "~/components/ar/our-services-1/services.vue";
import type {
  LandingPage1Response,
  LegalSupportType,
} from "~/types/landing-page-1";
import type { OurServicesResponse, ServicesType } from "~/types/our-services";

const { data } = await useFetch<OurServicesResponse>("/api/our-services");
const { data: landingPage1Data } = await useFetch<LandingPage1Response>(
  "/api/landing-page-1",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero :data="data as OurServicesResponse" :all-corners-rounded="true" />
    <Services
      :data="data?.services as ServicesType"
      :minus-items="3"
      :direction="'rtl'"
    />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <LegalSupport
        :data="landingPage1Data?.legalSupport as LegalSupportType"
      />
    </div>
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="landingPage1Data as LandingPage1Response" />
    </div>
  </div>
</template>
