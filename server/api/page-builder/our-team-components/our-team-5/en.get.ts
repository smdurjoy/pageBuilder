import { defineEventHandler } from "h3";
import type { OurTeamData } from "~/types/page-builder/our-team-types/our-team";

export default defineEventHandler((): OurTeamData => {
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
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member2.jpg",
        name: "Mohammed Ali",
        role: "Chief Technology Officer",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member3.jpg",
        name: "Layla Hassan",
        role: "Marketing Director",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member4.jpg",
        name: "Omar Khalid",
        role: "Sales Director",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member5.jpg",
        name: "Fatima Al-Zahra",
        role: "HR Director",
        twitter: "#",
        linkedin: "#",
      },
      {
        image: "/page-builder/our-team/member6.jpg",
        name: "Karim Youssef",
        role: "Operations Director",
        twitter: "#",
        linkedin: "#",
      },
    ],
  };
});
