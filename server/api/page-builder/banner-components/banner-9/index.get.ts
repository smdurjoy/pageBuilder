import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-9";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "لماذا نحن؟",
      subtitle: "نتميز بثلاث ركائز أساسية تجعلنا الخيار الأمثل",
    },
    cards: [
      {
        id: "1",
        title: "حلول أعمال متكاملة",
        image: "/page-builder/banner/banner4Card1.png",
        cta: {
          label: "ابدأ الآن",
          href: "#",
        },
      },
      {
        id: "2",
        title: "دعم العملاء على مدار الساعة",
        image: "/page-builder/banner/banner4Card2.jpg",
        cta: {
          label: "تحدث معنا",
          href: "#",
        },
      },
      {
        id: "3",
        title: "تصاميم إبداعية مميزة",
        image: "/page-builder/banner/banner4Card3.png",
        cta: {
          label: "شاهد أعمالنا",
          href: "#",
        },
      },
    ],
  };
});
