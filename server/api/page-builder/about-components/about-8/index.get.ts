import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-8";

export default defineEventHandler((): AboutData => {
  return {
    header: {
      title: "من نحن",
      description:
        "نحن شركة متخصصة في تقديم حلول تقنية متكاملة تساعد الشركات على النمو والتطور في العصر الرقمي. نجمع بين الابتكار والخبرة لتقديم خدمات استثنائية.",
      subDescription:
        "فريقنا المتنوع يعمل بشغف لتحقيق رؤية مشتركة: بناء مستقبل تقني أفضل للجميع. نؤمن بالتعاون والإبداع والتميز في كل ما نقوم به.",
    },
    gallery: {
      tall: "/page-builder/about/about4CardImg3.jpg",
      landscape1: "/page-builder/about/about4CardImg1.jpg",
      landscape2: "/page-builder/about/about4CardImg2.jpg",
    },
    features: [
      {
        title: "الجودة",
        description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا",
        icon: "check-circle",
        bgColor: "#072b54", // Deep Blue
      },
      {
        title: "الابتكار",
        description: "نستخدم أحدث التقنيات لتقديم حلول مبتكرة",
        icon: "zap",
        bgColor: "#ad996f", // Golden
      },
      {
        title: "الفريق",
        description: "فريق متخصص من الخبراء في مختلف المجالات",
        icon: "users",
        bgColor: "#0a1d37", // Deep Navy
      },
    ],
  };
});
