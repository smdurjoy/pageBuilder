import { defineEventHandler } from "h3";
import type { Booking1Data } from "~/types/page-builder/booking-types/booking-1";

export default defineEventHandler((): Booking1Data => {
  return {
    title: "Enter your details",
    subtitle: "Please enter your basic information to start the appointment booking process.",
    fullName: {
      label: "Full Name",
      placeholder: "Full name...",
      type: "text",
    },
    phone: {
      label: "Mobile Number",
      placeholder: "Mobile number...",
      type: "tel",
    },
    email: {
      label: "Email Address",
      placeholder: "Email address...",
      type: "email",
    },
    notes: {
      label: "Notes",
      placeholder: "Notes...",
    },
    termsTextPart1: "I have read the Terms and Conditions and",
    termsLinkText: "Privacy Policy",
    termsLinkUrl: "#",
    termsTextPart2: "and agree to them.",
    primaryButtonText: "On-site Appointment",
    secondaryButtonText: "Phone Call",
  };
});
