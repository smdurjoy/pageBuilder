import { defineEventHandler } from "h3";
import type { Social3Data } from "~/types/page-builder/social-types/social-3";

export default defineEventHandler((): Social3Data => {
  return {
    title: "Follow Me on Social Media",
    description: "Discover my latest content and work across different platforms",
    items: [
      {
        icon: "/page-builder/social/facebook.svg",
        name: "Facebook",
        followers: "90K Followers",
        description: "Join our Facebook community to follow updates, news, and new content that we share with our community.",
        buttonText: "Follow",
        link: "https://facebook.com",
        color: "#1877F2",
      },
      {
        icon: "/page-builder/social/instagram.svg",
        name: "Instagram",
        followers: "30K Followers",
        description: "Enjoy our photos and videos from events and highlights via Instagram.",
        buttonText: "Follow",
        link: "https://instagram.com",
        color: "#E1306C",
      },
      {
        icon: "/page-builder/social/linkedin.svg",
        name: "LinkedIn",
        followers: "50K Followers",
        description: "Follow us on LinkedIn for quick news and live updates.",
        buttonText: "Follow",
        link: "https://linkedin.com",
        color: "#0077B5",
      },
      {
        icon: "/page-builder/social/youtube.svg",
        name: "YouTube",
        followers: "10K Followers",
        description: "Subscribe to our YouTube channel to watch educational and entertaining videos.",
        buttonText: "Follow",
        link: "https://youtube.com",
        color: "#FF0000",
      },
    ],
  };
});
