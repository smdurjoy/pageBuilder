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

      title:
        "An Elite Legal Team Working Professionally to Protect Your Rights",
      description:
        "Our firm includes a team of experienced and highly qualified lawyers and legal consultants who work collaboratively to provide comprehensive legal solutions that meet our clients' needs and achieve the best possible outcomes.",
      buttonText: "Request Legal Consultation",
    },

    team: {
      title: "Our Legal Team",
      items: [
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Lawyer Abdullah bin Mohammed Al-Qahtani",
          description:
            "A lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Lawyer Fahad bin Saud Al-Otaibi",
          description:
            "Specialized in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Legal Consultant Ahmed bin Khalid Al-Harbi",
          description:
            "A legal consultant in corporate and commercial law, providing well-studied legal solutions that support business growth.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Lawyer Abdullah bin Mohammed Al-Qahtani",
          description:
            "A lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Lawyer Fahad bin Saud Al-Otaibi",
          description:
            "Specialized in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Legal Consultant Ahmed bin Khalid Al-Harbi",
          description:
            "A legal consultant in corporate and commercial law, providing well-studied legal solutions that support business growth.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Legal Consultant Ahmed bin Khalid Al-Harbi",
          description:
            "A legal consultant in corporate and commercial law, providing well-studied legal solutions that support business growth.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/our-team/team-avatar-1.png`,
          title: "Legal Consultant Ahmed bin Khalid Al-Harbi",
          description:
            "A legal consultant in corporate and commercial law, providing well-studied legal solutions that support business growth.",
          linkText: "More Details",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    lawyersDetails: {
      breadCrumbs: [
        "Home",
        "Our Team",
        "Lawyer Abdullah bin Mohammed Al-Qahtani",
      ],
      image: `${API_BASE}/our-team/team-avatar-1.png`,
      title: "Lawyer Abdullah bin Mohammed Al-Qahtani",
      description:
        "A lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
      buttonText: "More Details",
      aboutLawyer: [
        {
          title: "About the Lawyer",
          description:
            "A lawyer and legal consultant with practical experience in commercial cases and contract drafting. He provides comprehensive legal solutions that serve the interests of companies and individuals in accordance with the regulations of the Kingdom of Saudi Arabia. He is known for accuracy in case analysis, the ability to assess legal risks, and delivering clear advice to help clients make sound legal decisions.",
        },
        {
          title: "Areas of Expertise",
          description:
            "Commercial cases and corporate law, drafting and reviewing contracts and agreements, legal consultations for companies, legal representation in commercial disputes, and settlement of contractual disputes.",
        },
        {
          title: "Qualifications & Experience",
          description:
            "Licensed lawyer in the Kingdom of Saudi Arabia with experience handling corporate and individual cases, and continuous follow-up on legal and regulatory updates.",
        },
        {
          title: "Work Methodology",
          description:
            "He focuses on thoroughly understanding client needs, carefully studying each case, and providing practical legal solutions based on relevant laws and regulations to achieve the best possible results.",
        },
      ],
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
            { name: "Commercial & Corporate Law", link: "#" },
            { name: "Civil Cases", link: "#" },
            { name: "Criminal Cases", link: "#" },
            { name: "Arbitration & Dispute Resolution", link: "#" },
            { name: "Saudi Laws & Regulations", link: "#" },
            { name: "Governance & Compliance", link: "#" },
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

      copyright: "© All Rights Reserved - Law Firm",
    },
  };
});
