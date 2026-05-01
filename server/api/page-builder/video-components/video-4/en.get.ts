import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-4";

export default defineEventHandler((): VideoData => {
  return {
    header: {
      title: "A Tour Inside Our Company",
      subtitle: "Get to know our work environment and the distinguished team working to achieve your goals",
    },
    card: {
      thumbnail: "/video/video4Img.jpg",
      badge: "Exclusive",
      title: "How We Build Outstanding Tech Solutions",
      description: "Watch the full process from planning and design to execution and launch, and how we ensure delivering the best results to our clients",
      duration: "5:30 mins",
      views: "12,543 views",
      shareLabel: "Share",
    },
    footer: {
      ctaLabel: "Explore More Videos",
      ctaHref: "#",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };
});
