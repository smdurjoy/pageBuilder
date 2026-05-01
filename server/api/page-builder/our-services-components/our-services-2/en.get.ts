import { defineEventHandler } from "h3";
import type { OurServices2Data } from "~/types/page-builder/our-services-types/our-services-2";

export default defineEventHandler((): OurServices2Data => {
  return {
    section: {
      title: "Our Services",
      subtitle:
        "We offer a comprehensive suite of professional services designed to meet your business needs and achieve your goals",
    },
    services: [
      {
        icon: "/page-builder/our-services-icons/creative-design.svg",
        title: "Creative Design",
        description:
          "Innovative professional designs that reflect your brand identity",
        features: ["Visual Identity Design", "UI/UX Design", "Marketing Materials"],
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "Technical Development",
        description:
          "Advanced software solutions using the latest technologies",
        features: ["Web Application Development", "Mobile Applications", "Marketing Materials"],
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "Marketing Strategy",
        description:
          "Targeted marketing plans that reach your audience with precision",
        features: ["Market Analysis", "Content Strategies", "Campaign Management"],
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "Relationship Management",
        description:
          "Build and strengthen relationships with your customers",
        features: ["CRM Systems", "Customer Service", "Loyalty Programs"],
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "Data Analytics",
        description:
          "Extract valuable insights from your data",
        features: ["Custom Reports", "Interactive Dashboards", "Performance Analysis"],
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        title: "Cybersecurity",
        description:
          "Comprehensive protection for your digital assets",
        features: ["Vulnerability Scanning", "Data Protection", "Security Monitoring"],
        linkText: "Learn More",
        linkHref: "#",
      },
    ],
  };
});
