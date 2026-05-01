export interface VideoData {
  header: {
    title: string;
    subtitle: string;
  };
  card: {
    thumbnail: string;
    badge: string;
    title: string;
    description: string;
    duration: string;
    views: string;
    shareLabel: string;
  };
  footer: {
    ctaLabel: string;
    ctaHref: string;
  };
  videoUrl: string;
}
