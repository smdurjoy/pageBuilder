<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { OurTeamData } from "~/types/page-builder/our-team-types/our-team";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/our-team-components/our-team"
    : "/api/page-builder/our-team-components/our-team/en"
);

const { data: teamData, pending, error } = useFetch<OurTeamData>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && teamData"
    class="pb-ot1-section"
    :dir="props.dir"
  >
    <!-- Section Header -->
    <div class="pb-ot1-header">
      <h2 class="pb-ot1-title">{{ teamData.section.title }}</h2>
      <p class="pb-ot1-subtitle">{{ teamData.section.subtitle }}</p>
    </div>

    <!-- 4-column grid -->
    <div class="pb-ot1-grid">
      <article
        v-for="(member, index) in teamData.members"
        :key="index"
        class="pb-ot1-card"
      >
        <!-- Member photo -->
        <div class="pb-ot1-img-wrap">
          <img :src="member.image" :alt="member.name" class="pb-ot1-img" />
        </div>

        <!-- Info -->
        <div class="pb-ot1-info">
          <h3 class="pb-ot1-name">{{ member.name }}</h3>
          <p class="pb-ot1-role">{{ member.role }}</p>
        </div>

        <!-- Social links -->
        <div class="pb-ot1-socials">
          <a
            v-if="member.twitter"
            :href="member.twitter"
            class="pb-ot1-social-btn"
            aria-label="Twitter"
            target="_blank"
          >
            <!-- X / Twitter icon -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            v-if="member.linkedin"
            :href="member.linkedin"
            class="pb-ot1-social-btn"
            aria-label="LinkedIn"
            target="_blank"
          >
            <!-- LinkedIn icon -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </article>
    </div>
  </section>

  <!-- Loading skeleton -->
  <div v-else-if="pending" class="pb-ot1-loading">
    <div v-for="i in 8" :key="i" class="pb-ot1-skeleton"></div>
  </div>
</template>
