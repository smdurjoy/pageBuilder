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

      title: "Trusted Legal Expertise To Protect Your Rights",
      description:
        "We provide professional legal services for individuals and businesses, built on experience, integrity, and full commitment to the highest professional standards.",
      buttonText: "Request Legal Consultation",
    },

    trust: {
      title: "Why Clients Trust Us",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Strong Legal Representation",
          description:
            "We defend our clients’ rights before judicial authorities with professionalism and efficiency.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Specialized Legal Expertise",
          description:
            "A team of lawyers and legal advisors with extensive experience across various legal fields.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Confidentiality & Professionalism",
          description:
            "We adhere to the highest standards of confidentiality and legal ethics in all cases.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Strong Legal Representation",
          description:
            "We defend our clients’ rights before judicial authorities with professionalism and efficiency.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Confidentiality & Professionalism",
          description:
            "We adhere to the highest standards of confidentiality and legal ethics in all cases.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Specialized Legal Expertise",
          description:
            "A team of lawyers and legal advisors with extensive experience across various legal fields.",
        },
      ],
    },

    services: {
      title: "Our Legal Services",
      description:
        "We provide legal services based on experience and commitment, offering clear and reliable solutions tailored to our clients’ needs.",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Contract Drafting & Review",
          description:
            "Preparing and reviewing contracts to protect rights and minimize risks.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Civil & Criminal Cases",
          description:
            "Handling civil and criminal cases with professionalism and full confidentiality.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Arbitration & Dispute Resolution",
          description:
            "Resolving disputes through alternative legal methods that save time and cost.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Contract Drafting & Review",
          description:
            "Preparing and reviewing contracts to protect rights and minimize risks.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Civil & Criminal Cases",
          description:
            "Handling civil and criminal cases with professionalism and full confidentiality.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Arbitration & Dispute Resolution",
          description:
            "Resolving disputes through alternative legal methods that save time and cost.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    team: {
      title: "Our Team",
      description:
        "Our firm includes a group of experienced lawyers and legal advisors who work collaboratively to deliver the best legal solutions to our clients.",
      items: [
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Abdullah Al-Qahtani",
          description:
            "A lawyer and legal advisor specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Fahad Al-Otaibi",
          description:
            "Specialized in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Legal Advisor Ahmed Al-Harbi",
          description:
            "Legal advisor in corporate and commercial regulations, providing well-studied legal solutions that support business growth.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Abdullah Al-Qahtani",
          description:
            "A lawyer and legal advisor specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Lawyer Fahad Al-Otaibi",
          description:
            "Specialized in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Legal Advisor Ahmed Al-Harbi",
          description:
            "Legal advisor in corporate and commercial regulations, providing well-studied legal solutions that support business growth.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    accreditations: {
      title: "Accreditations",
      description:
        "We hold professional accreditations and licenses that reflect our commitment to legal standards and best practices locally and internationally.",
      items: [
        {
          image: `${API_BASE}/home/accreditations/1.png`,
          title: "Saudi Bar Association",
          description:
            "Our firm is registered and committed to approved professional standards, providing legal services in compliance with relevant regulations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/2.png`,
          title: "Ministry of Human Resources",
          description:
            "We support internal policy drafting and compliance to ensure organizations meet regulatory requirements.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/3.png`,
          title: "Intellectual Property Authority",
          description:
            "We assist in protecting intellectual rights through legal applications and specialized consultations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    blog: {
      title: "Legal Blog",
      description:
        "We share simplified legal articles highlighting laws and regulations to help individuals and businesses understand their rights and make informed decisions.",
      items: [
        {
          image: `${API_BASE}/home/blog/1.png`,
          title:
            "The Importance of Legal Consultation Before Signing Contracts",
          description:
            "Learn why legal consultation before signing any contract helps protect your rights and avoid legal risks.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/blog/2.png`,
          title: "When to Choose Arbitration Instead of Litigation?",
          description:
            "A simple explanation of the differences between arbitration and litigation, and when arbitration is the better choice.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/blog/3.png`,
          title: "Common Legal Mistakes Startups Make",
          description:
            "We review the most common legal mistakes startups make and provide practical tips to avoid them early.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
      buttonText: "Read More",
    },

    reviews: {
      title: "Client Reviews",
      description:
        "We value our clients’ trust and always strive to deliver legal services that exceed expectations.",
      items: [
        {
          review:
            "Professional and high-quality service. I received clear legal advice that helped me make the right decision confidently.",
          name: "Mohammed Al-Subaie",
          role: "Business Owner",
        },
        {
          review:
            "Outstanding legal team with excellent follow-up and communication until achieving a satisfying result.",
          name: "Sara Al-Otaibi",
          role: "Entrepreneur",
        },
        {
          review:
            "Clear legal expertise and genuine care for the client’s best interest. Highly recommended.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Manager",
        },
        {
          review:
            "Professional and high-quality service. I received clear legal advice that helped me make the right decision confidently.",
          name: "Mohammed Al-Subaie",
          role: "Business Owner",
        },
        {
          review:
            "Outstanding legal team with excellent follow-up and communication until achieving a satisfying result.",
          name: "Sara Al-Otaibi",
          role: "Entrepreneur",
        },
        {
          review:
            "Clear legal expertise and genuine care for the client’s best interest. Highly recommended.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Manager",
        },
      ],
    },

    legalSupport: {
      title: "Need Legal Support?",
      description:
        "Get a legal consultation from our expert team and let us help you make the right legal decision.",
      buttonText: "Request Consultation",
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
            { name: "Legal Consultation", link: "#" },
            { name: "Litigation & Representation", link: "#" },
            { name: "Corporate Law", link: "#" },
            { name: "Contract Drafting", link: "#" },
            { name: "Civil & Criminal Cases", link: "#" },
            { name: "Arbitration", link: "#" },
          ],
        },
        {
          title: "Blog",
          items: [
            { name: "Contracts", link: "#" },
            { name: "Corporate Law", link: "#" },
            { name: "Civil Cases", link: "#" },
            { name: "Criminal Cases", link: "#" },
            { name: "Arbitration", link: "#" },
            { name: "Regulations", link: "#" },
            { name: "Governance", link: "#" },
          ],
        },
      ],

      contact: {
        title: "Contact Info",
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
