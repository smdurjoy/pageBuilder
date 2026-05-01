import { defineEventHandler } from "h3";
import type { OurTeam7Data } from "~/types/page-builder/our-team-types/our-team-7";

export default defineEventHandler((): OurTeam7Data => {
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
        bgColor: "#ECFEFF",
        borderColor: "#A5F3FC",
      },
      {
        image: "/page-builder/our-team/member2.jpg",
        name: "محمد علي",
        role: "مدير التقنية",
        twitter: "#",
        linkedin: "#",
        bgColor: "#FDF2F8",
        borderColor: "#FBCFE8",
      },
      {
        image: "/page-builder/our-team/member3.jpg",
        name: "ليلى حسن",
        role: "مديرة التسويق",
        twitter: "#",
        linkedin: "#",
        bgColor: "#FAF5FF",
        borderColor: "#E9D5FF",
      },
      {
        image: "/page-builder/our-team/member4.jpg",
        name: "عمر خالد",
        role: "مدير المبيعات",
        twitter: "#",
        linkedin: "#",
        bgColor: "#EFF6FF",
        borderColor: "#BFDBFE",
      },
      {
        image: "/page-builder/our-team/member5.jpg",
        name: "فاطمة الزهراء",
        role: "مديرة الموارد البشرية",
        twitter: "#",
        linkedin: "#",
        bgColor: "#F5F3FF",
        borderColor: "#DDD6FE",
      },
      {
        image: "/page-builder/our-team/member6.jpg",
        name: "كريم يوسف",
        role: "مدير العمليات",
        twitter: "#",
        linkedin: "#",
        bgColor: "#FFF1F2",
        borderColor: "#FECDD3",
      },
      {
        image: "/page-builder/our-team/member7.jpg",
        name: "نور الدين",
        role: "مديرة التصميم",
        twitter: "#",
        linkedin: "#",
        bgColor: "#F0FDFA",
        borderColor: "#99F6E4",
      },
      {
        image: "/page-builder/our-team/member8.jpg",
        name: "أحمد عبدالله",
        role: "مدير المشاريع",
        twitter: "#",
        linkedin: "#",
        bgColor: "#ECFEFF",
        borderColor: "#A5F3FC",
      },
    ],
  };
});
