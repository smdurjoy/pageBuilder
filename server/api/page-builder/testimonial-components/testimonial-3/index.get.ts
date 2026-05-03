import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-3";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "آراء عملائنا",
    title: "ماذا يقول عملاؤنا عن تجربتهم معنا",
    description: "عملائنا هم مصدر فخرنا، وتجاربهم معنا تعكس مدى التزامنا بتقديم أفضل الخدمات والمنتجات. من خلال آراءهم، يمكنكم الاطلاع على مستوى الاحترافية والاهتمام بالتفاصيل الذي نقدمه في كل خطوة، سواء كان ذلك في جودة المنتجات، سرعة الاستجابة، أو مستوى الدعم الذي نوفره لكل عميل. نحن نقدر ثقتكم ونحرص دائماً على تقديم تجربة تتجاوز توقعاتكم.",
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
        quote: "لقد انبهرت بجودة المنتج وسرعة التوصيل. فريق الدعم الفني كان متعاوناً جداً وساعدني في اختيار الأنسب لاحتياجاتي. تجربة تسوق استثنائية من البداية وحتى النهاية.",
        user: {
          name: "سارة حمد",
          role: "مصممة جرافيك",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
    ],
  };
});
