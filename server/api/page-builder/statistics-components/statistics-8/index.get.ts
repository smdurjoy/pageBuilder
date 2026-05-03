import { defineEventHandler } from "h3";
import type { Statistics8Data } from "~/types/page-builder/statistics-types/statistics-8";

export default defineEventHandler((): Statistics8Data => {
  return {
    items: [
      {
        icon: "/page-builder/statistics/statisticsIcon1.svg",
        value: "10",
        suffix: "+",
        label: "سنوات خبرة",
      },
      {
        icon: "/page-builder/statistics/statisticsIcon2.svg",
        value: "20",
        suffix: "+",
        label: "مشروع",
      },
      {
        icon: "/page-builder/statistics/statisticsIcon3.svg",
        value: "50",
        suffix: "+",
        label: "موظف",
      },
      {
        icon: "/page-builder/statistics/statisticsIcon4.svg",
        value: "500",
        suffix: "+",
        label: "عميل راضي",
      },
    ],
  };
});
