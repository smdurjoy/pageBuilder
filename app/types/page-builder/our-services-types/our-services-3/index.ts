export interface OurServices3Item {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  bgColor: string;
  iconBgColor: string;
  btnColor: string;
  btnTextColor: string;
}

export interface OurServices3Data {
  section: {
    title: string;
    subtitle: string;
  };
  services: OurServices3Item[];
}

