import { defineEventHandler } from "h3";
import type { Statistics1Data } from "~/types/page-builder/statistics-types/statistics-1";

export default defineEventHandler((): Statistics1Data => {
  return {
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
