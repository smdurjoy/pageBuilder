import { defineEventHandler } from "h3";
import type { Statistics7Data } from "~/types/page-builder/statistics-types/statistics-7";

export default defineEventHandler((): Statistics7Data => {
  return {
    items: [
      {
        value: "10",
        suffix: "+",
        label: "Years of Experience",
        bgClass: "pb-stat7-bg-1",
      },
      {
        value: "20",
        suffix: "+",
        label: "Projects",
        bgClass: "pb-stat7-bg-2",
      },
      {
        value: "50",
        suffix: "+",
        label: "Employees",
        bgClass: "pb-stat7-bg-3",
      },
      {
        value: "500",
        suffix: "+",
        label: "Happy Clients",
        bgClass: "pb-stat7-bg-4",
      },
    ],
  };
});
