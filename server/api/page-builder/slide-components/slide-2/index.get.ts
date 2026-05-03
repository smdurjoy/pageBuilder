import { defineEventHandler } from "h3";
import type { SlideData } from "~/types/page-builder/slide-types/slide-1";

export default defineEventHandler((): SlideData => {
  return {
    title: "معرض الصور",
    description: "يقدم هذا العرض مجموعة من الصور التي تعكس جودة أعمالنا واهتمامنا بالتفاصيل. تصفح الصور لاكتشاف نماذج من مشاريعنا والخدمات التي نقدمها لعملائنا.",
    items: [
      { image: "/page-builder/slides/slide1CardImg1.jpg" },
      { image: "/page-builder/slides/slide1CardImg2.jpg" },
      { image: "/page-builder/slides/slide1CardImg3.jpg" },
      { image: "/page-builder/slides/slide1CardImg1.jpg" },
      { image: "/page-builder/slides/slide1CardImg2.jpg" },
    ],
  };
});
