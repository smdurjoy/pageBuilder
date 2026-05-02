import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-8";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "Our Areas of Expertise",
      subtitle: "We focus on providing the best solutions in two key areas",
    },
    cards: [
      {
        title: "Smart Marketing Strategies",
        image: "/page-builder/banner/banner3Card1.jpg",
        cta: {
          label: "Discover More",
          href: "#",
        },
      },
      {
        title: "Strategic Partnerships",
        image: "/page-builder/banner/banner3Card2.jpg",
        cta: {
          label: "Contact Us",
          href: "#",
        },
      },
    ],
  };
});
