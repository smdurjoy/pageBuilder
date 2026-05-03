import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-6";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "",
    title: "ماذا يقول عملاؤنا عن تجربتهم معنا",
    description: "عملائنا يشيدون بجودة منتجاتنا وخدمة التوصيل السريعة وتجربة التسوق السلسة.",
    buttonText: "قراءة المزيد",
    quoteIcon: "/page-builder/testimonials/quoteIcon3.svg",
    bgQuoteIcon: "/page-builder/testimonials/quoteIcon2.svg",
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
          name: "أحمد السعيد",
          role: "فنان رقمي",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
      {
        quote: "التجربة كانت فريدة من نوعها. الفريق كان دائماً متاحاً للإجابة على استفساراتي. الخدمة ممتازة والجودة لا يعلى عليها.",
        user: {
          name: "خالد الحربي",
          role: "مصمم واجهات",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
    ],
  };
});
