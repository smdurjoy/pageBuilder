import { defineEventHandler } from "h3";
import type { OurServices5Data } from "~/types/page-builder/our-services-types/our-services-5";

export default defineEventHandler((): OurServices5Data => {
  return {
    section: {
      title: "خدماتنا",
      subtitle:
        "نقدم مجموعة شاملة من الخدمات الاحترافية المصممة لتلبية احتياجات عملك وتحقيق أهدافك",
    },
    services: [
      {
        image: "/page-builder/our-services-img/service5Img1.jpg",
        icon: "/page-builder/our-services-icons/creative-design.svg",
        title: "التصميم الإبداعي",
        description:
          "تصاميم احترافية مبتكرة تعكس هوية علامتك التجارية وتجذب انتباه جمهورك المستهدف بطرق فريدة ومعبرة",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img2.jpg",
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "التطوير التقني",
        description:
          "حلول برمجية متطورة باستخدام أحدث التقنيات لتحويل أفكارك إلى واقع رقمي متقدم وفعّال",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img3.jpg",
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "الاستراتيجية التسويقية",
        description:
          "خطط تسويقية محكمة تستهدف جمهورك بدقة وتحقق أهدافك التجارية بكفاءة عالية",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img4.jpg",
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "إدارة العلاقات",
        description:
          "بناء وتعزيز العلاقات مع عملائك من خلال حلول CRM متقدمة وخدمة عملاء استثنائية",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img5.jpg",
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "تحليل البيانات",
        description:
          "استخراج رؤى قيمة من بياناتك لاتخاذ قرارات مدروسة تدفع نمو أعمالك للأمام",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img6.jpg",
        icon: "/page-builder/our-services-icons/security.svg",
        title: "الأمن السيبراني",
        description:
          "حماية شاملة لأصولك الرقمية وبيانات عملائك من التهديدات السيبرانية المتطورة",
        linkText: "اعرف المزيد",
        linkHref: "#",
      },
    ],
  };
});
