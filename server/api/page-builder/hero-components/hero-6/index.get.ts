import { defineEventHandler } from "h3";
import type { Hero6Data } from "~/types/page-builder/heros-6";

export default defineEventHandler((): Hero6Data => {
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
      description: "نقدم لك حل تأثيث احترافي، مصمم مسبقاً بعناية، وجاهز للتنفيذ السريع... كل ما تحتاجه في باكدج واحد",
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
