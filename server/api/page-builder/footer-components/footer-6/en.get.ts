import { defineEventHandler } from "h3";
import type { FooterData } from "~/types/page-builder/footer-types/footer-6";

export default defineEventHandler((): FooterData => {
  return {
    company: {
      name: "Innovation Co.",
      logo: "/page-builder/footer/footer-logo-gold.png",
      description: "We are a leading company providing innovative technical solutions that help our clients achieve their goals and develop their businesses with high efficiency.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#" },
        { label: "Services", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    contactCards: [
      {
        title: "Call Us",
        subtitle: "Contact us now",
        value: "+966 50 123 4567",
        type: "phone",
      },
      {
        title: "Email Us",
        subtitle: "Send us a message",
        value: "info@company.com",
        type: "email",
      },
    ],
    social: {
      links: [
        { platform: "linkedin", href: "#" },
        { platform: "instagram", href: "#" },
        { platform: "twitter", href: "#" },
        { platform: "facebook", href: "#" },
      ],
    },
    copyright: "© 2026 Innovation Co. All Rights Reserved.",
  };
});
