import { defineEventHandler } from "h3";
import type { Showcase1Data } from "~/types/page-builder/showcase-types/showcase-1";

export default defineEventHandler((): Showcase1Data => {
  return {
    badge: "Portfolio",
    title: "Website Design",
    description: "A showcase of websites we have designed with a focus on user experience and modern UI for electronic platforms.",
    exploreText: "Explore More",
    items: [
      {
        image: "/page-builder/showcase/showcase1Card1.png",
        title: "Tech Company Website",
        description: "A modern website showcasing a tech company's services professionally with easy contact options.",
        detailsText: "View Details",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card2.png",
        title: "Consulting Firm Website",
        description: "A professional website presenting the services and strategies offered by a business consulting company.",
        detailsText: "View Details",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card3.png",
        title: "Fine Dining Restaurant",
        description: "A website showcasing the menu and dining atmosphere in an attractive, elegant way.",
        detailsText: "View Details",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card4.png",
        title: "Personal Portfolio",
        description: "A personal site presenting past experience and work in a professional manner.",
        detailsText: "View Details",
        link: "#",
      },
      {
        image: "/page-builder/showcase/showcase1Card5.png",
        title: "Full E-Commerce Platform",
        description: "A comprehensive commercial platform combining modern design with powerful performance.",
        detailsText: "View Details",
        link: "#",
      },
    ],
  };
});
