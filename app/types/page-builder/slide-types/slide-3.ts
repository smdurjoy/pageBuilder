export interface SlideItem {
  image: string;
}

export interface SlideData {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  items: SlideItem[];
}
