export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  platform: "instagram" | "tiktok" | "youtube" | "snapchat" | "twitter" | "facebook" | "linkedin";
  href: string;
}

export interface FooterData {
  company: {
    name: string;
    logo: string;
  };
  links: FooterLink[];
  social: {
    links: FooterSocialLink[];
  };
  copyright: string;
}
