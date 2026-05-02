import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-8";

export default defineEventHandler((): AboutData => {
  return {
    header: {
      title: "About Us",
      description:
        "We are a company specialized in providing integrated technical solutions that help businesses grow and evolve in the digital age. We combine innovation and experience to provide exceptional services.",
      subDescription:
        "Our diverse team works with passion to achieve a shared vision: building a better technical future for everyone. We believe in collaboration, creativity, and excellence in everything we do.",
    },
    gallery: {
      tall: "/page-builder/about/about4CardImg3.jpg",
      landscape1: "/page-builder/about/about4CardImg1.jpg",
      landscape2: "/page-builder/about/about4CardImg2.jpg",
    },
    features: [
      {
        title: "Quality",
        description:
          "We commit to the highest quality standards in all our services",
        icon: "check-circle",
        bgColor: "#072b54",
      },
      {
        title: "Innovation",
        description:
          "We use the latest technologies to provide innovative solutions",
        icon: "zap",
        bgColor: "#ad996f",
      },
      {
        title: "Team",
        description: "A specialized team of experts in various fields",
        icon: "users",
        bgColor: "#0a1d37",
      },
    ],
  };
});
