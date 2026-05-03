import { defineEventHandler } from "h3";
import type { Slide4Data } from "~/types/page-builder/slide-types/slide-4";

export default defineEventHandler((): Slide4Data => {
  return {
    title: "A Tour of Our Gallery",
    description: "This gallery presents a collection of images that reflect the quality of our work and our attention to detail. Browse the photos to discover examples of our projects and the services we provide to our clients.",
    buttonText: "Browse Photos",
    items: [
      { image: "/page-builder/slides/slide4CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg2.jpg" },
      { image: "/page-builder/slides/slide3CardImg3.png" },
      { image: "/page-builder/slides/slide4CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg2.jpg" },
      { image: "/page-builder/slides/slide3CardImg3.png" },
    ],
  };
});
