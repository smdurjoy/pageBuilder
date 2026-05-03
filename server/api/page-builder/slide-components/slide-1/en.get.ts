import { defineEventHandler } from "h3";
import type { SlideData } from "~/types/page-builder/slide-types/slide-1";

export default defineEventHandler((): SlideData => {
  return {
    title: "Image Gallery",
    description: "This gallery presents a collection of images that reflect the quality of our work and our attention to detail. Browse the photos to discover examples of our projects and the services we provide to our clients.",
    items: [
      { image: "/page-builder/slides/slide1CardImg1.jpg" },
      { image: "/page-builder/slides/slide1CardImg2.jpg" },
      { image: "/page-builder/slides/slide1CardImg3.jpg" },
      { image: "/page-builder/slides/slide1CardImg1.jpg" },
      { image: "/page-builder/slides/slide1CardImg2.jpg" },
    ],
  };
});
