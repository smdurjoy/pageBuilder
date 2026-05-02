import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-3";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "مجالات تخصصنا",
      subtitle: "نركز على تقديم أفضل الحلول في مجالين رئيسيين",
    },
    cards: [
      {
        title: "استراتيجيات تسويقية ذكية",
        image: "/page-builder/banner/banner3Card1.jpg",
        cta: {
          label: "اكتشف المزيد",
          href: "#",
        },
      },
      {
        title: "شراكات استراتيجية",
        image: "/page-builder/banner/banner3Card2.jpg",
        cta: {
          label: "تواصل معنا",
          href: "#",
        },
      },
    ],
  };
});
