export interface VideoData {
  header: {
    title: string;
    subtitle: string;
  };
  card: {
    badge: string;
    thumbnail: string;
    title: string;
    description: string;
    duration: string;
    views: string;
    shareLabel: string;
    videoUrl: string;
  };
  footer: {
    ctaLabel: string;
    ctaHref: string;
  };
}
