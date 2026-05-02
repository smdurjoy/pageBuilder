import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-2";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "Our Featured Services",
      subtitle: "We offer a comprehensive range of integrated solutions",
    },
    slides: [
      {
        id: "1",
        title: "Sustainable Growth and Long-term Partnership",
        image: "/page-builder/banner/bannerImg2.jpg",
        cta: {
          label: "Request Consultation",
          href: "#",
        },
      },
      {
        id: "2",
        title: "Innovative Tech Solutions for Your Business",
        image: "/page-builder/banner/bannerImg2.jpg",
        cta: {
          label: "Start Now",
          href: "#",
        },
      },
      {
        id: "3",
        title: "Specialized Team to Achieve Your Goals",
        image: "/page-builder/banner/bannerImg2.jpg",
        cta: {
          label: "Contact Us",
          href: "#",
        },
      },
    ],
  };
});
