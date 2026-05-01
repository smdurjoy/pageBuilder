import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-7";

export default defineEventHandler((): VideoData => {
  return {
    badge: "شاهد الفيديو التعريفي",
    title: "نحول رؤيتك إلى واقع",
    description: "نحن نقدم حلولاً متكاملة تساعد الشركات على النمو والتطور في العصر الرقمي. تعرف على كيفية عملنا والقيمة التي نضيفها لعملائنا.",
    features: [
      { label: "خبرة أكثر من 10 سنوات" },
      { label: "فريق محترف ومتخصص" },
      { label: "دعم فني على مدار الساعة" },
    ],
    cta: {
      label: "تواصل معنا الآن",
      href: "#",
    },
    thumbnail: "/video/video2Bg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };
});
