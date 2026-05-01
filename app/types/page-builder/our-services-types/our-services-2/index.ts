export interface OurServices2Item {
  icon: string;
  title: string;
  description: string;
  features: string[];
  linkText: string;
  linkHref: string;
}

export interface OurServices2Data {
  section: {
    title: string;
    subtitle: string;
  };
  services: OurServices2Item[];
}

