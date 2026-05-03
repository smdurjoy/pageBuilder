import { defineEventHandler } from "h3";
import type { Social1Data } from "~/types/page-builder/social-types/social-1";

export default defineEventHandler((): Social1Data => {
  return {
    title: "تابعني على وسائل التواصل",
    description: "اكتشف أحدث المحتوى وأعمالي على مختلف المنصات",
    items: [
      {
        icon: "/page-builder/social/instagram.svg",
        name: "إنستغرام",
        followers: "1.20 ألف متابع",
        link: "https://instagram.com",
        color: "#E1306C",
      },
      {
        icon: "/page-builder/social/facebook.svg",
        name: "فيسبوك",
        followers: "1.20 ألف متابع",
        link: "https://facebook.com",
        color: "#1877F2",
      },
      {
        icon: "/page-builder/social/youtube.svg",
        name: "يوتيوب",
        followers: "1.20 ألف متابع",
        link: "https://youtube.com",
        color: "#FF0000",
      },
      {
        icon: "/page-builder/social/linkedin.svg",
        name: "لينكدإن",
        followers: "1.20 ألف متابع",
        link: "https://linkedin.com",
        color: "#1877F2",
      },
    ],
  };
});
