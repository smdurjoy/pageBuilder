<script setup lang="ts">
import { markRaw } from "vue";
import Header1 from "~/components/page-builder/headers/header-1/header.vue";
import Header2 from "~/components/page-builder/headers/header-2/header.vue";
import Header3 from "~/components/page-builder/headers/header-3/header.vue";
import Header4 from "~/components/page-builder/headers/header-4/header.vue";
import Header5 from "~/components/page-builder/headers/header-5/header.vue";

const headers: any[] = [
  { component: markRaw(Header1), name: "Header 1" },
  { component: markRaw(Header2), name: "Header 2" },
  { component: markRaw(Header3), name: "Header 3" },
  { component: markRaw(Header4), name: "Header 4" },
  { component: markRaw(Header5), name: "Header 5" },
];
</script>

<template>
  <div class="bg-[#F4F4F4] min-h-screen" dir="ltr">
    <div v-for="(h, i) in headers" :key="i" class="relative border-b-4 border-gray-300">
      <!-- The Sticky Header -->
      <component :is="h.component" dir="ltr" :isFixed="true" />

      <!-- Dummy Content for this specific header -->
      <div class="px-4 max-w-7xl mx-auto flex flex-col gap-10 py-20">
        <section v-for="j in 3" :key="j" class="h-[300px] bg-white rounded-3xl shadow-sm flex items-center justify-center border border-gray-100">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Dummy Content for Header {{ i + 1 }} - Section {{ j }}</h2>
            <p class="text-gray-500 max-w-md mx-auto leading-relaxed px-4">
              This section is designed to show how Header {{ i + 1 }} behaves when it is fixed at the top of the page while you scroll through this content.
            </p>
          </div>
        </section>
      </div>
    </div>

    <!-- Instructions at the bottom -->
    <div class="py-20 text-center bg-gray-900 text-white">
      <h2 class="text-2xl font-bold mb-4">End of Showcase</h2>
      <p class="opacity-70">All 5 header designs have been displayed in Sticky mode.</p>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
