import { defineEventHandler } from "h3";
import type { OurServices2Data } from "~/types/page-builder/our-services-types/our-services-2";

export default defineEventHandler((): OurServices2Data => {
  return {
    section: {
      title: "خدماتنا",
      subtitle:
        "نقدم مجموعة شاملة من الخدمات الاحترافية المصممة لتلبية احتياجات عملك وتحقيق أهدافك",
    },
    services: [
      {
        icon: "/page-builder/our-services-icons/creative-design.svg",
        title: "التصميم الإبداعي",
        description:
          "تصاميم احترافية مبتكرة تعكس هوية علامتك التجارية",
        features: ["تصميم الهوية البصرية", "تصميم واجهات المستخدم", "تصميم المواد التسويقية"],
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "التطوير التقني",
        description:
          "حلول برمجية متطورة باستخدام أحدث التقنيات",
        features: ["تطوير تطبيقات الويب", "تطبيقات الجوال", "تصميم المواد التسويقية"],
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "الاستراتيجية التسويقية",
        description:
          "خطط تسويقية محكمة تستهدف جمهورك بدقة",
        features: ["تحليل السوق", "استراتيجيات المحتوى", "إدارة الحملات"],
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "إدارة العلاقات",
        description:
          "بناء وتعزيز العلاقات مع عملائك",
        features: ["أنظمة CRM", "خدمة العملاء", "برامج الولاء"],
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "تحليل البيانات",
        description:
          "استخراج رؤى قيمة من بياناتك",
        features: ["تقارير مخصصة", "لوحات تحكم تفاعلية", "تحليل الأداء"],
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        title: "الأمن السيبراني",
        description:
          "حماية شاملة لأصولك الرقمية",
        features: ["فحص الثغرات", "حماية البيانات", "مراقبة الأمان"],
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
    ],
  };
});
