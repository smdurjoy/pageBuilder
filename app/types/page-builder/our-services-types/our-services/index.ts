export interface OurServiceItem {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface OurServicesData {
  section: {
    title: string;
    subtitle: string;
  };
  services: OurServiceItem[];
}

