import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-6";

export default defineEventHandler((): VideoData => {
  return {
    title: "مقدمة عن خدماتنا المتكاملة",
    subtitle: "شاهد كيف نقوم بتحويل الأفكار إلى واقع ملموس من خلال عملياتنا الاحترافية وفريقنا المتميز",
    thumbnail: "/video/video1Bg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
  };
});
