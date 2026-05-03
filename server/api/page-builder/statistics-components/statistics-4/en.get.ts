import { defineEventHandler } from "h3";
import type { Statistics4Data } from "~/types/page-builder/statistics-types/statistics-4";

export default defineEventHandler((): Statistics4Data => {
  return {
    backgroundImage: "/page-builder/statistics/statistics4BgImg.jpg",
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
