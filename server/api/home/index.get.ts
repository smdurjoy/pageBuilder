import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    hero: {
      logo: `${API_BASE}/home/logo-dark.png`,
      logoLight: `${API_BASE}/home/logo-light.png`,
      heroImage: `${API_BASE}/home/hero-dark.png`,
      heroImageLight: `${API_BASE}/home/hero-light.png`,

      nav: [
        { name: "الرئيسية", link: "#" },
        { name: "من نحن", link: "#" },
        { name: "خدماتنا", link: "#" },
        { name: "فريق العمل", link: "#" },
        { name: "المدونة", link: "#" },
        { name: "تواصل معنا", link: "#" },
      ],

      title: "خبرة قانونية موثوقة\nلحماية حقوقك",
      description:
        "نقدّم خدمات قانونية احترافية للأفراد والشركات، تعتمد على الخبرة، النزاهة، والالتزام التام بأعلى المعايير المهنية.",
      buttonText: "طلب استشارة قانونية",
    },

    trust: {
      title: "لماذا يثق بنا عملاؤنا",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "تمثيل قانوني قوي",
          description:
            "ندافع عن حقوق عملائنا أمام الجهات القضائية بكل احترافية وكفاءة.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "خبرة قانونية متخصصة",
          description:
            "فريق من المحامين والمستشارين القانونيين ذوي خبرة واسعة في مختلف المجالات القانونية.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "سرية ومهنية تامة",
          description:
            "نلتزم بأعلى معايير السرية المهنية والأخلاق القانونية في جميع القضايا.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "تمثيل قانوني قوي",
          description:
            "ندافع عن حقوق عملائنا أمام الجهات القضائية بكل احترافية وكفاءة.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "سرية ومهنية تامة",
          description:
            "نلتزم بأعلى معايير السرية المهنية والأخلاق القانونية في جميع القضايا.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "خبرة قانونية متخصصة",
          description:
            "فريق من المحامين والمستشارين القانونيين ذوي خبرة واسعة في مختلف المجالات القانونية.",
        },
      ],
    },

    services: {
      title: "خدماتنا القانونية",
      description:
        "نقدّم خدمات قانونية مبنية على الخبرة والالتزام، مع حلول واضحة وموثوقة تناسب احتياجات عملائنا.",
      items: [
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

    team: {
      title: "فريق العمل",
      description:
        "يضم مكتبنا نخبة من المحامين والمستشارين القانونيين الذين يعملون بروح الفريق لتقديم أفضل الحلول القانونية لعملائنا.",
      items: [
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "المحامي عبدالله بن محمد القحطاني",
          description:
            "محامٍ ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "المحامي فهد بن سعود العتيبي",
          description:
            "مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "المستشار القانوني أحمد بن خالد الحربي",
          description:
            "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدّم حلولًا قانونية مدروسة تدعم نمو الأعمال.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "المحامي عبدالله بن محمد القحطاني",
          description:
            "محامٍ ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "المحامي فهد بن سعود العتيبي",
          description:
            "مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "المستشار القانوني أحمد بن خالد الحربي",
          description:
            "مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدّم حلولًا قانونية مدروسة تدعم نمو الأعمال.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    accreditations: {
      title: "اعتمادات الشركة",
      description:
        "نمتلك اعتمادات وتراخيص مهنية تعكس التزامنا بالمعايير النظامية وأفضل الممارسات في تقديم الخدمات القانونية والاستشارية، محليًا ودوليًا.",
      items: [
        {
          image: `${API_BASE}/home/accreditations/1.png`,
          title: "الهيئة السعودية للمحامين",
          description:
            "مكتبنا مسجل وملتزم بالمعايير المهنية المعتمدة، ونقدّم خدمات قانونية وفق الأنظمة واللوائح ذات العلاقة.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/2.png`,
          title: "وزارة الموارد البشرية والتنمية الاجتماعية",
          description:
            "نقدّم دعمًا في إعداد ومراجعة اللوائح الداخلية والامتثال التنظيمي، بما يضمن توافق المنشأة مع المتطلبات النظامية.",
          linkText: "تفاصيل أكثر",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/3.png`,
          title: "الهيئة السعودية للملكية الفكرية",
          description:
            "نساعد في حماية الحقوق الفكرية عبر إعداد الطلبات والمتطلبات التنظيمية ذات الصلة وتقديم الاستشارات المتخصصة.",
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
          image: `${API_BASE}/home/blog/1.png`,
          title: "أهمية الاستشارة القانونية قبل توقيع العقود",
          description:
            "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
          linkText: "اقرأ المزيد",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/blog/2.png`,
          title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
          description:
            "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
          linkText: "اقرأ المزيد",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/blog/3.png`,
          title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
          description:
            "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية.",
          linkText: "اقرأ المزيد",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
      buttonText: "اقرأ أكثر",
    },

    reviews: {
      title: "آراء عملائنا",
      description:
        "نعتز بثقة عملائنا ونسعى دائمًا لتقديم خدمات قانونية ترتقي لتوقعاتهم.",
      items: [
        {
          review:
            "تعامل راقٍ واحترافيـــة عاليـة، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة.",
          name: "محمد بن عبدالله السبيعي",
          role: "رجل أعمال",
        },
        {
          review:
            "فريق قانوني متميّز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية.",
          name: "سارة بنت خالد العتيبي",
          role: "صاحبة منشأة",
        },
        {
          review:
            "خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية.",
          name: "عبدالرحمن بن فهد القحطاني",
          role: "مدير شركة",
        },
        {
          review:
            "تعامل راقٍ واحترافيـــة عاليـة، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة.",
          name: "محمد بن عبدالله السبيعي",
          role: "رجل أعمال",
        },
        {
          review:
            "فريق قانوني متميّز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية.",
          name: "سارة بنت خالد العتيبي",
          role: "صاحبة منشأة",
        },
        {
          review:
            "خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية.",
          name: "عبدالرحمن بن فهد القحطاني",
          role: "مدير شركة",
        },
      ],
    },

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
