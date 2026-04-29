import { defineEventHandler } from "h3";
import type { Hero4Data } from "~/types/page-builder/heros-4";

export default defineEventHandler((): Hero4Data => {
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
      image: "/page-builder/heros-icons/heros-section2.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  };
});
