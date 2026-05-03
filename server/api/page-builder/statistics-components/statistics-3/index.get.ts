import { defineEventHandler } from "h3";
import type { Statistics3Data } from "~/types/page-builder/statistics-types/statistics-3";

export default defineEventHandler((): Statistics3Data => {
  return {
    items: [
      {
        icon: "/page-builder/statistics/statisticsIcon1.svg",
        iconBgColor: "pb-stat3-icon-bg-1",
        value: "10",
        suffix: "+",
        label: "سنوات خبرة",
      },
      {
        icon: "/page-builder/statistics/statisticsIcon2.svg",
        iconBgColor: "pb-stat3-icon-bg-2",
        value: "20",
        suffix: "+",
        label: "مشروع",
      },
      {
        icon: "/page-builder/statistics/statisticsIcon3.svg",
        iconBgColor: "pb-stat3-icon-bg-3",
        value: "50",
        suffix: "+",
        label: "موظف",
      },
      {
        icon: "/page-builder/statistics/statisticsIcon4.svg",
        iconBgColor: "pb-stat3-icon-bg-4",
        value: "500",
        suffix: "+",
        label: "عميل راضي",
      },
    ],
  };
});
