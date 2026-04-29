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
        { name: "Our Services", link: "#" },
        { name: "Our Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact Us", link: "#" },
      ],

      title: "Trusted Legal Expertise\nTo Protect Your Rights",
      description:
        "We provide professional legal services for individuals and businesses, built on experience, integrity, and full commitment to the highest professional standards.",
      buttonText: "Request Legal Consultation",
    },

    trust: {
      title: "Why Our Clients Trust Us",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
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
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Strong Legal Representation",
          description:
            "We defend our clients' rights before judicial authorities with professionalism and efficiency.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/6.png`,
          title: "Tailored Legal Solutions",
          description:
            "We provide well-studied legal solutions tailored to each case and client needs.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/5.png`,
          title: "Commitment to Time & Results",
          description:
            "We are committed to accuracy, punctuality, and achieving the best possible outcomes.",
        },
        {
          icon: `${API_BASE}/home/icons/trust/4.png`,
          title: "Careful Case Follow-up",
          description:
            "We closely monitor all cases step by step and keep our clients continuously informed.",
        },
      ],
    },

    services: {
      title: "Our Legal Services",
      description:
        "We provide legal services based on experience and commitment, with clear and reliable solutions tailored to our clients’ needs.",
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
            "Handling civil and criminal cases with professionalism and complete confidentiality.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Arbitration & Dispute Resolution",
          description:
            "Resolving disputes through alternative legal methods that save time and costs.",
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
            "Handling civil and criminal cases with professionalism and complete confidentiality.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Arbitration & Dispute Resolution",
          description:
            "Resolving disputes through alternative legal methods that save time and costs.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    team: {
      title: "Our Team",
      description:
        "Our firm includes a distinguished group of lawyers and legal consultants working collaboratively to deliver the best legal solutions to our clients.",
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
          title: "Lawyer Fahd bin Saud Al-Otaibi",
          description:
            "Specialized in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Legal Consultant Ahmed bin Khalid Al-Harbi",
          description:
            "A legal consultant in corporate affairs and commercial regulations, providing well-structured legal solutions that support business growth.",
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
          title: "Lawyer Fahd bin Saud Al-Otaibi",
          description:
            "Specialized in litigation and court representation, with experience in civil cases and various legal disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/team/1.png`,
          title: "Legal Consultant Ahmed bin Khalid Al-Harbi",
          description:
            "A legal consultant in corporate affairs and commercial regulations, providing well-structured legal solutions that support business growth.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    accreditations: {
      title: "Company Accreditations",
      description:
        "We hold professional accreditations and licenses that reflect our commitment to regulatory standards and best practices in delivering legal and consulting services locally and internationally.",
      items: [
        {
          image: `${API_BASE}/home/accreditations/1.png`,
          title: "Saudi Bar Association",
          description:
            "Our firm is registered and adheres to approved professional standards, providing legal services in accordance with relevant laws and regulations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/2.png`,
          title: "Ministry of Human Resources & Social Development",
          description:
            "We provide support in preparing and reviewing internal policies and regulatory compliance to ensure organizations meet legal requirements.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/3.png`,
          title: "Saudi Authority for Intellectual Property",
          description:
            "We assist in protecting intellectual property rights by preparing applications and related regulatory requirements, along with providing specialized consultations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    blog: {
      title: "Legal Blog",
      description:
        "We share simplified legal articles highlighting laws and regulations, helping individuals and businesses understand their rights and make informed legal decisions.",
      items: [
        {
          image: `${API_BASE}/landing-page-2/blog/1.jpg`,
          title:
            "The Importance of Legal Consultation Before Signing Contracts",
          description:
            "Learn why obtaining legal advice before signing any contract helps protect your rights and avoid legal risks.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-2/blog/2.jpg`,
          title: "When Should You Choose Arbitration Instead of Litigation?",
          description:
            "A simple explanation of the differences between arbitration and litigation, and when arbitration is the better option.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    reviews: {
      title: "Client Testimonials",
      description:
        "We value our clients’ trust and always strive to deliver legal services that meet their expectations.",
      items: [
        {
          review:
            "Professional and highly respectful service. I received clear legal advice that helped me make the right decision with confidence.",
          name: "Mohammed Al-Subaie",
          role: "Businessman",
        },
        {
          review:
            "An outstanding legal team, with careful case follow-up and continuous communication until achieving a satisfactory result.",
          name: "Sarah Al-Otaibi",
          role: "Business Owner",
        },
        {
          review:
            "Clear legal expertise and genuine care for the client’s interests. I highly recommend them for anyone seeking trust and professionalism.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Manager",
        },
        {
          review:
            "Professional and highly respectful service. I received clear legal advice that helped me make the right decision with confidence.",
          name: "Mohammed Al-Subaie",
          role: "Businessman",
        },
        {
          review:
            "An outstanding legal team, with careful case follow-up and continuous communication until achieving a satisfactory result.",
          name: "Sarah Al-Otaibi",
          role: "Business Owner",
        },
        {
          review:
            "Clear legal expertise and genuine care for the client’s interests. I highly recommend them for anyone seeking trust and professionalism.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Manager",
        },
      ],
    },

    legalSupport: {
      title: "Need Legal Support?",
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

      copyright: "© All rights reserved - Law Firm",
    },
  };
});
