import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-5";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "Our Diverse Solutions",
      subtitle: "We provide a wide range of professional services",
    },
    cards: [
      {
        title: "Creative Design",
        image: "/page-builder/banner/banner4Card3.png",
        cta: {
          label: "Learn More",
          href: "#",
        },
      },
      {
        title: "Digital Marketing",
        image: "/page-builder/banner/banner3Card1.jpg",
        cta: {
          label: "Learn More",
          href: "#",
        },
      },
      {
        title: "Tech Development",
        image: "/page-builder/banner/banner5card3.jpg",
        cta: {
          label: "Learn More",
          href: "#",
        },
      },
      {
        title: "Consulting",
        image: "/page-builder/banner/banner5card4.jpg",
        cta: {
          label: "Learn More",
          href: "#",
        },
      },
    ],
  };
});
