import { defineEventHandler } from "h3";
import type { Social3Data } from "~/types/page-builder/social-types/social-3";

export default defineEventHandler((): Social3Data => {
  return {
    title: "تابعني على وسائل التواصل",
    description: "اكتشف أحدث المحتوى وأعمالي على مختلف المنصات",
    items: [
      {
        icon: "/page-builder/social/facebook.svg",
        name: "فيسبوك",
        followers: "90 ألف متابع",
        description: "انضم إلى مجتمعنا على فيسبوك لمتابعة التحديثات والأخبار والمحتوى الجديد الذي نشاركه مع مجتمعنا.",
        buttonText: "تابعنا",
        link: "https://facebook.com",
        color: "#1877F2",
      },
      {
        icon: "/page-builder/social/instagram.svg",
        name: "إنستغرام",
        followers: "30 ألف متابع",
        description: "استمتع بصورنا ومقاطع الفيديو من الأحداث واللقطات المميزة عبر إنستغرام.",
        buttonText: "تابعنا",
        link: "https://instagram.com",
        color: "#E1306C",
      },
      {
        icon: "/page-builder/social/linkedin.svg",
        name: "لينكدإن",
        followers: "50 ألف متابع",
        description: "تابع تغريداتنا على لينكدإن للحصول على أخبار سريعة وتحديثات مباشرة.",
        buttonText: "تابعنا",
        link: "https://linkedin.com",
        color: "#0077B5",
      },
      {
        icon: "/page-builder/social/youtube.svg",
        name: "يوتيوب",
        followers: "10 ألف متابع",
        description: "اشترك في قناتنا على يوتيوب لمشاهدة مقاطع الفيديو التعليمية والترفيهية.",
        buttonText: "تابعنا",
        link: "https://youtube.com",
        color: "#FF0000",
      },
    ],
  };
});
