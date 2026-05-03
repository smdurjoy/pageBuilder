<script setup lang="ts">
import { useFetch } from "#app";
import { computed } from "vue";
import { MapPin, Phone } from "lucide-vue-next";
import type { Booking1Data } from "~/types/page-builder/booking-types/booking-1";

const props = defineProps({
  dir: {
    type: String,
    default: "rtl",
    validator: (value: string) => ["rtl", "ltr"].includes(value),
  },
});

const endpoint = computed(() =>
  props.dir === "rtl"
    ? "/api/page-builder/booking-components/booking-1"
    : "/api/page-builder/booking-components/booking-1/en",
);

const { data: bookingData, pending, error } = useFetch<Booking1Data>(endpoint);
</script>

<template>
  <section
    v-if="!pending && !error && bookingData"
    class="pb-book1-container"
    :dir="props.dir"
  >
    <div class="pb-book1-card">
      
      <!-- Header -->
      <div class="pb-book1-header">
        <h2 class="pb-book1-title">{{ bookingData.title }}</h2>
        <p class="pb-book1-desc">{{ bookingData.subtitle }}</p>
      </div>

      <!-- Form -->
      <form class="pb-book1-form" @submit.prevent>
        
        <!-- Row 1: Full Name & Phone -->
        <div class="pb-book1-row-2">
          <div class="pb-book1-form-group">
            <label class="pb-book1-label">{{ bookingData.fullName.label }}</label>
            <input
              :type="bookingData.fullName.type"
              class="pb-book1-input"
              :placeholder="bookingData.fullName.placeholder"
            />
          </div>
          <div class="pb-book1-form-group">
            <label class="pb-book1-label">{{ bookingData.phone.label }}</label>
            <input
              :type="bookingData.phone.type"
              class="pb-book1-input"
              :placeholder="bookingData.phone.placeholder"
            />
          </div>
        </div>

        <!-- Row 2: Email -->
        <div class="pb-book1-form-group">
          <label class="pb-book1-label">{{ bookingData.email.label }}</label>
          <input
            :type="bookingData.email.type"
            class="pb-book1-input"
            :placeholder="bookingData.email.placeholder"
          />
        </div>

        <!-- Row 3: Notes -->
        <div class="pb-book1-form-group">
          <label class="pb-book1-label">{{ bookingData.notes.label }}</label>
          <textarea
            class="pb-book1-textarea"
            :placeholder="bookingData.notes.placeholder"
            rows="4"
          ></textarea>
        </div>

        <!-- Checkbox -->
        <div class="pb-book1-checkbox-group">
          <input type="checkbox" id="pb-book1-terms" class="pb-book1-checkbox" />
          <label for="pb-book1-terms" class="pb-book1-checkbox-label">
            {{ bookingData.termsTextPart1 }}
            <a :href="bookingData.termsLinkUrl" class="pb-book1-link">{{ bookingData.termsLinkText }}</a>
            {{ bookingData.termsTextPart2 }}
          </label>
        </div>

        <!-- Buttons -->
        <div class="pb-book1-actions">
          <button type="submit" class="pb-book1-btn-primary">
            <MapPin class="pb-book1-btn-icon" />
            <span>{{ bookingData.primaryButtonText }}</span>
          </button>
          
          <button type="button" class="pb-book1-btn-secondary">
            <Phone class="pb-book1-btn-icon" />
            <span>{{ bookingData.secondaryButtonText }}</span>
          </button>
        </div>

      </form>
    </div>
  </section>

  <!-- Loading State -->
  <div v-else-if="pending" class="pb-book1-loading">
    <div class="pb-book1-skeleton-card"></div>
  </div>
</template>
