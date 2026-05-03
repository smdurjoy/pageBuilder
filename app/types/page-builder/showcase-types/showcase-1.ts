export interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
  detailsText: string;
  link: string;
}

export interface Showcase1Data {
  badge: string;
  title: string;
  description: string;
  exploreText: string;
  items: ShowcaseItem[];
}
