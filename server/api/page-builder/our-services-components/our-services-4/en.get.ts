import { defineEventHandler } from "h3";
import type { OurServices4Data } from "~/types/page-builder/our-services-types/our-services-4";

export default defineEventHandler((): OurServices4Data => {
  return {
    section: {
      title: "Our Services",
      subtitle:
        "We offer a comprehensive suite of professional services designed to meet your business needs and achieve your goals",
    },
    services: [
      {
        icon: "/page-builder/our-services-icons/creative-design.svg",
        number: "01",
        title: "Creative Design",
        description:
          "Innovative professional designs that reflect your brand identity and capture the attention of your target audience",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        number: "02",
        title: "Technical Development",
        description:
          "Advanced software solutions using the latest technologies to turn your ideas into digital reality",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        number: "03",
        title: "Marketing Strategy",
        description:
          "Targeted marketing plans that reach your audience with precision and efficiently achieve your business goals",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        number: "04",
        title: "Relationship Management",
        description:
          "Build and strengthen relationships with your customers through advanced CRM solutions and exceptional service",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        number: "05",
        title: "Data Analytics",
        description:
          "Extract valuable insights from your data to make informed decisions that drive business growth",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        number: "06",
        title: "Cybersecurity",
        description:
          "Comprehensive protection for your digital assets and customer data from cyber threats",
        linkText: "Learn More",
        linkHref: "#",
      },
    ],
  };
});
