export interface OurServices4Item {
  icon: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface OurServices4Data {
  section: {
    title: string;
    subtitle: string;
  };
  services: OurServices4Item[];
}

