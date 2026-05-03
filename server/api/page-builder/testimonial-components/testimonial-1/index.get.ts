import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-1";

export default defineEventHandler((): TestimonialData => {
  return {
    title: "ماذا يقول زبائننا عن متجرنا",
    description: "عملائنا يشيدون بجودة منتجاتنا وخدمة التوصيل السريعة وتجربة التسوق السلسة.",
    quoteIcon: "/page-builder/testimonials/quoteIcon1.svg",
    buttonText: "قراءة المزيد",
    items: [
      {
        quote: "كنت صادقاً في دهشتي من مدى سلاسة العملية بأكملها. جودة المنتج ممتازة ووصول الطلب كان قبل الموعد المتوقع.",
        user: {
          name: "سارة محمد",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote: "لطالما أعجبتني تفاصيل التصميم، كل شيء يبدو متقناً. أشعر بالراحة أثناء استخدامه، مما يجعلني أوصي به.",
        user: {
          name: "أحمد علي",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote: "لقد قمت بتجربة عدة منتجات مشابهة، لكن هذا المنتج هو الأفضل. ستحبون الأداء العالي والسعر المعقول.",
        user: {
          name: "ليلى خالد",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
      {
        quote: "تجربتي كانت استثنائية، فريق العمل ودود واحترافية. المنتجات فاخرة جداً، وقد حصلت على نتائج مبهرة.",
        user: {
          name: "مازن سالم",
          avatar: "/page-builder/testimonials/user4.png",
        },
      },
    ],
  };
});
