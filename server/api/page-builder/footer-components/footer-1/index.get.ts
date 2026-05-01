import { defineEventHandler } from "h3";
import type { FooterData } from "~/types/page-builder/footer-types/footer-1";

export default defineEventHandler((): FooterData => {
  return {
    company: {
      name: "شركة الابتكار",
      description: "نحن شركة رائدة في تقديم حلول تقنية مبتكرة تساعد عملائنا على تحقيق أهدافهم وتطوير أعمالهم بكفاءة عالية.",
    },
    quickLinks: {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", href: "#" },
        { label: "الخدمات", href: "#" },
        { label: "من نحن", href: "#" },
        { label: "الأسئلة الشائعة", href: "#" },
        { label: "اتصل بنا", href: "#" },
      ],
    },
    contact: {
      title: "معلومات الاتصال",
      items: [
        { value: "+966 546879546", type: "phone" },
        { value: "info@Store.com", type: "email" },
      ],
    },
    social: {
      title: "تابعنا",
      links: [
        { platform: "instagram", href: "#" },
        { platform: "tiktok", href: "#" },
        { platform: "youtube", href: "#" },
        { platform: "snapchat", href: "#" },
      ],
    },
    copyright: "جميع الحقوق محفوظة. 2025 Store Furnishing Co. ©",
  };
});
