import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-8";

export default defineEventHandler((): VideoData => {
  return {
    header: {
      title: "A Tour Inside Our Company",
      subtitle:
        "Learn about our work environment and the outstanding team working to achieve your goals",
    },
    card: {
      badge: "Exclusive",
      thumbnail: "/video/video4Img.jpg",
      title: "How We Build Outstanding Technical Solutions",
      description:
        "Watch the complete process from planning and design to execution and launch, and how we ensure the best results for our clients",
      duration: "5:30 minutes",
      views: "12,543 views",
      shareLabel: "Share",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    footer: {
      ctaLabel: "Explore More Videos",
      ctaHref: "#",
    },
  };
});
