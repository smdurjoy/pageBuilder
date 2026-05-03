import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-7";

export default defineEventHandler((): TestimonialData => {
  return {
    title: "ماذا يقول زبائننا عن متجرنا",
    description:
      "عملائنا يشيدون بجودة منتجاتنا وخدمة التوصيل السريعة وتجربة التسوق السلسة.",
    buttonText: "قراءة المزيد",
    quoteIcon: "/page-builder/testimonials/quoteIcon1.svg",
    items: [
      {
        quote:
          "لطالما أعجبتني تفاصيل التصميم، كل شيء يبدو متقناً. أشعر بالراحة أثناء استخدامه، مما يجعلني أوصي به.",
        user: {
          name: "أحمد علي",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote:
          "تجربتي كانت رائعة، الخدمة كانت سريعة واحترافية. أقدر الجودة العالية التي حصلت عليها دون عناء.",
        user: {
          name: "ماجد حسين",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
      {
        quote:
          "لقد قمت بتجربة عدة منتجات مشابهة، لكن هذا المنتج هو الأفضل. ستحبون الأداء العالي والسعر المعقول.",
        user: {
          name: "ليلى خالد",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote:
          "أنا فعلاً مندهش من مدى جودة هذا المنتج. وصل الطلب قبل الموعد المحدد وكان كل شيء مثالياً.",
        user: {
          name: "سارة محمد",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote:
          "لطالما أعجبتني تفاصيل التصميم، كل شيء يبدو متقناً. أشعر بالراحة أثناء استخدامه، مما يجعلني أوصي به.",
        user: {
          name: "أحمد علي",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote:
          "تجربتي كانت رائعة، الخدمة كانت سريعة واحترافية. أقدر الجودة العالية التي حصلت عليها دون عناء.",
        user: {
          name: "ماجد حسين",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
    ],
  };
});
