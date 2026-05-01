export interface VideoData {
  badge: string;
  title: string;
  description: string;
  ctas: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
  thumbnail: string;
  videoUrl: string;
  isLive: boolean;
  liveText: string;
  stat: {
    value: string;
    label: string;
  };
  bgImage: string;
}
