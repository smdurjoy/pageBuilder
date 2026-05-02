import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-3";

export default defineEventHandler((): AboutData => {
  return {
    title: "About Us",
    subtitle: "Pioneers in Digital Transformation and Technical Innovation",
    description: "We help companies achieve their goals through innovative and specialized technical solutions. We combine global experience with local understanding to provide exceptional services that make a real difference in our clients' business success.",
    backgroundImage: "/page-builder/about/about3BgImg.jpg",
    stats: [
      {
        value: "150+",
        label: "Specialized Experts",
      },
      {
        value: "500+",
        label: "Completed Projects",
      },
      {
        value: "15",
        label: "Years of Experience",
      },
    ],
    cta: {
      label: "Discover More",
      href: "#",
    },
  };
});
