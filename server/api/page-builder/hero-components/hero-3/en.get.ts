import { defineEventHandler } from "h3";
import type { Hero3Data } from "~/types/page-builder/heros-3";

export default defineEventHandler((): Hero3Data => {
  return {
    navbar: {
      logoText: "Logo",
      menus: [
        { title: "Home", link: "#" },
        { title: "Categories", link: "#" },
        { title: "About Us", link: "#" },
        { title: "Gallery", link: "#" },
        { title: "Blog", link: "#" },
        { title: "Contact Us", link: "#" },
      ],
      actionText: "Request Help",
      actionLink: "#",
      langIcon: "/page-builder/heros-icons/Globe Icon.png",
      profileIcon: "/page-builder/heros-icons/Profile Icon.png",
    },
    content: {
      title: "Ready-made Hotel Furnishing from Order to Delivery",
      description:
        "We provide you with a professional furnishing solution, carefully pre-designed, and ready for quick execution... everything you need in one package",
      primaryButtonText: "Order Now",
      primaryButtonLink: "#",
      secondaryButtonText: "Browse Packages",
      secondaryButtonLink: "#",
    },
    gallery: [
      { src: "/hero/hero3Img1.png", alt: "Luxury living room" },
      { src: "/hero/hero3Img2.png", alt: "Modern lounge" },
      { src: "/hero/hero3Img3.png", alt: "Hotel bedroom" },
      { src: "/hero/hero4Img4.png", alt: "Comfortable lounge" },
    ],
  };
});
