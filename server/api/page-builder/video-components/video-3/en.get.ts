import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-3";

export default defineEventHandler((): VideoData => {
  return {
    badge: "Introduction Video",
    title: "Start Your Journey Toward Digital Excellence",
    description: "Explore how we help leading companies achieve digital transformation and build innovative solutions that keep pace with modern requirements.",
    ctas: [
      { label: "Start Now", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "secondary" },
    ],
    thumbnail: "/video/video3CompImg.jpg",
    bgImage: "/video/video3bgImg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isLive: true,
    liveText: "LIVE",
    stat: {
      value: "500+",
      label: "Success Projects",
    },
  };
});
