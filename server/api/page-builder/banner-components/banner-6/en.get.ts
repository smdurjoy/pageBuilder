import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-6";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "Discover Our Success Story",
      subtitle: "See how we help companies achieve their goals through innovative and effective solutions",
    },
    banner: {
      title: "Building the Future of Business Together",
      image: "/page-builder/banner/bannerImg1.jpg",
      cta: {
        label: "Start Your Journey Now",
        href: "#",
      },
    },
  };
});
