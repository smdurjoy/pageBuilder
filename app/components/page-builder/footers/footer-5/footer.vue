<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { FooterData } from "~/types/page-builder/footer-types/footer-5";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/footer-components/footer-5"
    : "/api/page-builder/footer-components/footer-5/en",
);

const { data: footerData, pending, error } = useFetch<FooterData>(endpoint);
</script>

<template>
  <footer
    v-if="!pending && !error && footerData"
    class="pb-f5-container"
    :dir="props.dir"
  >
    <div class="pb-f5-wrapper">
      <!-- Main Row -->
      <div class="pb-f5-main-row">
        <!-- Brand (Right in RTL, Left in LTR) -->
        <div class="pb-f5-brand">
          <div class="pb-f5-logo-wrap">
            <img :src="footerData.company.logo" :alt="footerData.company.name" class="pb-f5-logo" />
          </div>
          <h2 class="pb-f5-company-name">{{ footerData.company.name }}</h2>
        </div>

        <!-- Links (Middle) -->
        <nav class="pb-f5-nav">
          <ul class="pb-f5-links">
            <li v-for="(link, idx) in footerData.links" :key="idx">
              <a :href="link.href" class="pb-f5-link">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Socials (Left in RTL, Right in LTR) -->
        <div class="pb-f5-socials">
          <a v-for="(social, idx) in footerData.social.links" :key="idx" :href="social.href" class="pb-f5-social-btn" :aria-label="social.platform">
            <svg v-if="social.platform === 'linkedin'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <svg v-else-if="social.platform === 'instagram'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <svg v-else-if="social.platform === 'twitter'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <svg v-else-if="social.platform === 'facebook'" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pb-f5-copyright-wrap">
        <p class="pb-f5-copyright">{{ footerData.copyright }}</p>
      </div>
    </div>
  </footer>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-f5-loading">
    <div class="pb-f5-wrapper">
      <div class="pb-f5-skeleton-row"></div>
    </div>
  </div>
</template>
