import { defineEventHandler } from "h3";
import type { VideoData } from "~/types/page-builder/video-types/video-5";

export default defineEventHandler((): VideoData => {
  return {
    header: {
      title: "اكتشف المزيد عن خدماتنا",
      subtitle: "مجموعة من الفيديوهات التوضيحية التي تعرض خدماتنا ومشاريعنا المميزة",
    },
    playlist: [
      {
        id: "1",
        title: "مقدمة عن الشركة",
        thumbnail: "/video/video1Bg.jpg",
        duration: "2:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "2",
        title: "خدماتنا المتميزة",
        thumbnail: "/video/video1Bg.jpg",
        duration: "3:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "3",
        title: "جولة في المصنع",
        thumbnail: "/video/video1Bg.jpg",
        duration: "1:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "4",
        title: "آراء العملاء",
        thumbnail: "/video/video1Bg.jpg",
        duration: "4:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
    currentIndexLabel: "فيديو {current} من {total}",
  };
});
