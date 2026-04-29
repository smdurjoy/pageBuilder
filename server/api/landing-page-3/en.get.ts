import API_BASE from "@/config/domain";

export default defineEventHandler(() => {
  return {
    services: {
      title: "Our Legal Services",
      description:
        "We provide legal services built on expertise and commitment, offering clear and reliable solutions tailored to our clients' needs.",
      items: [
        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Litigation and Court Representation",
          description:
            "Professional legal representation before various judicial authorities.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },

        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Legal Consultations",
          description:
            "Providing accurate legal advice to help you make well-informed decisions.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Corporate and Commercial Law",
          description:
            "Comprehensive legal support for companies in their transactions and disputes.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/2.png`,
          title: "Contract Drafting and Review",
          description:
            "Preparing and reviewing contracts to protect rights and minimize risks.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },

        {
          icon: `${API_BASE}/home/icons/trust/3.png`,
          title: "Civil and Criminal Cases",
          description:
            "Handling civil and criminal cases with professionalism and full confidentiality.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          icon: `${API_BASE}/home/icons/trust/1.png`,
          title: "Arbitration and Dispute Resolution",
          description:
            "Resolving disputes through alternative legal methods that save time and cost.",
          linkText: "Learn More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
    },

    blog: {
      title: "Legal Blog",
      description:
        "We share simplified legal articles that highlight laws and regulations, helping individuals and businesses understand their rights and make informed legal decisions.",
      items: [
        {
          image: `${API_BASE}/landing-page-3/blog/1.png`,
          title:
            "The Importance of Legal Consultation Before Signing Contracts",
          description:
            "Learn why obtaining legal advice before signing any contract is essential, and how it helps protect your rights and avoid legal risks.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
        {
          image: `${API_BASE}/landing-page-3/blog/2.png`,
          title: "Common Legal Mistakes Made by Startups",
          description:
            "We explore the most common legal mistakes startups make, along with practical tips to avoid them from the beginning.",
          linkText: "Read More",
          arrowIcon: `${API_BASE}/home/icons/services/arrow.png`,
        },
      ],
      buttonText: "Read More",
    },
  };
});
