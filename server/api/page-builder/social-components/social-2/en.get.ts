import { defineEventHandler } from "h3";
import type { Social1Data } from "~/types/page-builder/social-types/social-1";

export default defineEventHandler((): Social1Data => {
  return {
    title: "Follow Me on Social Media",
    description: "Discover my latest content and work across different platforms",
    items: [
      {
        icon: "/page-builder/social/instagram.svg",
        name: "Instagram",
        followers: "1.20K Followers",
        link: "https://instagram.com",
        color: "#E1306C",
      },
      {
        icon: "/page-builder/social/facebook.svg",
        name: "Facebook",
        followers: "1.20K Followers",
        link: "https://facebook.com",
        color: "#1877F2",
      },
      {
        icon: "/page-builder/social/youtube.svg",
        name: "YouTube",
        followers: "1.20K Followers",
        link: "https://youtube.com",
        color: "#FF0000",
      },
      {
        icon: "/page-builder/social/linkedin.svg",
        name: "LinkedIn",
        followers: "1.20K Followers",
        link: "https://linkedin.com",
        color: "#1877F2",
      },
    ],
  };
});
