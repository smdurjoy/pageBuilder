export interface SocialItem {
  icon: string;
  name: string;
  followers: string;
  link: string;
  color: string;
}

export interface Social1Data {
  title: string;
  description: string;
  items: SocialItem[];
}
