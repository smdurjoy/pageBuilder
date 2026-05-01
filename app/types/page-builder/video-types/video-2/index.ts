export interface VideoFeature {
  label: string;
}

export interface VideoData {
  badge: string;
  title: string;
  description: string;
  features: VideoFeature[];
  cta: {
    label: string;
    href: string;
  };
  thumbnail: string;
  videoUrl: string;
}
