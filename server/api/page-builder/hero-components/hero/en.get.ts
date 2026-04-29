import { defineEventHandler } from "h3";
import type { HeroData } from "~/types/page-builder/heros";

export default defineEventHandler((): HeroData => {
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
      backgroundImage: "/page-builder/heros-icons/hero-bg-1.jpg",
    },
    bottomBox: {
      title: "Stages of Equipping Your Unit",
      steps: [
        {
          icon: "/page-builder/heros-icons/building-modern-4.png",
          title: "Choose Unit",
          subtitle: "Studio or Rooms",
        },
        {
          icon: "/page-builder/heros-icons/Color, Palette.png",
          title: "Customize Colors",
          subtitle: "Style and Furnishing",
        },
        {
          icon: "/page-builder/heros-icons/checkmark-circle.png",
          title: "Approve Package",
          subtitle: "Final Plan",
        },
        {
          icon: "/page-builder/heros-icons/truck-2.png",
          title: "Supply and Install",
          subtitle: "Shipping and Equipping",
        },
        {
          icon: "/page-builder/heros-icons/checkmark-done-check-circle.png",
          title: "Delivery",
          subtitle: "Ready to Move In",
        },
      ],
    },
  };
});
