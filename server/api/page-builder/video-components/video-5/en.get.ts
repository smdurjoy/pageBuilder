import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-5";

export default defineEventHandler((): VideoData => {
  return {
    header: {
      title: "Discover More About Our Services",
      subtitle: "A collection of explanatory videos showcasing our services and featured projects",
    },
    playlist: [
      {
        id: "1",
        title: "Company Introduction",
        thumbnail: "/video/video1Bg.jpg",
        duration: "2:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "2",
        title: "Our Premium Services",
        thumbnail: "/video/video1Bg.jpg",
        duration: "3:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "3",
        title: "Factory Tour",
        thumbnail: "/video/video1Bg.jpg",
        duration: "1:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "4",
        title: "Customer Reviews",
        thumbnail: "/video/video1Bg.jpg",
        duration: "4:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
    currentIndexLabel: "Video {current} of {total}",
  };
});
