<script setup lang="ts">
import ContactInfo from "~/components/ar/contact-us-1/contact-info.vue";
import Hero from "~/components/ar/contact-us-1/hero.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import type { ContactUsResponse } from "~/types/contact-us";

const { data } = await useFetch<ContactUsResponse>("/api/contact-us");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero
      :data="data as ContactUsResponse"
      :all-corners-rounded="true"
      button-b-g="var(--navy)"
      button-text-color="var(--cream)"
      hero-b-g="var(--cream)"
      hero-text-color="var(--navy)"
    />
    <ContactInfo :data="data as ContactUsResponse" />
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as ContactUsResponse" />
    </div>
  </div>
</template>
