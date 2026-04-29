import { defineEventHandler } from "h3";
import type { HeroData } from "~/types/page-builder/heros";

export default defineEventHandler((): HeroData => {
  return {
    navbar: {
      logoText: "شعار",
      menus: [
        { title: "الرئيسية", link: "#" },
        { title: "التصنيفات", link: "#" },
        { title: "من نحن", link: "#" },
        { title: "المعرض", link: "#" },
        { title: "المدونة", link: "#" },
        { title: "اتصل بنا", link: "#" },
      ],
      actionText: "طلب مساعدة",
      actionLink: "#",
      langIcon: "/page-builder/heros-icons/Globe Icon.png",
      profileIcon: "/page-builder/heros-icons/Profile Icon.png",
    },
    content: {
      title: "تأثيث فندقي جاهز من الطلب حتى التسليم",
      description:
        "نقدم لك حل تأثيث احترافي، مصمم مسبقاً بعناية، وجاهز للتنفيذ السريع... كل ما تحتاجه في باكدج واحد",
      primaryButtonText: "اطلب الآن",
      primaryButtonLink: "#",
      secondaryButtonText: "استعرض الباكدجات",
      secondaryButtonLink: "#",
      backgroundImage: "/page-builder/heros-icons/hero-bg-1.jpg",
    },
    bottomBox: {
      title: "مراحل تجهيز وحدتك",
      steps: [
        {
          icon: "/page-builder/heros-icons/building-modern-4.png",
          title: "اختيار الوحدة",
          subtitle: "استوديو أو غرف",
        },
        {
          icon: "/page-builder/heros-icons/Color, Palette.png",
          title: "تخصيص الألوان",
          subtitle: "نمط وتأثيث",
        },
        {
          icon: "/page-builder/heros-icons/checkmark-circle.png",
          title: "اعتماد الباكدج",
          subtitle: "مخطط نهائي",
        },
        {
          icon: "/page-builder/heros-icons/truck-2.png",
          title: "التوريد والتركيب",
          subtitle: "شحن وتجهيز",
        },
        {
          icon: "/page-builder/heros-icons/checkmark-done-check-circle.png",
          title: "التسليم",
          subtitle: "جاهزة للسكن",
        },
      ],
    },
  };
});
