import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    hero: {
      logo: `${API_BASE}/home/logo-dark.png`,
      logoLight: `${API_BASE}/home/logo-light.png`,
      heroImage: `${API_BASE}/home/hero-dark.png`,
      heroImageLight: `${API_BASE}/home/hero-light.png`,

      nav: [
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Services", link: "#" },
        { name: "Our Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact Us", link: "#" },
      ],

      title: "Trusted Legal Expertise\nTo Protect Your Rights",
      description:
        "We provide comprehensive legal services for individuals and businesses, with full commitment to quality and professionalism to ensure the best results.",
      buttonText: "Book a Legal Consultation",
    },

    trust: {
      title: "Why Our Clients Trust Us",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/4.png`,
          title: "Accurate Case Follow-up",
          description:
            "We carefully follow up on all cases step by step and keep our clients constantly informed.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Specialized Legal Expertise",
          description:
            "A team of lawyers and legal consultants with extensive experience across various legal fields.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Full Confidentiality & Professionalism",
          description:
            "We adhere to the highest standards of professional confidentiality and legal ethics in all cases.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Strong Legal Representation",
          description:
            "We defend our clients' rights before judicial authorities with professionalism and efficiency.",
        },
      ],
    },

    services: {
      title: "Our Legal Services",
      description:
        "We provide legal services built on experience and commitment, offering clear and reliable solutions tailored to our clients’ needs.",

      items: [
        {
          image: `${API_BASE}/landing-page-1/services/1.jpg`,
          title: "Legal Consultations",
          description:
            "Providing accurate legal advice based on approved regulations to help individuals and businesses make informed legal decisions.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-1/services/2.png`,
          title: "Litigation & Court Representation",
          description:
            "Professional legal representation before various judicial authorities, with full case follow-up at all stages until achieving the best possible results.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-1/services/3.jpg`,
          title: "Corporate & Commercial Law",
          description:
            "Providing comprehensive legal support for companies, including formation, dispute management, and organizing business relationships to ensure compliance and protect interests.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-1/services/4.png`,
          title: "Contract Drafting & Review",
          description:
            "Drafting and reviewing all types of contracts, focusing on clarity, protecting rights, and minimizing legal risks.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-1/services/5.png`,
          title: "Civil & Criminal Cases",
          description:
            "Handling civil and criminal cases with high efficiency, maintaining full confidentiality and defending clients' rights within legal frameworks.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-1/services/6.jpg`,
          title: "Arbitration & Dispute Resolution",
          description:
            "Resolving disputes through alternative legal methods such as arbitration and amicable settlements, saving time and costs while achieving effective solutions.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    team: {
      title: "Our Team",
      description:
        "Our firm includes a distinguished group of lawyers and legal consultants who work collaboratively to provide the best legal solutions for our clients.",
      items: [
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Abdullah bin Mohammed Al-Qahtani",
          description:
            "A lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Fahad bin Saud Al-Otaibi",
          description:
            "Specialist in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Legal Advisor Ahmed bin Khaled Al-Harbi",
          description:
            "A legal consultant in corporate and commercial law, providing well-structured legal solutions that support business growth.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Abdullah bin Mohammed Al-Qahtani",
          description:
            "A lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Fahad bin Saud Al-Otaibi",
          description:
            "Specialist in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Legal Advisor Ahmed bin Khaled Al-Harbi",
          description:
            "A legal consultant in corporate and commercial law, providing well-structured legal solutions that support business growth.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    blog: {
      title: "Legal Blog",
      description:
        "We share simplified legal articles highlighting laws and regulations, helping individuals and businesses understand their rights and make informed decisions.",
      items: [
        {
          image: `${API_BASE}/home/blog/3.png`,
          title:
            "The Importance of Legal Consultation Before Signing Contracts",
          description:
            "Learn why getting legal advice before signing any contract helps protect your rights and avoid legal risks.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/blog/4.jpg`,
          title: "When Should You Choose Arbitration Over Litigation?",
          description:
            "A simple explanation of the differences between arbitration and litigation and when arbitration is the better option.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/blog/2.png`,
          title: "Common Legal Mistakes Made by Startups",
          description:
            "We highlight the most common legal mistakes startups make and provide practical tips to avoid them from the beginning.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
      buttonText: "Read More",
    },

    accreditations: {
      title: "Company Accreditations",
      description:
        "We hold professional accreditations and licenses that reflect our commitment to regulatory standards and best practices in providing legal and consulting services locally and internationally.",
      items: [
        {
          image: `${API_BASE}/home/accreditations/l1.png`,
          title: "Saudi Bar Association",
          description:
            "Our firm is registered and committed to approved professional standards, providing legal services in accordance with relevant laws and regulations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/l2.png`,
          title: "Ministry of Human Resources & Social Development",
          description:
            "We provide support in preparing and reviewing internal regulations and compliance to ensure alignment with legal requirements.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/l3.png`,
          title: "Saudi Authority for Intellectual Property",
          description:
            "We assist in protecting intellectual property rights by preparing applications and providing specialized legal consultations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    reviews: {
      title: "Client Reviews",
      description:
        "We value our clients’ trust and always strive to provide legal services that exceed expectations.",
      items: [
        {
          review:
            "Highly professional service and excellent experience. I received clear legal advice that helped me make the right decision with confidence.",
          name: "Mohammed Al-Subaie",
          role: "Businessman",
        },
        {
          review:
            "An outstanding legal team with precise case follow-up and continuous communication until achieving a satisfactory result.",
          name: "Sara Al-Otaibi",
          role: "Business Owner",
        },
        {
          review:
            "Clear legal expertise and genuine care for clients' interests. Highly recommended for anyone seeking trust and professionalism.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Manager",
        },
        {
          review:
            "Highly professional service and excellent experience. I received clear legal advice that helped me make the right decision with confidence.",
          name: "Mohammed Al-Subaie",
          role: "Businessman",
        },
        {
          review:
            "An outstanding legal team with precise case follow-up and continuous communication until achieving a satisfactory result.",
          name: "Sara Al-Otaibi",
          role: "Business Owner",
        },
        {
          review:
            "Clear legal expertise and genuine care for clients' interests. Highly recommended for anyone seeking trust and professionalism.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Manager",
        },
      ],
    },

    legalSupport: {
      title: "Need Legal Support?",
      description:
        "Get a legal consultation from our specialized team and let us help you make the right legal decision.",
      buttonText: "Request a Legal Consultation",
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
            { name: "Blog", link: "#" },
          ],
        },
        {
          title: "Our Services",
          items: [
            { name: "Legal Consultations", link: "#" },
            { name: "Litigation", link: "#" },
            { name: "Commercial Law", link: "#" },
            { name: "Contracts", link: "#" },
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
            { name: "Saudi Regulations", link: "#" },
            { name: "Governance & Compliance", link: "#" },
          ],
        },
      ],

      contact: {
        title: "Contact Us",
        items: [
          { title: "Phone", value: "05XXXXXXXX" },
          { title: "Email", value: "info@lawfirm.sa" },
          { title: "Address", value: "Saudi Arabia" },
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

      copyright: "© All Rights Reserved",
    },
  };
});
