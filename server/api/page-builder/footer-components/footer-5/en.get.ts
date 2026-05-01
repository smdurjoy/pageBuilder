import { defineEventHandler } from "h3";
import type { FooterData } from "~/types/page-builder/footer-types/footer-5";

export default defineEventHandler((): FooterData => {
  return {
    company: {
      name: "Innovation Co.",
      logo: "/page-builder/footer/footer-logo-gold.png",
    },
    links: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
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
