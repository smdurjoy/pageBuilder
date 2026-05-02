import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-1";

export default defineEventHandler((): AboutData => {
  return {
    title: "About Us",
    description: "We are a leading company in technology and innovation, striving to provide advanced solutions that meet our clients' needs and contribute to their success. Since our establishment in 2010, we have worked on building long-term relationships with our clients through high-quality services and innovative solutions. Our specialized team includes more than 150 experts in various technical and creative fields.",
    image: "/page-builder/about/about1CardImg.jpg",
    stats: [
      {
        value: "150+",
        label: "Professional Employees",
      },
      {
        value: "500+",
        label: "Successful Projects",
      },
      {
        value: "15",
        label: "Years of Experience",
      },
    ],
  };
});
