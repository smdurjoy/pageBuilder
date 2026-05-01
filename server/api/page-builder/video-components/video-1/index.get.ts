import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-1";

export default defineEventHandler((): VideoData => {
  return {
    title: "اكتشف قصة نجاحنا",
    subtitle: "شاهد كيف نساعد الشركات على تحقيق أهدافها من خلال حلول مبتكرة وفعالة",
    thumbnail: "/video/video1Bg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "3:45",
  };
});
