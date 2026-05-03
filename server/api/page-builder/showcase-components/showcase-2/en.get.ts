import { defineEventHandler } from "h3";
import type { Showcase1Data } from "~/types/page-builder/showcase-types/showcase-1";

export default defineEventHandler((): Showcase1Data => {
  return {
    badge: "Portfolio",
    title: "Website Design",
    description:
      "A showcase of websites we have designed with a focus on user experience and modern UI for electronic platforms.",
    exploreText: "Explore More",
    items: [
      {
        image: "/page-builder/showcase/showcase1Card1.png",
        title: "Living Room Set",
        description:
          "An elegant living room design combining comfort and style. Warm colors add vitality, and proper lighting creates a relaxing atmosphere.",
        detailsText: "View Details",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card2.png",
        title: "Dining Room",
        description:
          "A unique dining experience with a modern design combining wood and glass. Dim lighting adds a romantic touch.",
        detailsText: "View Details",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card3.png",
        title: "Bedroom",
        description:
          "A calm and comfortable space that promotes relaxation. Neutral colors with touches of natural wood.",
        detailsText: "View Details",
        link: "#",
      },
    ],
  };
});
