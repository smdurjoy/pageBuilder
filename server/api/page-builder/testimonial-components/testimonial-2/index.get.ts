import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-2";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "آراء عملائنا",
    title: "ماذا يقول عملاؤنا عن تجربتهم معنا",
    description: "عملائنا هم مصدر فخرنا، وتجاربهم معنا تعكس مدى التزامنا بتقديم أفضل الخدمات والمنتجات. من خلال آراءهم، يمكنكم الاطلاع على مستوى الاحترافية والاهتمام بالتفاصيل الذي نقدمه في كل خطوة، سواء كان ذلك في جودة المنتجات، سرعة الاستجابة، أو مستوى الدعم الذي نوفره لكل عميل. نحن نقدر ثقتكم ونحرص دائماً على تقديم تجربة تتجاوز توقعاتكم.",
    quoteIcon: "/page-builder/testimonials/quoteIcon1.svg",
    bgQuoteIcon: "/page-builder/testimonials/quoteIcon2.svg",
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
    ],
  };
});
