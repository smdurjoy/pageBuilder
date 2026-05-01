import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-6";

export default defineEventHandler((): VideoData => {
  return {
    title: "Introduction to Our Integrated Services",
    subtitle: "Watch how we transform ideas into tangible reality through our professional processes and outstanding team",
    thumbnail: "/video/video1Bg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
  };
});
