import { defineEventHandler } from "h3";
import type { OurTeamData } from "~/types/page-builder/our-team-types/our-team";

export default defineEventHandler((): OurTeamData => {
  return {
    section: {
      title: "فريقنا",
      subtitle:
        "نجتمع معاً لنصنع الفارق، تعرّف على الخبراء الذين يقودون رؤيتنا نحو المستقبل",
    },
    members: [
      {
        image: "/page-builder/our-team/member1.jpg",
        name: "سارة أحمد",
        role: "المديرة التنفيذية",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member2.jpg",
        name: "محمد علي",
        role: "مدير التقنية",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member3.jpg",
        name: "ليلى حسن",
        role: "مديرة التسويق",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member4.jpg",
        name: "عمر خالد",
        role: "مدير المبيعات",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member5.jpg",
        name: "فاطمة الزهراء",
        role: "مديرة الموارد البشرية",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member6.jpg",
        name: "كريم يوسف",
        role: "مدير العمليات",
        twitter: "#",
        linkedin: "#",
      },
    ],
  };
});
