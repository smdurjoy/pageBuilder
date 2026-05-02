export interface BannerCard {
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
  cards: BannerCard[];
}
