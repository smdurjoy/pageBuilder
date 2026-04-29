import { defineEventHandler } from "h3";
import type { Hero6Data } from "~/types/page-builder/heros-6";

export default defineEventHandler((): Hero6Data => {
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
      description: "We provide you with a professional furnishing solution, carefully pre-designed, and ready for quick execution... everything you need in one package",
      playStoreIcon: "/page-builder/heros-icons/Playstore.png",
      playStoreLink: "#",
      appStoreIcon: "/page-builder/heros-icons/Apple.png",
      appStoreLink: "#",
      images: [
        "/hero/hero6LeftImg.png",
        "/page-builder/heros-icons/heros-section2.png",
        "/hero/hero6LeftImg.png",
      ],
    },
  };
});
