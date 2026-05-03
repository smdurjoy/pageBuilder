import { defineEventHandler } from "h3";
import type { Statistics10Data } from "~/types/page-builder/statistics-types/statistics-10";

export default defineEventHandler((): Statistics10Data => {
  return {
    items: [
      {
        value: "50",
        suffix: "+",
        label: "Employees",
        percentage: 50,
      },
      {
        value: "500",
        suffix: "+",
        label: "Happy Clients",
        percentage: 100,
      },
      {
        value: "10",
        suffix: "+",
        label: "Years of Experience",
        percentage: 67,
      },
      {
        value: "20",
        suffix: "+",
        label: "Projects",
        percentage: 40,
      },
    ],
  };
});
