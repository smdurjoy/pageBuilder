import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-6";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "اكتشف قصة نجاحنا",
      subtitle: "شاهد كيف نساعد الشركات على تحقيق أهدافها من خلال حلول مبتكرة وفعالة",
    },
    banner: {
      title: "نبني مستقبل الأعمال معاً",
      image: "/page-builder/banner/bannerImg1.jpg",
      cta: {
        label: "ابدأ رحلتك الآن",
        href: "#",
      },
    },
  };
});
