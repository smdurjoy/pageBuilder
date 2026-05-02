import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-10";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "حلولنا المتنوعة",
      subtitle: "نوفر مجموعة واسعة من الخدمات الاحترافية",
    },
    cards: [
      {
        title: "التصميم الإبداعي",
        image: "/page-builder/banner/banner4Card3.png",
        cta: {
          label: "اعرف أكثر",
          href: "#",
        },
      },
      {
        title: "التسويق الرقمي",
        image: "/page-builder/banner/banner3Card1.jpg",
        cta: {
          label: "اعرف أكثر",
          href: "#",
        },
      },
      {
        title: "التطوير التقني",
        image: "/page-builder/banner/banner5card3.jpg",
        cta: {
          label: "اعرف أكثر",
          href: "#",
        },
      },
      {
        title: "الاستشارات",
        image: "/page-builder/banner/banner5card4.jpg",
        cta: {
          label: "اعرف أكثر",
          href: "#",
        },
      },
    ],
  };
});
