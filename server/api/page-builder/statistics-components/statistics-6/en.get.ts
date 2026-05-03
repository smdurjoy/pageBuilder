import { defineEventHandler } from "h3";
import type { Statistics6Data } from "~/types/page-builder/statistics-types/statistics-6";

export default defineEventHandler((): Statistics6Data => {
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
