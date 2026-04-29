<script setup lang="ts">
import Header1 from "~/components/page-builder/headers/header-1/header.vue";
import Header2 from "~/components/page-builder/headers/header-2/header.vue";
import Header3 from "~/components/page-builder/headers/header-3/header.vue";
import Header4 from "~/components/page-builder/headers/header-4/header.vue";
import Header5 from "~/components/page-builder/headers/header-5/header.vue";
</script>

<template>
  <div class="flex flex-col gap-10 pb-20 bg-[#F4F4F4] min-h-screen">
    <Header1 dir="ltr" />
    <div class="bg-[#969BA1] h-px w-full my-3" />
    <Header2 dir="ltr" />
    <div class="bg-[#969BA1] h-px w-full my-3" />
    <Header3 dir="ltr" />
    <div class="bg-[#969BA1] h-px w-full my-3" />
    <Header4 dir="ltr" />
    <div class="bg-[#969BA1] h-px w-full my-3" />
    <Header5 dir="ltr" />
  </div>
</template>
