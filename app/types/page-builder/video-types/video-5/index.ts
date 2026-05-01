export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
}

export interface VideoData {
  header: {
    title: string;
    subtitle: string;
  };
  playlist: VideoItem[];
  currentIndexLabel: string; // e.g., "فيديو {current} من {total}"
}
