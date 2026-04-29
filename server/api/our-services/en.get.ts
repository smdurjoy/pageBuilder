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
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Our Services", link: "#" },
        { name: "Our Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact Us", link: "#" },
      ],

      title: "Reliable Legal Services with High Professionalism",
      description:
        "We provide comprehensive legal services and consultations for individuals and companies in Saudi Arabia, in accordance with the highest professional standards and applicable regulations.",
      buttonText: "Request Legal Consultation",
    },

    services: [
      {
        title: "Legal Consultations",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Legal Consultations",
            description:
              "Providing accurate legal advice to help you make informed decisions.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
            breakCrumbs: [
              "Home",
              "Our Team",
              "Lawyer Abdullah bin Mohammed Al-Qahtani",
            ],
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "Litigation & Court Representation",
            description:
              "Professional legal representation before various judicial authorities.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "Corporate & Commercial Law",
            description:
              "Comprehensive legal support for companies in all transactions and disputes.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "Corporate & Commercial Law",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Contract Drafting & Review",
            description:
              "Preparing and reviewing contracts to protect rights and minimize risks.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "Civil & Criminal Cases",
            description:
              "Handling civil and criminal cases with professionalism and complete confidentiality.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "Arbitration & Dispute Resolution",
            description:
              "Resolving disputes through alternative legal methods that save time and costs.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "Contract Drafting & Review",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Contract Drafting & Review",
            description:
              "Preparing and reviewing contracts to protect rights and minimize risks.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "Civil & Criminal Cases",
            description:
              "Handling civil and criminal cases with professionalism and complete confidentiality.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "Arbitration & Dispute Resolution",
            description:
              "Resolving disputes through alternative legal methods that save time and costs.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "Civil Cases",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Contract Drafting & Review",
            description:
              "Preparing and reviewing contracts to protect rights and minimize risks.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "Civil & Criminal Cases",
            description:
              "Handling civil and criminal cases with professionalism and complete confidentiality.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "Arbitration & Dispute Resolution",
            description:
              "Resolving disputes through alternative legal methods that save time and costs.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "Criminal Cases",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Contract Drafting & Review",
            description:
              "Preparing and reviewing contracts to protect rights and minimize risks.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "Civil & Criminal Cases",
            description:
              "Handling civil and criminal cases with professionalism and complete confidentiality.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "Arbitration & Dispute Resolution",
            description:
              "Resolving disputes through alternative legal methods that save time and costs.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "Personal Status Cases",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Contract Drafting & Review",
            description:
              "Preparing and reviewing contracts to protect rights and minimize risks.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/2.png`,
            title: "Civil & Criminal Cases",
            description:
              "Handling civil and criminal cases with professionalism and complete confidentiality.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            icon: `${API_BASE}/our-services/services/3.png`,
            title: "Arbitration & Dispute Resolution",
            description:
              "Resolving disputes through alternative legal methods that save time and costs.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        title: "Labor Law",
        linkText: "View All",
        items: [
          {
            icon: `${API_BASE}/our-services/services/1.png`,
            title: "Contract Drafting & Review",
            description:
              "Preparing and reviewing contracts to protect rights and minimize risks.",
            linkText: "More Details",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
    ],

    legalSupport: {
      title: "Do You Need Legal Support?",
      description:
        "Get a legal consultation from our specialized team and let us help you make the right legal decision.",
      buttonText: "Request Legal Consultation",
    },

    footer: {
      logo: `${API_BASE}/home/logo-dark.png`,

      nav: [
        {
          title: "Quick Links",
          items: [
            { name: "Home", link: "#" },
            { name: "About Us", link: "#" },
            { name: "Services", link: "#" },
            { name: "Our Team", link: "#" },
            { name: "Blog", link: "#" },
            { name: "Careers", link: "#" },
          ],
        },
        {
          title: "Our Services",
          items: [
            { name: "Legal Consultations", link: "#" },
            { name: "Litigation & Court Representation", link: "#" },
            { name: "Corporate & Commercial Law", link: "#" },
            { name: "Contract Drafting & Review", link: "#" },
            { name: "Civil & Criminal Cases", link: "#" },
            { name: "Arbitration & Dispute Resolution", link: "#" },
          ],
        },
        {
          title: "Blog",
          items: [
            { name: "Contracts & Agreements", link: "#" },
            { name: "Corporate & Commercial Law", link: "#" },
            { name: "Civil Cases", link: "#" },
            { name: "Criminal Cases", link: "#" },
            { name: "Arbitration & Dispute Resolution", link: "#" },
            { name: "Saudi Regulations & Laws", link: "#" },
            { name: "Governance & Compliance", link: "#" },
          ],
        },
      ],

      contact: {
        title: "Contact Information",
        items: [
          { title: "Phone:", value: "05XXXXXXXX" },
          { title: "Email:", value: "info@lawfirm.sa" },
          { title: "Address:", value: "Saudi Arabia" },
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

      copyright: "© All Rights Reserved - Law Firm",
    },
  };
});
