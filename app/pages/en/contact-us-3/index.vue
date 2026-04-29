<script setup lang="ts">
import ContactInfo from "~/components/ar/contact-us-1/contact-info.vue";
import Hero from "~/components/ar/contact-us-1/hero.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import type { ContactUsResponse } from "~/types/contact-us";

const { data } = await useFetch<ContactUsResponse>("/api/contact-us/en");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Hero
      :data="data as ContactUsResponse"
      :all-corners-rounded="true"
      button-b-g="var(--cream)"
      button-text-color="var(--navy)"
      hero-b-g="var(--navy)"
      hero-title-color="var(--gold-light)"
      hero-text-color="white"
      :hero-logo="data?.hero.logoNormal"
      direction="ltr"
    />
    <ContactInfo :data="data as ContactUsResponse" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as ContactUsResponse" />
    </div>
  </div>
</template>
