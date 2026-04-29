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
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Our Services", link: "#" },
        { name: "Our Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact Us", link: "#" },
      ],

      title: "Legal Blog",
      description:
        "We share simplified legal articles that highlight laws and regulations, helping individuals and companies understand their rights and make informed legal decisions.",
      buttonText: "Request Legal Consultation",
    },

    blogs: [
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "The Importance of Legal Consultation Before Signing Contracts",
        description:
          "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "When Should You Choose Arbitration Instead of Litigation?",
        description:
          "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "The Most Common Legal Mistakes Made by Startups",
        description:
          "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "The Importance of Legal Consultation Before Signing Contracts",
        description:
          "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "When Should You Choose Arbitration Instead of Litigation?",
        description:
          "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "The Most Common Legal Mistakes Made by Startups",
        description:
          "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "The Importance of Legal Consultation Before Signing Contracts",
        description:
          "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "When Should You Choose Arbitration Instead of Litigation?",
        description:
          "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "The Most Common Legal Mistakes Made by Startups",
        description:
          "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "The Importance of Legal Consultation Before Signing Contracts",
        description:
          "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "When Should You Choose Arbitration Instead of Litigation?",
        description:
          "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "The Most Common Legal Mistakes Made by Startups",
        description:
          "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "The Importance of Legal Consultation Before Signing Contracts",
        description:
          "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "When Should You Choose Arbitration Instead of Litigation?",
        description:
          "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "The Most Common Legal Mistakes Made by Startups",
        description:
          "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/1.jpg`,
        title: "The Importance of Legal Consultation Before Signing Contracts",
        description:
          "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/2.jpg`,
        title: "When Should You Choose Arbitration Instead of Litigation?",
        description:
          "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
      {
        image: `${API_BASE}/blogs/3.jpg`,
        title: "The Most Common Legal Mistakes Made by Startups",
        description:
          "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
        linkText: "Read More",
        arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
      },
    ],

    blogs2: [
      {
        sectionTitle: "Legal Consultations",
        sectionLinkText: "View All",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title:
              "The Importance of Legal Consultation Before Signing Contracts",
            description:
              "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "When Should You Choose Arbitration Instead of Litigation?",
            description:
              "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "The Most Common Legal Mistakes Made by Startups",
            description:
              "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "Legal Consultations",
        sectionLinkText: "View All",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title:
              "The Importance of Legal Consultation Before Signing Contracts",
            description:
              "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "When Should You Choose Arbitration Instead of Litigation?",
            description:
              "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "The Most Common Legal Mistakes Made by Startups",
            description:
              "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "Legal Consultations",
        sectionLinkText: "View All",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title:
              "The Importance of Legal Consultation Before Signing Contracts",
            description:
              "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "When Should You Choose Arbitration Instead of Litigation?",
            description:
              "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "The Most Common Legal Mistakes Made by Startups",
            description:
              "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "Legal Consultations",
        sectionLinkText: "View All",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title:
              "The Importance of Legal Consultation Before Signing Contracts",
            description:
              "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "When Should You Choose Arbitration Instead of Litigation?",
            description:
              "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "The Most Common Legal Mistakes Made by Startups",
            description:
              "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
      {
        sectionTitle: "Legal Consultations",
        sectionLinkText: "View All",
        items: [
          {
            image: `${API_BASE}/blogs/1.jpg`,
            title:
              "The Importance of Legal Consultation Before Signing Contracts",
            description:
              "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/2.jpg`,
            title: "When Should You Choose Arbitration Instead of Litigation?",
            description:
              "A simple explanation of the differences between arbitration and litigation, and when arbitration is the best option for resolving disputes.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
          {
            image: `${API_BASE}/blogs/3.jpg`,
            title: "The Most Common Legal Mistakes Made by Startups",
            description:
              "We review the most common legal mistakes made by startups, with practical tips to avoid them from the beginning.",
            linkText: "Read More",
            arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
          },
        ],
      },
    ],

    blogDetails: {
      breadCrumbs: [
        "Home",
        "Our Team",
        "Lawyer Abdullah bin Mohammed Al-Qahtani",
      ],
      title: "The Importance of Legal Consultation Before Signing Contracts",
      description:
        "Learn the importance of obtaining legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.",
      description2:
        "Welcome to our law firm’s website. This website aims to provide general information about our legal services and is not a substitute for direct legal consultation.",
      p1Title: "Understanding Contract Terms Properly",
      p1Description:
        "The user must be at least 18 years old to use this website. The user agrees to use the website for lawful purposes only and in compliance with the applicable laws in the Kingdom of Saudi Arabia.",
      p2Title: "Protecting Rights and Avoiding Risks",
      p2Description:
        "The legal consultant reviews the contract to ensure there are no unfair clauses or unbalanced obligations and works to amend clauses that may cause future legal risks, whether financial or regulatory.",
      p3Title: "Ensuring Compliance with Regulations",
      p3Description:
        "Legal consultation helps ensure that the contract complies with applicable laws and regulations in the Kingdom of Saudi Arabia, reducing the likelihood of contract invalidity or future legal liability.",
      p4Title: "Avoiding Future Disputes",
      p4Description:
        "Clear and balanced contracts significantly reduce the likelihood of disputes between parties. Through legal consultation, clauses are drafted precisely to prevent misinterpretation and minimize conflicts.",
      p5Title: "Supporting Confident Decision-Making",
      p5Description:
        "By obtaining prior legal consultation, the party becomes fully aware of all legal aspects of the contract, helping them make a confident and informed decision to sign.",
      p6Title: "Conclusion",
      p6Description:
        "Legal consultation before signing contracts is not a formal procedure but a real investment in protecting rights and ensuring stable contractual relationships. Whether you are an individual or a company, seeking a specialized legal advisor before signing is a smart step that protects you from risks and provides peace of mind.",
    },

    legalSupport: {
      title: "Do You Need Legal Support?",
      description:
        "Get legal consultation from our specialized team and let us help you make the right legal decision.",
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
            { name: "Litigation and Court Representation", link: "#" },
            { name: "Corporate and Commercial Law", link: "#" },
            { name: "Contract Drafting and Review", link: "#" },
            { name: "Civil and Criminal Cases", link: "#" },
            { name: "Arbitration and Dispute Resolution", link: "#" },
          ],
        },
        {
          title: "Blog",
          items: [
            { name: "Contracts and Agreements", link: "#" },
            { name: "Corporate and Commercial Law", link: "#" },
            { name: "Civil Cases", link: "#" },
            { name: "Criminal Cases", link: "#" },
            { name: "Arbitration and Dispute Resolution", link: "#" },
            { name: "Saudi Laws and Regulations", link: "#" },
            { name: "Governance and Compliance", link: "#" },
          ],
        },
      ],

      contact: {
        title: "Contact Information",
        items: [
          { title: "Phone:", value: "05XXXXXXXX" },
          { title: "Email:", value: "info@lawfirm.sa" },
          { title: "Address:", value: "Kingdom of Saudi Arabia" },
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

      copyright: "© All rights reserved - Law Firm",
    },
  };
});
