import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-8";

export default defineEventHandler((): VideoData => {
  return {
    header: {
      title: "جولة داخل شركتنا",
      subtitle:
        "تعرف على بيئة العمل لدينا والفريق المتميز الذي يعمل على تحقيق أهدافك",
    },
    card: {
      badge: "حصري",
      thumbnail: "/video/video4Img.jpg",
      title: "كيف نبني حلولاً تقنية متميزة",
      description:
        "شاهد العملية الكاملة من التخطيط والتصميم وحتى التنفيذ والإطلاق، وكيف نضمن تقديم أفضل النتائج لعملائنا",
      duration: "5:30 دقيقة",
      views: "12,543 مشاهدة",
      shareLabel: "مشاركة",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    footer: {
      ctaLabel: "استكشف المزيد من الفيديوهات",
      ctaHref: "#",
    },
  };
});
