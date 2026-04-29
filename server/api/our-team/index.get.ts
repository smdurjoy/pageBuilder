import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    teamAvatar: `${API_BASE}/our-team/team-avatar.png`,
    hero: {
      logo: `${API_BASE}/our-team/logo.png`,
      logoLight: `${API_BASE}/our-team/logo-light.png`,
      logoNormal: `${API_BASE}/our-team/logo-normal.png`,
      heroImageMask: `${API_BASE}/our-team/hero-mask.png`,

      nav: [
        { name: "الرئيسية", link: "#" },
        { name: "من نحن", link: "#" },
        { name: "خدماتنا", link: "#" },
        { name: "فريق العمل", link: "#" },
        { name: "المدونة", link: "#" },
        { name: "تواصل معنا", link: "#" },
      ],

      title: "نخبة قانونية تعمل باحترافية لحماية حقوقك",
      description:
        "يضم مكتبنا فريقًا من المحامين والمستشارين القانونيين ذوي الخبرة والكفاءة، يعملون بروح الفريق الواحد لتقديم حلول قانونية متكاملة تلبي احتياجات عملائنا وتحقق أفضل النتائج الممكنة.",
      buttonText: "طلب استشارة قانونية",
    },

    team: {
      title: "فريقنا القانوني",
      items: [
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المحامي عبدالله بن محمد القحطاني",
          description:
            "محامٍ ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المحامي فهد بن سعود العتيبي",
          description:
            "مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المستشار القانوني أحمد بن خالد الحربي",
          description:
            "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدّم حلولًا قانونية مدروسة تدعم نمو الأعمال.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المحامي عبدالله بن محمد القحطاني",
          description:
            "محامٍ ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المحامي فهد بن سعود العتيبي",
          description:
            "مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المستشار القانوني أحمد بن خالد الحربي",
          description:
            "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدّم حلولًا قانونية مدروسة تدعم نمو الأعمال.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المستشار القانوني أحمد بن خالد الحربي",
          description:
            "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدّم حلولًا قانونية مدروسة تدعم نمو الأعمال.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "المستشار القانوني أحمد بن خالد الحربي",
          description:
            "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدّم حلولًا قانونية مدروسة تدعم نمو الأعمال.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    lawyersDetails: {
      breadCrumbs: [
        "الرئيسية",
        "فريق العمل",
        "المحامي عبدالله بن محمد القحطاني",
      ],
      image: `${API_BASE}/our-team/team-avatar-1.png`,
      title: "المحامي عبدالله بن محمد القحطاني",
      description:
        "محامٍ ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.",
      buttonText: "تفاصيل أكثر",
      aboutLawyer: [
        {
          title: "نبذة عن المحامي",
          description:
            "محامٍ ومستشار قانوني يتمتع بخبرة عملية في القضايا التجارية وصياغة العقود، ويعمل على تقديم حلول قانونية متكاملة تخدم مصالح الشركات والأفراد وفق الأنظمة المعتمدة في المملكة العربية السعودية يمتاز بالدقة في دراسة القضايا، والقدرة على تحليل المخاطر القانونية، وتقديم استشارات واضحة تساعد العملاء على اتخاذ قرارات قانونية صحيحة.",
        },
        {
          title: "مجالات التخصص",
          description:
            "القضايا التجارية وقانون الشركات صياغة ومراجعة العقود والاتفاقيات الاستشارات القانونية للشركات التمثيل القانوني في النزاعات التجارية تسوية النزاعات التعاقدية",
        },
        {
          title: "المؤهلات والخبرة",
          description:
            "محامٍ مرخّص في المملكة العربية السعودية خبرة في التعامل مع ملفات الشركات والأفراد متابعة مستمرة للتحديثات النظامية والتشريعية",
        },
        {
          title: "منهجية العمل",
          description:
            "يحرص على فهم احتياجات العميل بشكل دقيق، ودراسة كل قضية بعناية، مع تقديم حلول قانونية عملية قائمة على الأنظمة واللوائح ذات الصلة، وبما يحقق أفضل النتائج الممكنة.",
        },
      ],
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
