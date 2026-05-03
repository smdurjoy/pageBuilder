import { defineEventHandler } from "h3";
import type { Showcase1Data } from "~/types/page-builder/showcase-types/showcase-1";

export default defineEventHandler((): Showcase1Data => {
  return {
    badge: "معرض أعمال",
    title: "تصميم المواقع الإلكترونية",
    description: "تصميم النماذج من مواقع إلكترونية قمنا بتصميمها مع التركيز على تجربة المستخدم والواجهة الحديثة لمواقع الإلكترونية",
    exploreText: "استكشف للمزيد",
    items: [
      {
        image: "/page-builder/showcase/showcase1Card1.png",
        title: "موقع شركة تقنية",
        description: "تصميم موقع حديث يعرض خدمات شركة تقنية بشكل احترافي وسيل الاتصال.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card2.png",
        title: "موقع شركة استشارات",
        description: "موقع احترافي يعرض الخدمات والاستراتيجيات التي تقدمها شركة استشارات أعمال.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card3.png",
        title: "موقع مطعم فاخر",
        description: "تصميم موقع يعرض قائمة الطعام وأجواء الطعم بطريقة جذابة.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card4.png",
        title: "موقع شخصي",
        description: "موقع تعريفي يعرض الخبرات والأعمال السابقة بأسلوب احترافي.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card5.png",
        title: "موقع تجاري متكامل",
        description: "منصة تجارية شاملة تجمع بين التصميم العصري والأداء القوي.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
    ],
  };
});
