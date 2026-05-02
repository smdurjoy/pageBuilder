import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-4";

export default defineEventHandler((): AboutData => {
  return {
    header: {
      title: "About Us",
      description: "We are a company specialized in providing integrated technical solutions that help companies grow and evolve in the digital age. We combine innovation and expertise to provide exceptional services.",
      subDescription: "Our diverse team works with passion to achieve a shared vision: building a better technical future for everyone. We believe in collaboration, creativity, and excellence in everything we do.",
    },
    gallery: [
      "/page-builder/about/about4CardImg1.jpg",
      "/page-builder/about/about4CardImg2.jpg",
      "/page-builder/about/about4CardImg3.jpg",
    ],
    features: [
      {
        title: "The Team",
        description: "A specialized team of experts in various fields",
        icon: "users",
        color: "#e6fffa",
      },
      {
        title: "Innovation",
        description: "We use the latest technologies to provide innovative solutions",
        icon: "zap",
        color: "#f5f3ff",
      },
      {
        title: "Quality",
        description: "We adhere to the highest quality standards in all our services",
        icon: "check-circle",
        color: "#ebf8ff",
      },
    ],
  };
});
