import { defineEventHandler } from "h3";
import type { SlideData } from "~/types/page-builder/slide-types/slide-3";

export default defineEventHandler((): SlideData => {
  return {
    badge: "معرض الصور",
    title: "لحظات من مشاريعنا",
    description: "يقدم هذا العرض مجموعة من الصور التي تعكس جودة أعمالنا واهتمامنا بالتفاصيل. تصفح الصور لاكتشاف نماذج من مشاريعنا والخدمات التي نقدمها لعملائنا.",
    buttonText: "عرض المزيد",
    items: [
      { image: "/page-builder/slides/slide3CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg2.jpg" },
      { image: "/page-builder/slides/slide3CardImg3.png" },
      { image: "/page-builder/slides/slide3CardImg1.jpg" },
      { image: "/page-builder/slides/slide3CardImg2.jpg" },
    ],
  };
});
