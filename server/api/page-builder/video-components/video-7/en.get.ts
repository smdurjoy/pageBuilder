import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-7";

export default defineEventHandler((): VideoData => {
  return {
    badge: "Watch Intro Video",
    title: "We Turn Your Vision Into Reality",
    description: "We provide integrated solutions that help companies grow and evolve in the digital age. Learn how we work and the value we add to our clients.",
    features: [
      { label: "Over 10 Years of Experience" },
      { label: "Professional & Specialized Team" },
      { label: "24/7 Technical Support" },
    ],
    cta: {
      label: "Contact Us Now",
      href: "#",
    },
    thumbnail: "/video/video2Bg.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };
});
