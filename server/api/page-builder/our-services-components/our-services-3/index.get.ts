import { defineEventHandler } from "h3";
import type { OurServices3Data } from "~/types/page-builder/our-services-types/our-services-3";

export default defineEventHandler((): OurServices3Data => {
  return {
    section: {
      title: "خدماتنا",
      subtitle:
        "نقدم مجموعة شاملة من الخدمات الاحترافية المصممة لتلبية احتياجات عملك وتحقيق أهدافك",
    },
    services: [
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "الاستراتيجية التسويقية",
        description:
          "خطط تسويقية محكمة تستهدف جمهورك بدقة وتحقق أهدافك التجارية بكفاءة",
        linkText: "اعرف المزيد",
        linkHref: "#",
        bgColor: "#fdf5e4",
        iconBgColor: "#c9a24d",
        btnColor: "#c9a24d",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "التطوير التقني",
        description:
          "حلول برمجية متطورة باستخدام أحدث التقنيات لتحويل أفكارك إلى واقع رقمي",
        linkText: "اعرف المزيد",
        linkHref: "#",
        bgColor: "#e6f6fb",
        iconBgColor: "#0ea5e9",
        btnColor: "#0ea5e9",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/creative-design.svg",
        title: "التصميم الإبداعي",
        description:
          "تصاميم احترافية مبتكرة تعكس هوية علامتك التجارية وتجذب انتباه جمهورك المستهدف",
        linkText: "اعرف المزيد",
        linkHref: "#",
        bgColor: "#eaedf5",
        iconBgColor: "#1e3a5f",
        btnColor: "#1e3a5f",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        title: "الأمن السيبراني",
        description:
          "حماية شاملة لأصولك الرقمية وبيانات عملائك من التهديدات السيبرانية",
        linkText: "اعرف المزيد",
        linkHref: "#",
        bgColor: "#f3f5f7",
        iconBgColor: "#475569",
        btnColor: "#475569",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "تحليل البيانات",
        description:
          "استخراج رؤى قيمة من بياناتك لاتخاذ قرارات مدروسة تدفع نمو أعمالك",
        linkText: "اعرف المزيد",
        linkHref: "#",
        bgColor: "#fef0e6",
        iconBgColor: "#f97316",
        btnColor: "#f97316",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "إدارة العلاقات",
        description:
          "بناء وتعزيز العلاقات مع عملائك من خلال حلول CRM متقدمة وخدمة متميزة",
        linkText: "اعرف المزيد",
        linkHref: "#",
        bgColor: "#e6f7ef",
        iconBgColor: "#10b981",
        btnColor: "#10b981",
        btnTextColor: "#ffffff",
      },
    ],
  };
});
