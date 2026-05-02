export interface BannerSlide {
  id: string;
  title: string;
  image: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface BannerData {
  header: {
    title: string;
    subtitle: string;
  };
  slides: BannerSlide[];
}
