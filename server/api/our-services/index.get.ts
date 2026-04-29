import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    hero: {
      logo: `${API_BASE}/home/logo-dark.png`,
      logoLight: `${API_BASE}/home/logo-light.png`,
      heroImage: `${API_BASE}/home/hero-dark.png`,
      heroImageLight: `${API_BASE}/about-us-1/hero.jpg`,
      heroMask: `${API_BASE}/landing-page-3/hero-mask.png`,
      heroImage2: `${API_BASE}/about-us-1/about-us-2-hero.png`,
      heroImage3: `${API_BASE}/about-us-1/about-us-3-hero.png`,
      heroImage4: `${API_BASE}/about-us-1/about-us-3-hero.png`,
      heroab1: `${API_BASE}/about-us-1/heroab1.png`,
      heroab2: `${API_BASE}/about-us-1/heroab2.png`,
      heroab3: `${API_BASE}/about-us-1/heroab3.jpg`,
      ourServicesMask: `${API_BASE}/our-services/services/hero-mask.png`,

      nav: [
        { name: "الرئيسية", link: "#" },
        { name: "من نحن", link: "#" },
        { name: "خدماتنا", link: "#" },
        { name: "فريق العمل", link: "#" },
        { name: "المدونة", link: "#" },
        { name: "تواصل معنا", link: "#" },
      ],

      title: "خدمات قانونية موثوقة باحترافية عالية",
      description:
        "نقدم خدمات محاماة واستشارات قانونية متكاملة للأفراد والشركات في المملكة العربية السعودية، وفق أعلى المعايير المهنية وبما يتوافق مع الأنظمة المعمول بها.",
      buttonText: "طلب استشارة قانونية",
    },

    services: [
      {
        title: "الاستشارات القانونية",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "الاستشارات القانونية",
            description:
              "تقديم استشارات قانونية دقيقة تساعدك على اتخاذ قرارات مدروسة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
            breakCrumbs: [
              "الرئيسية",
              "فريق العمل",
              "المحامي عبدالله بن محمد القحطاني",
            ],
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "التقاضي والتمثيل أمام المحاكم",
            description: "تمثيل قانوني احترافي أمام مختلف الجهات القضائية.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "قضايا الشركات والقانون التجاري",
            description:
              "دعم قانوني متكامل للشركات في مختلف معاملاتها ونزاعاتها.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "قضايا الشركات والقانون التجاري",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "صياغة ومراجعة العقود",
            description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "القضايا المدنية والجنائية",
            description:
              "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "التحكيم وتسوية النزاعات",
            description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "صياغة ومراجعة العقود",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "صياغة ومراجعة العقود",
            description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "القضايا المدنية والجنائية",
            description:
              "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "التحكيم وتسوية النزاعات",
            description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "القضايا المدنية",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "صياغة ومراجعة العقود",
            description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "القضايا المدنية والجنائية",
            description:
              "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "التحكيم وتسوية النزاعات",
            description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "القضايا الجزائية (الجنائية)",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "صياغة ومراجعة العقود",
            description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "القضايا المدنية والجنائية",
            description:
              "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "التحكيم وتسوية النزاعات",
            description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "قضايا الأحوال الشخصية",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "صياغة ومراجعة العقود",
            description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "القضايا المدنية والجنائية",
            description:
              "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "التحكيم وتسوية النزاعات",
            description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "القانون العمالي",
        linkText: "شاهد الكل",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "صياغة ومراجعة العقود",
            description: "إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "القضايا المدنية والجنائية",
            description:
              "التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "التحكيم وتسوية النزاعات",
            description: "حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.",
            linkText: "تفاصيل أكثر",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
    ],

    legalSupport: {
      title: "هل تحتاج إلى دعم قانوني؟",
      description:
        "احصل على استشارة قانونية من فريقنا المتخصص، ودعنا نساعدك في اتخاذ القرار القانوني الصحيح.",
      buttonText: "طلب استشارة قانونية",
    },

    footer: {
      logo: `${API_BASE}/home/logo-dark.png`,

      nav: [
        {
          title: "روابط سريعة",
          items: [
            { name: "الرئيسية", link: "#" },
            { name: "من نحن", link: "#" },
            { name: "الخدمات", link: "#" },
            { name: "فريق العمل", link: "#" },
            { name: "المدونة", link: "#" },
            { name: "وظائف", link: "#" },
          ],
        },
        {
          title: "خدماتنا",
          items: [
            { name: "الاستشارات القانونية", link: "#" },
            { name: "التقاضي والتمثيل أمام المحاكم", link: "#" },
            { name: "قضايا الشركات والقانون التجاري", link: "#" },
            { name: "صياغة ومراجعة العقود", link: "#" },
            { name: "القضايا المدنية والجنائية", link: "#" },
            { name: "التحكيم وتسوية النزاعات", link: "#" },
          ],
        },
        {
          title: "المدونة",
          items: [
            { name: "العقود والاتفاقيات", link: "#" },
            { name: "القانون التجاري والشركات", link: "#" },
            { name: "القضايا المدنية", link: "#" },
            { name: "القضايا الجنائية", link: "#" },
            { name: "التحكيم وتسوية النزاعات", link: "#" },
            { name: "أنظمة ولوائح سعودية", link: "#" },
            { name: "حوكمة وامتثال", link: "#" },
          ],
        },
      ],

      contact: {
        title: "معلومات التواصل",
        items: [
          { title: "الهاتف:", value: "05XXXXXXXX" },
          { title: "البريد الإلكتروني:", value: "info@lawfirm.sa" },
          { title: "العنوان:", value: "المملكة العربية السعودية" },
        ],
      },

      socials: [
        {
          name: "instagram",
          icon: `${API_BASE}/home/social/instagram.svg`,
          link: "#",
        },
        {
          name: "facebook",
          icon: `${API_BASE}/home/social/facebook.svg`,
          link: "#",
        },
        {
          name: "twitter",
          icon: `${API_BASE}/home/social/twitter.svg`,
          link: "#",
        },
        {
          name: "linkedin",
          icon: `${API_BASE}/home/social/linkedin.svg`,
          link: "#",
        },
        {
          name: "youtube",
          icon: `${API_BASE}/home/social/youtube.svg`,
          link: "#",
        },
      ],

      copyright: "© جميع الحقوق محفوظة - مكتب محاماة",
    },
  };
});
