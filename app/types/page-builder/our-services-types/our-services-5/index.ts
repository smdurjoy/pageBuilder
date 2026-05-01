export interface OurServices5Item {
  image: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface OurServices5Data {
  section: {
    title: string;
    subtitle: string;
  };
  services: OurServices5Item[];
}
