import { defineEventHandler } from "h3";
import type { OurTeam3Data } from "~/types/page-builder/our-team-types/our-team-3";

export default defineEventHandler((): OurTeam3Data => {
  return {
    section: {
      title: "Our Team",
      subtitle:
        "We come together to make a difference — meet the experts who lead our vision toward the future",
    },
    members: [
      {
        image: "/page-builder/our-team/member1.jpg",
        name: "Sarah Ahmed",
        role: "Chief Executive Officer",
        bio: "A distinguished expert with years of experience leading successful projects and achieving the company's strategic goals",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member2.jpg",
        name: "Mohammed Ali",
        role: "Chief Technology Officer",
        bio: "A distinguished expert with years of experience leading successful projects and achieving the company's strategic goals",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member3.jpg",
        name: "Sarah Ahmed",
        role: "Chief Executive Officer",
        bio: "A distinguished expert with years of experience leading successful projects and achieving the company's strategic goals",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member4.jpg",
        name: "Mohammed Ali",
        role: "Chief Technology Officer",
        bio: "A distinguished expert with years of experience leading successful projects and achieving the company's strategic goals",
        twitter: "#",
        linkedin: "#",
      },
    ],
  };
});
