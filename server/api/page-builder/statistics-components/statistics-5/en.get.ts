import { defineEventHandler } from "h3";
import type { Statistics5Data } from "~/types/page-builder/statistics-types/statistics-5";

export default defineEventHandler((): Statistics5Data => {
  return {
    items: [
      {
        value: "50",
        suffix: "+",
        label: "Employees",
        percentage: 50,
        colorClass: "pb-stat5-color-1",
      },
      {
        value: "500",
        suffix: "+",
        label: "Happy Clients",
        percentage: 100,
        colorClass: "pb-stat5-color-2",
      },
      {
        value: "10",
        suffix: "+",
        label: "Years of Experience",
        percentage: 67,
        colorClass: "pb-stat5-color-3",
      },
      {
        value: "20",
        suffix: "+",
        label: "Projects",
        percentage: 40,
        colorClass: "pb-stat5-color-4",
      },
    ],
  };
});
