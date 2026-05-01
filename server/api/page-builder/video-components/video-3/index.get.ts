import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-3";

export default defineEventHandler((): VideoData => {
  return {
    badge: "مقدمة تعريفية",
    title: "ابدأ رحلتك نحو التميز الرقمي",
    description: "استكشف كيف نساعد الشركات الرائدة في تحقيق التحول الرقمي وبناء حلول مبتكرة تواكب متطلبات العصر الحديث.",
    ctas: [
      { label: "ابدأ الآن", href: "#", variant: "primary" },
      { label: "تعرف أكثر", href: "#", variant: "secondary" },
    ],
    thumbnail: "/video/video3CompImg.jpg",
    bgImage: "/video/video3bgImg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isLive: true,
    liveText: "مباشر",
    stat: {
      value: "500+",
      label: "مشروع ناجح",
    },
  };
});
