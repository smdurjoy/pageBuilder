import { defineEventHandler } from "h3";
import type { Showcase1Data } from "~/types/page-builder/showcase-types/showcase-1";

export default defineEventHandler((): Showcase1Data => {
  return {
    badge: "معرض أعمال",
    title: "تصميم المواقع الإلكترونية",
    description:
      "تصميم النماذج من مواقع إلكترونية قمنا بتصميمها مع التركيز على تجربة المستخدم والواجهة الحديثة. واقع الإلكترونية",
    exploreText: "استكشف المزيد",
    items: [
      {
        image: "/page-builder/showcase/showcase1Card1.png",
        title: "مجموعة غرفة المعيشة",
        description:
          "تصميم غرفة معيشة أنيق يجمع بين الراحة والأناقة. الألوان الدافئة تضفي حيوية، والإضاءة المناسبة تخلق جواً مريحاً.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card2.png",
        title: "غرفة الطعام",
        description:
          "تجربة تناول طعام مميزة مع تصميم عصري يجمع بين الخشب والزجاج. الإضاءة الخافتة تضفي لمسة رومانسية.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card3.png",
        title: "غرفة النوم",
        description:
          "مساحة هادئة ومريحة تعزز الاسترخاء. الألوان المحايدة مع لمسات من الخشب الطبيعي.",
        detailsText: "عرض التفاصيل",
        link: "#",
      },
    ],
  };
});
