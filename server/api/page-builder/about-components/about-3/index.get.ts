import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-3";

export default defineEventHandler((): AboutData => {
  return {
    title: "من نحن",
    subtitle: "رواد في مجال التحول الرقمي والابتكار التقني",
    description: "نساعد الشركات على تحقيق أهدافها من خلال حلول تقنية مبتكرة ومتخصصة. نجمع بين الخبرة العالمية والفهم المحلي لتقديم خدمات استثنائية تحدث فرقاً حقيقياً في نجاح أعمال عملائنا.",
    backgroundImage: "/page-builder/about/about3BgImg.jpg",
    stats: [
      {
        value: "150+",
        label: "خبير متخصص",
      },
      {
        value: "500+",
        label: "مشروع مكتمل",
      },
      {
        value: "15",
        label: "سنة خبرة",
      },
    ],
    cta: {
      label: "اكتشف المزيد",
      href: "#",
    },
  };
});
