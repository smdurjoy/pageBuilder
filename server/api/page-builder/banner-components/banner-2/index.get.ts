import { defineEventHandler } from "h3";
import type { BannerData } from "~/types/page-builder/banner-types/banner-2";

export default defineEventHandler((): BannerData => {
  return {
    header: {
      title: "خدماتنا المميزة",
      subtitle: "نقدم مجموعة شاملة من الحلول المتكاملة",
    },
    slides: [
      {
        id: "1",
        title: "نمو مستدام وشراكة طويلة الأمد",
        image: "/page-builder/banner/bannerImg2.jpg",
        cta: {
          label: "اطلب استشارة",
          href: "#",
        },
      },
      {
        id: "2",
        title: "حلول تقنية مبتكرة لأعمالك",
        image: "/page-builder/banner/bannerImg2.jpg",
        cta: {
          label: "ابدأ الآن",
          href: "#",
        },
      },
      {
        id: "3",
        title: "فريق متخصص لتحقيق أهدافك",
        image: "/page-builder/banner/bannerImg2.jpg",
        cta: {
          label: "تواصل معنا",
          href: "#",
        },
      },
    ],
  };
});
