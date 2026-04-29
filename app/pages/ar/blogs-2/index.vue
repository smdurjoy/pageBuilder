<script setup lang="ts">
import Blogs from "~/components/ar/blog-1/blogs.vue";
import Hero from "~/components/ar/blog-1/hero.vue";
import Footer from "~/components/ar/home/dark/footer.vue";
import LegalSupport from "~/components/ar/landing-page-1/legal-support.vue";
import type { BlogResponse } from "~/types/blogs";

const { data } = await useFetch<BlogResponse>("/api/blogs");
</script>

<template>
  <div class="bg-white w-full min-h-screen" dir="rtl">
    <Hero
      :data="data as BlogResponse"
      :all-corners-rounded="true"
      button-b-g="var(--cream)"
      button-text-color="var(--navy)"
      hero-b-g="var(--gold)"
      hero-text-color="var(--cream)"
      :hero-logo="data?.hero.logoLight"
    />
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
