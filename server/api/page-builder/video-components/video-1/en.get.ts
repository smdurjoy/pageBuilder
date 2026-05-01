import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-1";

export default defineEventHandler((): VideoData => {
  return {
    title: "Discover Our Success Story",
    subtitle: "See how we help companies achieve their goals through innovative and effective solutions",
    thumbnail: "/video/video1Bg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "3:45",
  };
});
