import { defineEventHandler } from "h3";
import type { OurServicesData } from "~/types/page-builder/our-services-types/our-services";

export default defineEventHandler((): OurServicesData => {
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
          "تصاميم احترافية مبتكرة تعكس هوية علامتك التجارية وتجذب انتباه جمهورك المستهدف",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "التطوير التقني",
        description:
          "حلول برمجية متطورة باستخدام أحدث التقنيات لتحويل أفكارك إلى واقع رقمي",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "الاستراتيجية التسويقية",
        description:
          "خطط تسويقية محكمة تستهدف جمهورك بدقة وتحقق أهدافك التجارية بكفاءة",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "إدارة العلاقات",
        description:
          "بناء وتعزيز العلاقات مع عملائك من خلال حلول CRM متقدمة وخدمة متميزة",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "تحليل البيانات",
        description:
          "استخراج رؤى قيمة من بياناتك لاتخاذ قرارات مدروسة تدفع نمو أعمالك",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        title: "الأمن السيبراني",
        description:
          "حماية شاملة لأصولك الرقمية وبيانات عملائك من التهديدات السيبرانية",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
    ],
  };
});
