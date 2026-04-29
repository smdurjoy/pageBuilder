<script setup lang="ts">
import { cardStyle } from "~/lib/helper";
import type { BlogResponse } from "~/types/blogs";

const props = defineProps<{
  data: BlogResponse;
  minusItems?: number;
  direction?: "rtl" | "ltr";
}>();

const hovered = ref<number | null>(null);

const visibleItems = computed(() => {
  const arr = props.data.blogs2 ?? [];
  return arr.slice(0, Math.max(0, arr.length - 4));
});
</script>

<template>
  <nav
    class="flex items-center space-x-2 text-sm text-navy bg-cream p-4 mt-6"
  >
    <div class="container mx-auto space-x-1">
      <a href="/" class="hover:underline">{{
        data?.blogDetails?.breadCrumbs?.[0]
      }}</a>
      <span>/ </span>
      <a href="/our-services" class="hover:underline">{{
        data?.blogDetails?.breadCrumbs?.[1]
      }}</a>
      <span>/ </span>
      <a href="our-services" class="text-black font-semibold">{{
        data?.blogDetails?.breadCrumbs?.[2]
      }}</a>
    </div>
  </nav>

  <div class="my-10 container mx-auto">
    <h1
      :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
    >
      {{ data.blogDetails.title }}
    </h1>

    <p :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`">
      {{ data.blogDetails.description }}
    </p>
  </div>

  <div class="w-full px-8">
    <img
      src="/blogs/1.jpg"
      class="w-full object-cover rounded-[39px]"
      style="height: 500px"
    />
  </div>
  <div class="container mx-auto">
    <div class="my-10">
      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.description2 }}
      </p>
    </div>

    <div class="my-10">
      <h2
        :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
      >
        {{ data.blogDetails.p1Title }}
      </h2>

      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.p1Description }}
      </p>
    </div>

    <div class="my-10">
      <h2
        :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
      >
        {{ data.blogDetails.p2Title }}
      </h2>

      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.p2Description }}
      </p>
    </div>
    <div class="my-10">
      <h2
        :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
      >
        {{ data.blogDetails.p3Title }}
      </h2>

      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.p3Description }}
      </p>
    </div>

    <div class="my-10">
      <h2
        :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
      >
        {{ data.blogDetails.p4Title }}
      </h2>

      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.p4Description }}
      </p>
    </div>

    <div class="my-10">
      <h2
        :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
      >
        {{ data.blogDetails.p5Title }}
      </h2>

      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.p5Description }}
      </p>
    </div>

    <div class="mt-10 mb-20">
      <h2
        :class="`text-navy text-xl lg:text-2xl xl:text-3xl font-bold leading-snug whitespace-pre-line`"
      >
        {{ data.blogDetails.p6Title }}
      </h2>

      <p
        :class="`text-navy leading-7 md:text-xl lg:text-2xl mt-6 mx-auto`"
      >
        {{ data.blogDetails.p6Description }}
      </p>
    </div>

    <div class="w-full h-0.5 bg-cream my-20" />

    <div
      class="flex flex-col mb-20 mt-20"
      v-for="(blog, idx) in visibleItems"
      :key="idx"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-navy text-xl sm:text-2xl md:text-3xl font-bold">
          {{ blog.sectionTitle }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12 px-3 sm:px-0"
      >
        <Card
          class="py-4 md:py-6 px-3 sm:px-6 flex flex-col text-start bg-white!"
          :style="cardStyle(itemIdx, hovered)"
          @mouseenter="hovered = itemIdx"
          @mouseleave="hovered = null"
          v-for="(item, itemIdx) in blog.items.slice(0, 2)"
          :key="itemIdx"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full object-cover rounded-[39px]"
            style="height: 450px"
          />
          <h3 class="text-navy text-lg lg:text-2xl font-bold">
            {{ item.title }}
          </h3>
          <NuxtLink
            href="#"
            class="flex items-center gap-2 hover:gap-3 transition-all"
          >
            <span class="text-gold-light font-semibold lg:text-lg">
              {{ item.linkText }}
            </span>
            <img
              :src="item.arrowIcon"
              :alt="item.linkText"
              :class="direction == 'ltr' ? 'rotate-180' : ''"
            />
          </NuxtLink>
        </Card>
      </div>
    </div>
  </div>
</template>
