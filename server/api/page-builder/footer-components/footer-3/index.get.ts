import { defineEventHandler } from "h3";
import type { FooterData } from "~/types/page-builder/footer-types/footer-3";

export default defineEventHandler((): FooterData => {
  return {
    company: {
      name: "شركة الابتكار",
      logo: "/page-builder/footer/footer-logo-gold.png", // I'll assume this exists or use a placeholder
      description: "نحن شركة رائدة في تقديم حلول تقنية مبتكرة تساعد عملائنا على تحقيق أهدافهم وتطوير أعمالهم بكفاءة عالية.",
    },
    quickLinks: {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", href: "#" },
        { label: "الخدمات", href: "#" },
        { label: "المشاريع", href: "#" },
        { label: "المدونة", href: "#" },
        { label: "اتصل بنا", href: "#" },
      ],
    },
    contact: {
      title: "معلومات التواصل",
      items: [
        { value: "+966 50 123 4567", type: "phone" },
        { value: "info@company.com", type: "email" },
      ],
    },
    social: {
      title: "تابعنا",
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
