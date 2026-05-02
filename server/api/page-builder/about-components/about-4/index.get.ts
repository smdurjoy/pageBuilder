import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-4";

export default defineEventHandler((): AboutData => {
  return {
    header: {
      title: "من نحن",
      description: "نحن شركة متخصصة في تقديم حلول تقنية متكاملة تساعد الشركات على النمو والتطور في العصر الرقمي. نجمع بين الابتكار والخبرة لتقديم خدمات استثنائية.",
      subDescription: "فريقنا المتنوع يعمل بشغف لتحقيق رؤية مشتركة: بناء مستقبل تقني أفضل للجميع. نؤمن بالتعاون والإبداع والتميز في كل ما نقوم به.",
    },
    gallery: [
      "/page-builder/about/about4CardImg1.jpg",
      "/page-builder/about/about4CardImg2.jpg",
      "/page-builder/about/about4CardImg3.jpg",
    ],
    features: [
      {
        title: "الفريق",
        description: "فريق متخصص من الخبراء في مختلف المجالات",
        icon: "users",
        color: "#e6fffa", // Light Teal
      },
      {
        title: "الابتكار",
        description: "نستخدم أحدث التقنيات لتقديم حلول مبتكرة",
        icon: "zap",
        color: "#f5f3ff", // Light Purple
      },
      {
        title: "الجودة",
        description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا",
        icon: "check-circle",
        color: "#ebf8ff", // Light Blue
      },
    ],
  };
});
