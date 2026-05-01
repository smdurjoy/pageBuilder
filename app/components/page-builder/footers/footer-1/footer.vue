<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { FooterData } from "~/types/page-builder/footer-types/footer-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/footer-components/footer-1"
    : "/api/page-builder/footer-components/footer-1/en",
);

const { data: footerData, pending, error } = useFetch<FooterData>(endpoint);
</script>

<template>
  <footer
    v-if="!pending && !error && footerData"
    class="pb-f1-container"
    :dir="props.dir"
  >
    <div class="pb-f1-wrapper">
      <div class="pb-f1-grid">
        <!-- Company Column -->
        <div class="pb-f1-col pb-f1-col-company">
          <h2 class="pb-f1-company-name">{{ footerData.company.name }}</h2>
          <p class="pb-f1-company-desc">{{ footerData.company.description }}</p>
        </div>

        <!-- Quick Links Column -->
        <div class="pb-f1-col">
          <h3 class="pb-f1-col-title">{{ footerData.quickLinks.title }}</h3>
          <ul class="pb-f1-links-list">
            <li v-for="(link, idx) in footerData.quickLinks.links" :key="idx">
              <a :href="link.href" class="pb-f1-link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="pb-f1-col">
          <h3 class="pb-f1-col-title">{{ footerData.contact.title }}</h3>
          <ul class="pb-f1-contact-list">
            <li
              v-for="(item, idx) in footerData.contact.items"
              :key="idx"
              class="pb-f1-contact-item"
            >
              <span class="pb-f1-contact-icon">
                <svg
                  v-if="item.type === 'phone'"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span class="pb-f1-contact-value">{{ item.value }}</span>
            </li>
          </ul>
        </div>

        <!-- Social Column -->
        <div class="pb-f1-col">
          <h3 class="pb-f1-col-title">{{ footerData.social.title }}</h3>
          <div class="pb-f1-socials">
            <a
              v-for="(social, idx) in footerData.social.links"
              :key="idx"
              :href="social.href"
              class="pb-f1-social-btn"
              :aria-label="social.platform"
            >
              <!-- Basic mapping of icons -->
              <svg
                v-if="social.platform === 'instagram'"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <svg
                v-else-if="social.platform === 'tiktok'"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.74.12-.69.28-1.27.82-1.58 1.5-.32.76-.28 1.63.07 2.36.4.76 1.13 1.3 1.96 1.41.81.1 1.65-.08 2.33-.53.53-.35.91-.88 1.07-1.49.14-.52.12-1.07.12-1.61l-.01-12.02z"
                />
              </svg>
              <svg
                v-else-if="social.platform === 'youtube'"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
              <svg
                v-else-if="social.platform === 'snapchat'"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2c-.893 0-1.776.108-2.61.32-.9.23-1.7.63-2.32 1.18C6.44 4.05 6 4.71 6 5.43v.15c0 .54.26.9.71 1.15.43.25.96.38 1.44.38.15 0 .31-.01.46-.04.42-.09.78-.34 1.03-.72.24-.37.33-.8.26-1.23-.04-.2-.11-.4-.2-.58.33-.11.69-.17 1.05-.17.89 0 1.77.11 2.61.32.9.23 1.7.63 2.32 1.18.63.55 1.07 1.21 1.07 1.93v.15c0 .54-.26.9-.71 1.15-.43.25-.96.38-1.44.38-.15 0-.31-.01-.46-.04-.42-.09-.78-.34-1.03-.72-.24-.37-.33-.8-.26-1.23.04-.2.11-.4.2-.58-.33-.11-.69-.17-1.05-.17zM12 8c-3.31 0-6 2.69-6 6 0 1.33.43 2.56 1.16 3.56L6.5 21h11l-.66-3.44C17.57 16.56 18 15.33 18 14c0-3.31-2.69-6-6-6z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="pb-f1-divider"></div>

      <!-- Copyright -->
      <div class="pb-f1-bottom">
        <p class="pb-f1-copyright">{{ footerData.copyright }}</p>
      </div>
    </div>
  </footer>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-f1-loading">
    <div class="pb-f1-wrapper">
      <div class="pb-f1-grid">
        <div v-for="i in 4" :key="i" class="pb-f1-skeleton-col"></div>
      </div>
    </div>
  </div>
</template>
