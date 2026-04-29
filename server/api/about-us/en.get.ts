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
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Our Services", link: "#" },
        { name: "Our Team", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact Us", link: "#" },
      ],

      title: "About Us",
      description:
        "We are a law firm and legal consultancy in the Kingdom of Saudi Arabia, providing reliable legal services to individuals and businesses. We are committed to protecting our clients’ rights and building relationships based on trust and transparency.",
      buttonText: "Request Legal Consultation",
    },

    trust: {
      items: [
        {
          icon: `${API_BASE}/about-us-1/trust/1.png`,
          title: "Our Mission",
          description:
            "To provide high-quality legal services based on integrity and professionalism, with full commitment to our clients’ interests, and to achieve the best possible outcomes through well-studied and practical legal solutions.",
        },
        {
          icon: `${API_BASE}/about-us-1/trust/2.png`,
          title: "Our Vision",
          description:
            "To be a trusted and leading legal partner, distinguished by efficiency and professionalism, contributing to strengthening justice and building trust within the legal community in Saudi Arabia.",
        },
        {
          icon: `${API_BASE}/about-us-1/trust/3.png`,
          title: "Our Values",
          description:
            "We believe that integrity and professionalism are the foundation of successful legal work, and we are committed to the highest ethical and professional standards in all our dealings.",
        },
      ],
    },

    services: {
      title: "Why Choose Us",
      description:
        "Strong legal expertise in Saudi regulations, a professional and committed team, and clear consultations focused on protecting client interests and building long-term trusted relationships.",
      items: [
        {
          icon: `${API_BASE}/about-us-1/services/1.jpg`,
          title: "Extensive Experience in Saudi Laws and Regulations",
          description:
            "We possess deep knowledge and practical experience in the laws and regulations of Saudi Arabia, enabling us to provide accurate advice and effective legal solutions.",
        },
        {
          icon: `${API_BASE}/about-us-1/services/2.jpg`,
          title: "Qualified and Committed Legal Team",
          description:
            "Our team includes highly skilled lawyers and legal consultants who work collaboratively with full dedication to achieving the best results for our clients.",
        },
        {
          icon: `${API_BASE}/about-us-1/services/3.png`,
          title: "Clear and Practical Legal Consultations",
          description:
            "We ensure that our legal advice is simple and clear, helping clients understand their legal position and make informed decisions with confidence.",
        },
        {
          icon: `${API_BASE}/about-us-1/services/4.jpg`,
          title: "Client-Focused Approach & Long-Term Partnerships",
          description:
            "We prepare, draft, and review all types of contracts with a focus on clarity, protecting rights, and minimizing legal risks.",
        },
      ],
    },

    accreditations: {
      title: "Company Accreditations",
      description:
        "We hold professional accreditations and licenses that reflect our commitment to regulatory standards and best practices in providing legal and consulting services locally and internationally.",
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
          title: "Ministry of Human Resources and Social Development",
          description:
            "We provide support in drafting and reviewing internal policies and regulatory compliance to ensure organizations meet legal requirements.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/home/accreditations/3.png`,
          title: "Saudi Authority for Intellectual Property",
          description:
            "We assist in protecting intellectual property rights through application preparation, regulatory requirements, and specialized legal consultations.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    reviews: {
      title: "Client Testimonials",
      description:
        "We take pride in our clients’ trust and always strive to deliver legal services that exceed their expectations.",
      items: [
        {
          review:
            "Professional and highly respectful service. I received clear legal advice that helped me make the right decision with confidence.",
          name: "Mohammed Al-Subaie",
          role: "Businessman",
        },
        {
          review:
            "An outstanding legal team with excellent follow-up and continuous communication until achieving a satisfactory result.",
          name: "Sarah Al-Otaibi",
          role: "Business Owner",
        },
        {
          review:
            "Clear legal expertise and genuine care for the client’s interest. Highly recommended for anyone seeking trust and professionalism.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Director",
        },
        {
          review:
            "Professional and highly respectful service. I received clear legal advice that helped me make the right decision with confidence.",
          name: "Mohammed Al-Subaie",
          role: "Businessman",
        },
        {
          review:
            "An outstanding legal team with excellent follow-up and continuous communication until achieving a satisfactory result.",
          name: "Sarah Al-Otaibi",
          role: "Business Owner",
        },
        {
          review:
            "Clear legal expertise and genuine care for the client’s interest. Highly recommended for anyone seeking trust and professionalism.",
          name: "Abdulrahman Al-Qahtani",
          role: "Company Director",
        },
      ],
    },

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
