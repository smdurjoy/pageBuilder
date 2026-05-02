import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-1";

export default defineEventHandler((): AboutData => {
  return {
    title: "من نحن",
    description: "نحن شركة رائدة في مجال التكنولوجيا والابتكار، نسعى لتقديم حلول متطورة تلبي احتياجات عملائنا وتساهم في نجاحهم. منذ تأسيسنا عام 2010، نعمل على بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم خدمات عالية الجودة وحلول مبتكرة. فريقنا المتخصص يضم أكثر من 150 خبيراً في مختلف المجالات التقنية والإبداعية.",
    image: "/page-builder/about/about1CardImg.jpg",
    stats: [
      {
        value: "150+",
        label: "موظف محترف",
      },
      {
        value: "500+",
        label: "مشروع ناجح",
      },
      {
        value: "15",
        label: "عاماً من الخبرة",
      },
    ],
  };
});
