import { defineEventHandler } from "h3";
import type { Slide4Data } from "~/types/page-builder/slide-types/slide-4";

export default defineEventHandler((): Slide4Data => {
  return {
    title: "جولة في معرضنا",
    description: "يقدم هذا العرض مجموعة من الصور التي تعكس جودة أعمالنا واهتمامنا بالتفاصيل. تصفح الصور لاكتشاف نماذج من مشاريعنا والخدمات التي نقدمها لعملائنا.",
    buttonText: "تصفح الصور",
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
