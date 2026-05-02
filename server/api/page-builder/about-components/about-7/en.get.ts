import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-7";

export default defineEventHandler((): AboutData => {
  return {
    title: "About Us",
    subtitle: "We believe in the power of innovation and creativity to turn ideas into tangible reality",
    description: "Our company combines deep-rooted experience with forward-thinking to provide integrated solutions that exceed our clients' expectations. We work with passion and professionalism to build a better future through technology and sustainable innovation. Our outstanding team sets new standards in the industry through our commitment to quality and excellence in every project we undertake.",
    backgroundImage: "/page-builder/about/about2BgImg.jpg",
    stats: [
      {
        value: "2010",
        label: "Established Year",
      },
      {
        value: "35+",
        label: "Countries Worldwide",
      },
      {
        value: "1000+",
        label: "Satisfied Clients",
      },
      {
        value: "98%",
        label: "Satisfaction Rate",
      },
    ],
  };
});
