export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContactItem {
  value: string;
  type: "phone" | "email";
}

export interface FooterSocialLink {
  platform: "instagram" | "tiktok" | "youtube" | "snapchat" | "twitter" | "facebook" | "linkedin";
  href: string;
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
  contact: {
    title: string;
    items: FooterContactItem[];
  };
  social: {
    title: string;
    links: FooterSocialLink[];
  };
  copyright: string;
}
