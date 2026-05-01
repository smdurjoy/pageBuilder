import { defineEventHandler } from "h3";
import type { OurTeam7Data } from "~/types/page-builder/our-team-types/our-team-7";

export default defineEventHandler((): OurTeam7Data => {
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
        bgColor: "#ECFEFF",
        borderColor: "#A5F3FC",
      },
      {
        image: "/page-builder/our-team/member2.jpg",
        name: "Mohammed Ali",
        role: "Chief Technology Officer",
        twitter: "#",
        linkedin: "#",
        bgColor: "#FDF2F8",
        borderColor: "#FBCFE8",
      },
      {
        image: "/page-builder/our-team/member3.jpg",
        name: "Layla Hassan",
        role: "Marketing Director",
        twitter: "#",
        linkedin: "#",
        bgColor: "#FAF5FF",
        borderColor: "#E9D5FF",
      },
      {
        image: "/page-builder/our-team/member4.jpg",
        name: "Omar Khalid",
        role: "Sales Director",
        twitter: "#",
        linkedin: "#",
        bgColor: "#EFF6FF",
        borderColor: "#BFDBFE",
      },
      {
        image: "/page-builder/our-team/member5.jpg",
        name: "Fatima Al-Zahra",
        role: "HR Director",
        twitter: "#",
        linkedin: "#",
        bgColor: "#F5F3FF",
        borderColor: "#DDD6FE",
      },
      {
        image: "/page-builder/our-team/member6.jpg",
        name: "Karim Youssef",
        role: "Operations Director",
        twitter: "#",
        linkedin: "#",
        bgColor: "#FFF1F2",
        borderColor: "#FECDD3",
      },
      {
        image: "/page-builder/our-team/member7.jpg",
        name: "Nour Al-Din",
        role: "Design Director",
        twitter: "#",
        linkedin: "#",
        bgColor: "#F0FDFA",
        borderColor: "#99F6E4",
      },
      {
        image: "/page-builder/our-team/member8.jpg",
        name: "Ahmed Abdullah",
        role: "Project Manager",
        twitter: "#",
        linkedin: "#",
        bgColor: "#ECFEFF",
        borderColor: "#A5F3FC",
      },
    ],
  };
});
