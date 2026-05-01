import { defineEventHandler } from "h3";
import type { FooterData } from "~/types/page-builder/footer-types/footer-1";

export default defineEventHandler((): FooterData => {
  return {
    company: {
      name: "Innovation Co.",
      description: "We are a leading company providing innovative technical solutions that help our clients achieve their goals and develop their businesses with high efficiency.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#" },
        { label: "Services", href: "#" },
        { label: "About Us", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    contact: {
      title: "Contact Info",
      items: [
        { value: "+966 546879546", type: "phone" },
        { value: "info@Store.com", type: "email" },
      ],
    },
    social: {
      title: "Follow Us",
      links: [
        { platform: "instagram", href: "#" },
        { platform: "tiktok", href: "#" },
        { platform: "youtube", href: "#" },
        { platform: "snapchat", href: "#" },
      ],
    },
    copyright: "All Rights Reserved. 2025 Store Furnishing Co. ©",
  };
});
