export interface BannerData {
  header: {
    title: string;
    subtitle: string;
  };
  banner: {
    title: string;
    image: string;
    cta: {
      label: string;
      href: string;
    };
  };
}
