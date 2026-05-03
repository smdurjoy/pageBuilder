import { defineEventHandler } from "h3";
import type { Statistics7Data } from "~/types/page-builder/statistics-types/statistics-7";

export default defineEventHandler((): Statistics7Data => {
  return {
    items: [
      {
        value: "10",
        suffix: "+",
        label: "سنوات خبرة",
        bgClass: "pb-stat7-bg-1",
      },
      {
        value: "20",
        suffix: "+",
        label: "مشروع",
        bgClass: "pb-stat7-bg-2",
      },
      {
        value: "50",
        suffix: "+",
        label: "موظف",
        bgClass: "pb-stat7-bg-3",
      },
      {
        value: "500",
        suffix: "+",
        label: "عميل راضي",
        bgClass: "pb-stat7-bg-4",
      },
    ],
  };
});
