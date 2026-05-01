import { defineEventHandler } from "h3";
import type { OurTeam3Data } from "~/types/page-builder/our-team-types/our-team-3";

export default defineEventHandler((): OurTeam3Data => {
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
        bio: "خبير متميز في مجاله مع سنوات من الخبرة في قيادة المشاريع الناجحة وتحقيق الأهداف الاستراتيجية للشركة",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member2.jpg",
        name: "محمد علي",
        role: "مدير التقنية",
        bio: "خبير متميز في مجاله مع سنوات من الخبرة في قيادة المشاريع الناجحة وتحقيق الأهداف الاستراتيجية للشركة",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member3.jpg",
        name: "سارة أحمد",
        role: "المديرة التنفيذية",
        bio: "خبير متميز في مجاله مع سنوات من الخبرة في قيادة المشاريع الناجحة وتحقيق الأهداف الاستراتيجية للشركة",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member4.jpg",
        name: "محمد علي",
        role: "مدير التقنية",
        bio: "خبير متميز في مجاله مع سنوات من الخبرة في قيادة المشاريع الناجحة وتحقيق الأهداف الاستراتيجية للشركة",
        twitter: "#",
        linkedin: "#",
      },
    ],
  };
});
