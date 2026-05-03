import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-5";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "آراء عملائنا",
    title: "ماذا يقول عملاؤنا عن تجربتهم معنا",
    description: "عملائنا يشيدون بجودة منتجاتنا وخدمة التوصيل السريعة وتجربة التسوق السلسة.",
    quoteIcon: "/page-builder/testimonials/quoteIcon3.svg",
    bgQuoteIcon: "",
    items: [
      {
        quote: "كانت تجربتي رائعة مع هذا الفريق. الخدمة كانت سريعة ومنظمة، واستجابوا لكل استفساراتي بدقة وود. أعجبني الاهتمام بالتفاصيل والشعور بأن العميل مهم بالنسبة لهم. بالتأكيد سأعود للتعامل معهم مرة أخرى وأوصي بهم لأصدقائي.",
        user: {
          name: "محمد العتيبي",
          role: "مهندس برمجيات",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote: "لقد كانت تجربتي ممتازة مع هذه الشركة. من اللحظة التي تواصلت فيها معهم، كان لديهم استجابة سريعة واحترافية في التعامل. لقد برعوا في تقديم حلول مخصصة تناسب احتياجاتي. أشعر بالسعادة لنتيجة العمل وسأوصي بهم بشدة.",
        user: {
          name: "سارة الفالح",
          role: "مديرة مشاريع",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote: "فريق عمل رائع ومحترف. اهتمام بالغ بأدق التفاصيل وسرعة في الإنجاز. جودة المنتج فاقت توقعاتي بكثير. سأتعامل معهم دائماً.",
        user: {
          name: "أحمد السالم",
          role: "فنان فوتوغرافي",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
      {
        quote: "خدمة احترافية للغاية. الفريق متعاون جداً والنتائج مبهرة. أنصح الجميع بالتعامل معهم دون تردد.",
        user: {
          name: "ليلى محمود",
          role: "مصممة جرافيك",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
    ],
  };
});
