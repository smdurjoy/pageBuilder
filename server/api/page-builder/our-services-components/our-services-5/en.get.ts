import { defineEventHandler } from "h3";
import type { OurServices5Data } from "~/types/page-builder/our-services-types/our-services-5";

export default defineEventHandler((): OurServices5Data => {
  return {
    section: {
      title: "Our Services",
      subtitle:
        "We offer a comprehensive suite of professional services designed to meet your business needs and achieve your goals",
    },
    services: [
      {
        image: "/page-builder/our-services-img/service5Img1.jpg",
        icon: "/page-builder/our-services-icons/creative-design.svg",
        title: "Creative Design",
        description:
          "Innovative professional designs that reflect your brand identity and capture the attention of your target audience in unique ways",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img2.jpg",
        icon: "/page-builder/our-services-icons/tech-dev.svg",
        title: "Technical Development",
        description:
          "Advanced software solutions using the latest technologies to turn your ideas into an advanced and efficient digital reality",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img3.jpg",
        icon: "/page-builder/our-services-icons/marketing.svg",
        title: "Marketing Strategy",
        description:
          "Targeted marketing plans that reach your audience with precision and efficiently achieve your business goals",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img4.jpg",
        icon: "/page-builder/our-services-icons/crm.svg",
        title: "Relationship Management",
        description:
          "Build and strengthen relationships with your customers through advanced CRM solutions and exceptional customer service",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img5.jpg",
        icon: "/page-builder/our-services-icons/data-analytics.svg",
        title: "Data Analytics",
        description:
          "Extract valuable insights from your data to make informed decisions that drive your business growth forward",
        linkText: "Learn More",
        linkHref: "#",
      },
      {
        image: "/page-builder/our-services-img/service5Img6.jpg",
        icon: "/page-builder/our-services-icons/security.svg",
        title: "Cybersecurity",
        description:
          "Comprehensive protection for your digital assets and customer data from advanced cyber threats",
        linkText: "Learn More",
        linkHref: "#",
      },
    ],
  };
});
