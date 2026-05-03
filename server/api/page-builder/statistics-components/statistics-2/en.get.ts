import { defineEventHandler } from "h3";
import type { Statistics2Data } from "~/types/page-builder/statistics-types/statistics-2";

export default defineEventHandler((): Statistics2Data => {
  return {
    items: [
      {
        value: "10",
        suffix: "+",
        label: "Years of Experience",
        gradientClass: "pb-stat2-gradient-1",
      },
      {
        value: "20",
        suffix: "+",
        label: "Projects",
        gradientClass: "pb-stat2-gradient-2",
      },
      {
        value: "50",
        suffix: "+",
        label: "Employees",
        gradientClass: "pb-stat2-gradient-3",
      },
      {
        value: "500",
        suffix: "+",
        label: "Happy Clients",
        gradientClass: "pb-stat2-gradient-4",
      },
    ],
  };
});
