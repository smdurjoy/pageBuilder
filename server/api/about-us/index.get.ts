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

      nav: [
        { name: "الرئيسية", link: "#" },
        { name: "من نحن", link: "#" },
        { name: "خدماتنا", link: "#" },
        { name: "فريق العمل", link: "#" },
        { name: "المدونة", link: "#" },
        { name: "تواصل معنا", link: "#" },
      ],

      title: "من نحن",
      description:
        "نحن مكتب محاماة واستشارات قانونية في المملكة العربية السعودية، نقدم خدمات قانونية موثوقة للأفراد والشركات، ونلتزم بحماية حقوق عملائنا وبناء علاقات قائمة على الثقة والشفافية.",
      buttonText: "طلب استشارة قانونية",
    },

    trust: {
      items: [
        {
          icon: `${API_BASE}/about-us-1/trust/1.png`,
          title: "رسالتنا",
          description:
            "تقديم خدمات قانونية عالية الجودة ترتكز على النزاهة والمهنية، مع الالتزام الكامل بمصالح عملائنا، والعمل على تحقيق أفضل النتائج الممكنة من خلال حلول قانونية مدروسة وعملية.",
        },
        {
          icon: `${API_BASE}/about-us-1/trust/2.png`,
          title: "رؤيتنا",
          description:
            "أن نكون شريكًا قانونيًا موثوقًا ورائدًا، يتميز بالكفاءة والاحترافية، ويسهم في تعزيز العدالة وبناء الثقة داخل المجتمع القانوني في المملكة العربية السعودية.",
        },
        {
          icon: `${API_BASE}/about-us-1/trust/3.png`,
          title: "قيمنا",
          description:
            "نؤمن بأن النزاهة والاحترافية هما أساس العمل القانوني الناجح، لذلك نلتزم بأعلى المعايير الأخلاقية والمهنية في جميع تعاملاتنا.",
        },
      ],
    },

    services: {
      title: "لماذا نحن",
      description:
        "خبرة قانونية راسخة في الأنظمة السعودية، فريق محترف وملتزم، واستشارات واضحة تركز على حماية مصالح العميل وبناء علاقات قائمة على الثقة.",
      items: [
        {
          icon: `${API_BASE}/about-us-1/services/1.jpg`,
          title: "خبرة واسعة في الأنظمة والقوانين السعودية",
          description:
            "نمتلك معرفة عميقة وخبرة عملية في الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، مما يمكننا من تقديم استشارات دقيقة وحلول قانونية فعّالة.",
        },
        {
          icon: `${API_BASE}/about-us-1/services/2.jpg`,
          title: "فريق قانوني مؤهل وملتزم",
          description:
            "يضم فريقنا نخبة من المحامين والمستشارين القانونيين ذوي الكفاءة العالية، يعملون بروح الفريق وبالتزام كامل لتحقيق أفضل النتائج لعملائنا.",
        },
        {
          icon: `${API_BASE}/about-us-1/services/3.png`,
          title: "استشارات قانونية واضحة وعملية",
          description:
            "نحرص على تقديم استشارات قانونية مبسطة وواضحة تساعد عملاءنا على فهم وضعهم القانوني واتخاذ قرارات مدروسة بثقة.",
        },
        {
          icon: `${API_BASE}/about-us-1/services/4.jpg`,
          title: "تركيز كامل على مصلحة العميل وبناء شراكات طويلة الأمد",
          description:
            "إعداد وصياغة ومراجعة العقود بمختلف أنواعها، مع التركيز على وضوح البنود وحماية الحقوق وتقليل المخاطر القانونية.",
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
