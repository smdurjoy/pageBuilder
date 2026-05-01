import { defineEventHandler } from "h3";
import type { FooterData } from "~/types/page-builder/footer-types/footer-5";

export default defineEventHandler((): FooterData => {
  return {
    company: {
      name: "شركة الابتكار",
      logo: "/page-builder/footer/footer-logo-gold.png",
    },
    links: [
      { label: "الرئيسية", href: "#" },
      { label: "الخدمات", href: "#" },
      { label: "المشاريع", href: "#" },
      { label: "المدونة", href: "#" },
      { label: "اتصل بنا", href: "#" },
    ],
    social: {
      links: [
        { platform: "linkedin", href: "#" },
        { platform: "instagram", href: "#" },
        { platform: "twitter", href: "#" },
        { platform: "facebook", href: "#" },
      ],
    },
    copyright: "© 2026 شركة الابتكار. جميع الحقوق محفوظة.",
  };
});
