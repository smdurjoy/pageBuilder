import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-9";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "Why Us?",
      subtitle: "We stand out with three core pillars that make us the ideal choice",
    },
    cards: [
      {
        id: "1",
        title: "Integrated Business Solutions",
        image: "/page-builder/banner/banner4Card1.png",
        cta: {
          label: "Start Now",
          href: "#",
        },
      },
      {
        id: "2",
        title: "24/7 Customer Support",
        image: "/page-builder/banner/banner4Card2.jpg",
        cta: {
          label: "Talk to Us",
          href: "#",
        },
      },
      {
        id: "3",
        title: "Distinctive Creative Designs",
        image: "/page-builder/banner/banner4Card3.png",
        cta: {
          label: "Our Work",
          href: "#",
        },
      },
    ],
  };
});
