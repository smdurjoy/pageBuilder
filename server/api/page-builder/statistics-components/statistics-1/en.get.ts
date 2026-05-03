import { defineEventHandler } from "h3";
import type { Statistics1Data } from "~/types/page-builder/statistics-types/statistics-1";

export default defineEventHandler((): Statistics1Data => {
  return {
    items: [
      {
        value: "10",
        suffix: "+",
        label: "Years of Experience",
      },
      {
        value: "20",
        suffix: "+",
        label: "Projects",
      },
      {
        value: "50",
        suffix: "+",
        label: "Employees",
      },
      {
        value: "500",
        suffix: "+",
        label: "Happy Clients",
      },
    ],
  };
});
