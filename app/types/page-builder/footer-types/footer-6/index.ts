export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  platform: "instagram" | "tiktok" | "youtube" | "snapchat" | "twitter" | "facebook" | "linkedin";
  href: string;
}

export interface FooterContactCard {
  title: string;
  subtitle: string;
  value: string;
  type: "phone" | "email";
}

export interface FooterData {
  company: {
    name: string;
    logo: string;
    description: string;
  };
  quickLinks: {
    title: string;
    links: FooterLink[];
  };
  contactCards: FooterContactCard[];
  social: {
    links: FooterSocialLink[];
  };
  copyright: string;
}
