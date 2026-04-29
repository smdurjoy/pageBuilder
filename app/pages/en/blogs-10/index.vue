<script setup lang="ts">
import BlogsDetails from "~/components/ar/blogs-10/blogs-details.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import Header from "~/components/ar/landing-page-1/header.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import type { BlogResponse } from "~/types/blogs";
import type { LandingPage1Response } from "~/types/landing-page-1";

const { data } = await useFetch<BlogResponse>("/api/blogs/en");
const { data: landingPage1Data } = await useFetch<LandingPage1Response>(
  "/api/landing-page-1/en",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="ltr">
    <Header :data="landingPage1Data as LandingPage1Response" />
    <BlogsDetails :data="data as BlogResponse" direction="ltr" />
    <div class="bg-cream mx-4 pb-6 pt-3 rounded-[39px] mt-10">
      <LegalSupport
        :data="data?.legalSupport as BlogResponse['legalSupport']"
      />
    </div>
    <div
      class="bg-navy mx-4 pb-6 pt-3 rounded-[39px] rounded-bl-none rounded-br-none mt-10"
    >
      <Footer :data="data as BlogResponse" />
    </div>
  </div>
</template>
