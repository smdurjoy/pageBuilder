<script setup lang="ts">
import Hero from "~/components/ar/blog-5/hero.vue";
import Blogs from "~/components/ar/blogs-6/blogs.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import Header from "~/components/ar/landing-page-1/header.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import type { BlogResponse } from "~/types/blogs";
import type { LandingPage1Response } from "~/types/landing-page-1";

const { data } = await useFetch<BlogResponse>("/api/blogs");
const { data: landingPage1Data } = await useFetch<LandingPage1Response>(
  "/api/landing-page-1",
);
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Header :data="landingPage1Data as LandingPage1Response" />
    <Hero :data="data as BlogResponse" />
    <Blogs :data="data as BlogResponse" direction="rtl" />
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
