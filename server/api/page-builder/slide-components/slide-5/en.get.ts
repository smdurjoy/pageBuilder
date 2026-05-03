import { defineEventHandler } from "h3";
import type { SlideData } from "~/types/page-builder/slide-types/slide-3";

export default defineEventHandler((): SlideData => {
  return {
    badge: "Image Gallery",
    title: "Moments From Our Projects",
    description: "This gallery presents a collection of images that reflect the quality of our work and our attention to detail. Browse the photos to discover examples of our projects and the services we provide to our clients.",
    buttonText: "Show More",
    items: [
      { image: "/page-builder/slides/slide3CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg2.jpg" },
      { image: "/page-builder/slides/slide3CardImg3.png" },
      { image: "/page-builder/slides/slide3CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg2.jpg" },
    ],
  };
});
