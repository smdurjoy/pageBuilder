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

      title: "المدونة القانونية",
      description:
        "نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية.",
      buttonText: "طلب استشارة قانونية",
    },

    blogs: [
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "أهمية الاستشارة القانونية قبل توقيع العقود",
        description:
          "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
        description:
          "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
        description:
          "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "أهمية الاستشارة القانونية قبل توقيع العقود",
        description:
          "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
        description:
          "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
        description:
          "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "أهمية الاستشارة القانونية قبل توقيع العقود",
        description:
          "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
        description:
          "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
        description:
          "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "أهمية الاستشارة القانونية قبل توقيع العقود",
        description:
          "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
        description:
          "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
        description:
          "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "أهمية الاستشارة القانونية قبل توقيع العقود",
        description:
          "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
        description:
          "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
        description:
          "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "أهمية الاستشارة القانونية قبل توقيع العقود",
        description:
          "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
        description:
          "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
        description:
          "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
        linkText: "اقرأ المزيد",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
    ],

    blogs2: [
      {
        sectionTitle: "الاستشارات القانونية",
        sectionLinkText: "شاهد الكل",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title: "أهمية الاستشارة القانونية قبل توقيع العقود",
            description:
              "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
            description:
              "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
            description:
              "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "الاستشارات القانونية",
        sectionLinkText: "شاهد الكل",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title: "أهمية الاستشارة القانونية قبل توقيع العقود",
            description:
              "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
            description:
              "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
            description:
              "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "الاستشارات القانونية",
        sectionLinkText: "شاهد الكل",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title: "أهمية الاستشارة القانونية قبل توقيع العقود",
            description:
              "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
            description:
              "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
            description:
              "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "الاستشارات القانونية",
        sectionLinkText: "شاهد الكل",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title: "أهمية الاستشارة القانونية قبل توقيع العقود",
            description:
              "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
            description:
              "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
            description:
              "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "الاستشارات القانونية",
        sectionLinkText: "شاهد الكل",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title: "أهمية الاستشارة القانونية قبل توقيع العقود",
            description:
              "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟",
            description:
              "شرح مبسّط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة",
            description:
              "نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنّبها منذ البداية. ",
            linkText: "اقرأ المزيد",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
    ],

    blogDetails: {
      breadCrumbs: [
        "الرئيسية",
        "فريق العمل",
        "المحامي عبدالله بن محمد القحطاني",
      ],
      title: "أهمية الاستشارة القانونية قبل توقيع العقود",
      description:
        "تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنّب المخاطر القانونية.",
      description2:
        "مرحبًا بك في الموقع الإلكتروني لمكتبنا القانوني. يهدف هذا الموقع إلى تقديم معلومات عامة عن خدماتنا القانونية، ولا يُعد استخدامه بديلاً عن الاستشارة القانونية المباشرة.",
      p1Title: "فهم بنود العقد بشكل صحيح",
      p1Description:
        "يُشترط أن يكون عمر المستخدم 18 عامًا أو أكثر لاستخدام هذا الموقع. يلتزم المستخدم باستخدام الموقع لأغراض مشروعة فقط، وبما لا يخالف الأنظمة المعمول بها في المملكة العربية السعودية.",
      p2Title: "حماية الحقوق وتجنّب المخاطر",
      p2Description:
        "يقوم المستشار القانوني بمراجعة العقد للتأكد من عدم وجود بنود مجحفة أو التزامات غير متوازنة، كما يعمل على تعديل البنود التي قد تسبّب مخاطر قانونية مستقبلية، سواء كانت مالية أو تنظيمية.",
      p3Title: "التأكد من التوافق مع الأنظمة",
      p3Description:
        "تساعد الاستشارة القانونية على ضمان توافق العقد مع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، مما يقلّل من احتمالية بطلان العقد أو التعرض لمساءلات قانونية لاحقًا.",
      p4Title: "تفادي النزاعات المستقبلية",
      p4Description:
        "العقود الواضحة والمتوازنة تقلّل بشكل كبير من احتمالية حدوث نزاعات بين الأطراف. ومن خلال الاستشارة القانونية، يتم صياغة البنود بطريقة دقيقة تمنع سوء التفسير وتحدّ من الخلافات.",
      p5Title: "دعم اتخاذ القرار بثقة",
      p5Description:
        "عند الحصول على استشارة قانونية مسبقة، يكون الطرف على دراية كاملة بجميع الجوانب القانونية للعقد، مما يساعده على اتخاذ قرار التوقيع بثقة واطمئنان.",
      p6Title: "خاتمة",
      p6Description:
        "الاستشارة القانونية قبل توقيع العقود ليست إجراءً شكليًا، بل هي استثمار حقيقي في حماية الحقوق وضمان استقرار العلاقات التعاقدية. سواء كنت فردًا أو شركة، فإن الاستعانة بمستشار قانوني مختص قبل التوقيع خطوة ذكية تحميك من المخاطر وتمنحك راحة البال.",
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
