import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-2";

export default defineEventHandler((): AboutData => {
  return {
    title: "من نحن",
    subtitle: "نحن نؤمن بقوة الابتكار والإبداع في تحويل الأفكار إلى واقع ملموس",
    description: "شركتنا تجمع بين الخبرة العريقة والتفكير المستقبلي لتقديم حلول متكاملة تتجاوز توقعات عملائنا. نعمل بشغف واحترافية لبناء مستقبل أفضل من خلال التكنولوجيا والابتكار المستدام. فريقنا المتميز يضع معايير جديدة في الصناعة من خلال التزامنا بالجودة والتميز في كل مشروع نقوم به.",
    backgroundImage: "/page-builder/about/about2BgImg.jpg",
    stats: [
      {
        value: "2010",
        label: "سنة التأسيس",
      },
      {
        value: "35+",
        label: "دولة حول العالم",
      },
      {
        value: "1000+",
        label: "عميل راض",
      },
      {
        value: "98%",
        label: "معدل الرضا",
      },
    ],
  };
});
