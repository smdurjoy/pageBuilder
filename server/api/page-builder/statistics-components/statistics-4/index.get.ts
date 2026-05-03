import { defineEventHandler } from "h3";
import type { Statistics4Data } from "~/types/page-builder/statistics-types/statistics-4";

export default defineEventHandler((): Statistics4Data => {
  return {
    backgroundImage: "/page-builder/statistics/statistics4BgImg.jpg",
    items: [
      {
        value: "10",
        suffix: "+",
        label: "سنوات خبرة",
      },
      {
        value: "20",
        suffix: "+",
        label: "مشروع",
      },
      {
        value: "50",
        suffix: "+",
        label: "موظف",
      },
      {
        value: "500",
        suffix: "+",
        label: "عميل راضي",
      },
    ],
  };
});
