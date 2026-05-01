import { defineEventHandler } from "h3";
import type { OurServices4Data } from "~/types/page-builder/our-services-types/our-services-4";

export default defineEventHandler((): OurServices4Data => {
  return {
    section: {
      title: "خدماتنا",
      subtitle:
        "نقدم مجموعة شاملة من الخدمات الاحترافية المصممة لتلبية احتياجات عملك وتحقيق أهدافك",
    },
    services: [
      {
        icon: "/page-builder/our-services-icons/creative-design.svg",
        number: "01",
        title: "التصميم الإبداعي",
        description:
          "تصاميم احترافية مبتكرة تعكس هوية علامتك التجارية وتجذب انتباه جمهورك المستهدف",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        number: "02",
        title: "التطوير التقني",
        description:
          "حلول برمجية متطورة باستخدام أحدث التقنيات لتحويل أفكارك إلى واقع رقمي",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        number: "03",
        title: "الاستراتيجية التسويقية",
        description:
          "خطط تسويقية محكمة تستهدف جمهورك بدقة وتحقق أهدافك التجارية بكفاءة",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        number: "04",
        title: "إدارة العلاقات",
        description:
          "بناء وتعزيز العلاقات مع عملائك من خلال حلول CRM متقدمة وخدمة متميزة",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        number: "05",
        title: "تحليل البيانات",
        description:
          "استخراج رؤى قيمة من بياناتك لاتخاذ قرارات مدروسة تدفع نمو أعمالك",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        number: "06",
        title: "الأمن السيبراني",
        description:
          "حماية شاملة لأصولك الرقمية وبيانات عملائك من التهديدات السيبرانية",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
    ],
  };
});
