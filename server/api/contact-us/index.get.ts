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

      title: "كيف يمكننا مساعدتك؟",
      description:
        "فريقنا القانوني المتخصص جاهز للإجابة على استفساراتك وتقديم الدعم اللازم في مختلف القضايا القانونية، سواء كنت بحاجة إلى استشارة قانونية، متابعة قضية، أو توضيح يتعلق بالخدمات التي نقدّمها.",
      buttonText: "طلب استشارة قانونية",
    },

    formLabels: {
      title: "تواصل معنا الآن",
      description: "املء البيانات لنتواصل معك في أقرب وقت",
      labels: [
        {
          label: "الأسم",
          placeholder: "قم بكتابة اسمك",
        },
        {
          label: "البريد الالكتروني",
          placeholder: "قم بكتابة ايميلك",
        },
        {
          label: "الهاتف",
          placeholder: "+966",
        },
        {
          label: "الموضوع",
          placeholder: "قم بكتابة عنوان الموضوع",
        },
        {
          label: "الرسالة",
          placeholder: "",
        },
      ],
    },

    contactInfo: {
      title: "تواصل معنا بسهولة",
      description:
        "نحن هنا للإجابة عن أسئلتك ومساعدتك في أي وقت. لا تتردد في التواصل معنا عبر الرقم أو الإيميل، أو زيارتنا في العنوان الموضّح أدناه. يسعدنا سماعك دائمًا!",
      items: [
        {
          icon: `${API_BASE}/contact-us/phone.png`,
          title: "الهاتف",
          description: "+96600000000",
        },
        {
          icon: `${API_BASE}/contact-us/email.png`,
          title: "البريد الالكتروني",
          description: "info@example.sa",
        },
        {
          icon: `${API_BASE}/contact-us/address.png`,
          title: "العنوان",
          description: "المملكة العربية السعودية , الرياض",
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
