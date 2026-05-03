import { defineEventHandler } from "h3";
import type { Booking1Data } from "~/types/page-builder/booking-types/booking-1";

export default defineEventHandler((): Booking1Data => {
  return {
    title: "أدخل بياناتك",
    subtitle: "يرجى إدخال معلوماتك الأساسية لبدء عملية حجز الموعد.",
    fullName: {
      label: "الاسم الكامل",
      placeholder: "الاسم الكامل...",
      type: "text",
    },
    phone: {
      label: "رقم الجوال",
      placeholder: "رقم الجوال...",
      type: "tel",
    },
    email: {
      label: "البريد الإلكتروني",
      placeholder: "البريد الإلكتروني...",
      type: "email",
    },
    notes: {
      label: "ملاحظات",
      placeholder: "ملاحظات...",
    },
    termsTextPart1: "لقد قرأت الشروط والأحكام و",
    termsLinkText: "سياسة الخصوصية",
    termsLinkUrl: "#",
    termsTextPart2: "وأوافق عليها.",
    primaryButtonText: "موعد في الموقع",
    secondaryButtonText: "مكالمة هاتفية",
  };
});
