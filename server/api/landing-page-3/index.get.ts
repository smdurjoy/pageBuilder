import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    services: {
      title: "خدماتنا القانونية",
      description:
        "نقدّم خدمات قانونية مبنية على الخبرة والالتزام، مع حلول واضحة وموثوقة تناسب احتياجات عملائنا.",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "التقاضي والتمثيل أمام المحاكم",
          description: "تمثيل قانوني احترافي أمام مختلف الجهات القضائية.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },

        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "الاستشارات القانونية",
          description:
            "تقديم استشارات قانونية دقيقة تساعدك على اتخاذ قرارات مدروسة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "قضايا الشركات والقانون التجاري",
          description:
            "دعم قانوني متكامل للشركات في مختلف معاملاتها ونزاعاتها.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "صياغة ومراجعة العقود",
          description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },

        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "القضايا المدنية والجنائية",
          description:
            "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "التحكيم وتسوية النزاعات",
          description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    blog: {
      title: "المدونة القانونية",
      description:
        "نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية.",
      items: [
        {
          image: `${API_BASE}/landing-page-3/blog/1.png`,
          title: "أهمية الاستشارة القانونية قبل توقيع العقود",
          description:
            "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
          linkText: "اقرأ المزيد",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-3/blog/2.png`,
          title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
          description:
            "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية.",
          linkText: "اقرأ المزيد",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
      buttonText: "اقرأ أكثر",
    },
  };
});
