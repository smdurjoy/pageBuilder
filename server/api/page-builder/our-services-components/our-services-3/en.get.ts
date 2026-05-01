import { defineEventHandler } from "h3";
import type { OurServices3Data } from "~/types/page-builder/our-services-types/our-services-3";

export default defineEventHandler((): OurServices3Data => {
  return {
    section: {
      title: "Our Services",
      subtitle:
        "We offer a comprehensive suite of professional services designed to meet your business needs and achieve your goals",
    },
    services: [
      {
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "Marketing Strategy",
        description:
          "Targeted marketing plans that reach your audience with precision and efficiently achieve your business goals",
        linkText: "Learn More",
        linkHref: "#",
        bgColor: "#fdf5e4",
        iconBgColor: "#c9a24d",
        btnColor: "#c9a24d",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "Technical Development",
        description:
          "Advanced software solutions using the latest technologies to turn your ideas into digital reality",
        linkText: "Learn More",
        linkHref: "#",
        bgColor: "#e6f6fb",
        iconBgColor: "#0ea5e9",
        btnColor: "#0ea5e9",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/creative-design.svg",
        title: "Creative Design",
        description:
          "Innovative professional designs that reflect your brand identity and capture the attention of your target audience",
        linkText: "Learn More",
        linkHref: "#",
        bgColor: "#eaedf5",
        iconBgColor: "#1e3a5f",
        btnColor: "#1e3a5f",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/security.svg",
        title: "Cybersecurity",
        description:
          "Comprehensive protection for your digital assets and customer data from cyber threats",
        linkText: "Learn More",
        linkHref: "#",
        bgColor: "#f3f5f7",
        iconBgColor: "#475569",
        btnColor: "#475569",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "Data Analytics",
        description:
          "Extract valuable insights from your data to make informed decisions that drive business growth",
        linkText: "Learn More",
        linkHref: "#",
        bgColor: "#fef0e6",
        iconBgColor: "#f97316",
        btnColor: "#f97316",
        btnTextColor: "#ffffff",
      },
      {
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "Relationship Management",
        description:
          "Build and strengthen relationships with your customers through advanced CRM solutions and exceptional service",
        linkText: "Learn More",
        linkHref: "#",
        bgColor: "#e6f7ef",
        iconBgColor: "#10b981",
        btnColor: "#10b981",
        btnTextColor: "#ffffff",
      },
    ],
  };
});
