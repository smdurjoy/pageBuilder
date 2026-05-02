<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import type { ContactData } from "~/types/page-builder/contact-types/contact-6";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/contact-components/contact-6"
    : "/api/page-builder/contact-components/contact-6/en",
);

const { data: contactData, pending, error } = useFetch<ContactData>(endpoint);

const getIcon = (name: string) => {
  if (name === 'mail') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
  if (name === 'phone') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z"></path></svg>';
  if (name === 'map-pin') return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
  if (name === 'send') return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
  return '';
};
</script>

<template>
  <section
    v-if="!pending && !error && contactData"
    class="pb-c6-container"
    :dir="props.dir"
    :style="{ backgroundImage: `url(${contactData.backgroundImage})` }"
  >
    <div class="pb-c6-overlay"></div>
    <div class="pb-c6-wrapper">
      <div class="pb-c6-grid">
        <!-- Form Side (Left for RTL) -->
        <div class="pb-c6-form-card shadow-2xl">
          <h2 class="pb-c6-form-title">{{ contactData.form.title }}</h2>
          <p class="pb-c6-form-desc">{{ contactData.form.description }}</p>

          <form @submit.prevent class="pb-c6-form">
            <div class="pb-c6-form-row">
              <div class="pb-c6-input-group">
                <label class="pb-c6-label">{{ props.dir === 'rtl' ? 'الاسم' : 'Name' }}</label>
                <input type="text" :placeholder="contactData.form.placeholders.name" class="pb-c6-input" />
              </div>
              <div class="pb-c6-input-group">
                <label class="pb-c6-label">{{ props.dir === 'rtl' ? 'البريد الإلكتروني' : 'Email' }}</label>
                <input type="email" :placeholder="contactData.form.placeholders.email" class="pb-c6-input" />
              </div>
            </div>

            <div class="pb-c6-form-row">
              <div class="pb-c6-input-group">
                <label class="pb-c6-label">{{ props.dir === 'rtl' ? 'رقم الهاتف' : 'Phone' }}</label>
                <input type="text" :placeholder="contactData.form.placeholders.phone" class="pb-c6-input" />
              </div>
              <div class="pb-c6-input-group">
                <label class="pb-c6-label">{{ props.dir === 'rtl' ? 'عنوان الرسالة' : 'Subject' }}</label>
                <input type="text" :placeholder="contactData.form.placeholders.subject" class="pb-c6-input" />
              </div>
            </div>

            <div class="pb-c6-input-group full-width">
              <label class="pb-c6-label">{{ props.dir === 'rtl' ? 'الرسالة' : 'Message' }}</label>
              <textarea :placeholder="contactData.form.placeholders.message" class="pb-c6-textarea"></textarea>
            </div>

            <button type="submit" class="pb-c6-btn">
              <span v-html="getIcon('send')" class="pb-c6-btn-icon"></span>
              {{ contactData.form.buttonText }}
            </button>
          </form>
        </div>

        <!-- Info Side -->
        <div class="pb-c6-info-col">
          <h2 class="pb-c6-info-title">{{ contactData.info.title }}</h2>
          <p class="pb-c6-info-desc">{{ contactData.info.description }}</p>

          <div class="pb-c6-info-items-vertical">
            <div v-for="(item, idx) in contactData.info.items" :key="idx" class="pb-c6-info-item">
              <div class="pb-c6-info-content">
                <div class="pb-c6-info-header">
                   <span class="pb-c6-info-label">{{ item.label }}</span>
                   <span class="pb-c6-info-icon-box" v-html="getIcon(item.icon)"></span>
                </div>
                <span class="pb-c6-info-value">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-c6-loading">
    <div class="pb-c6-wrapper">
      <div class="pb-c6-skeleton-grid">
        <div class="pb-c6-skeleton-card"></div>
        <div class="pb-c6-skeleton-info"></div>
      </div>
    </div>
  </div>
</template>
