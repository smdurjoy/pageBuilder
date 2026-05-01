import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-4";

export default defineEventHandler((): VideoData => {
  return {
    header: {
      title: "جولة داخل شركتنا",
      subtitle: "تعرف على بيئة العمل لدينا والفريق المتميز الذي يعمل على تحقيق أهدافك",
    },
    card: {
      thumbnail: "/video/video4Img.jpg",
      badge: "حصري",
      title: "كيف نبني حلولاً تقنية متميزة",
      description: "شاهد العملية الكاملة من التخطيط والتصميم وحتى التنفيذ والإطلاق، وكيف نضمن تقديم أفضل النتائج لعملائنا",
      duration: "5:30 دقيقة",
      views: "12,543 مشاهدة",
      shareLabel: "مشاركة",
    },
    footer: {
      ctaLabel: "استكشف المزيد من الفيديوهات",
      ctaHref: "#",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };
});
