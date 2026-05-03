export interface SlideItem {
  image: string;
  title?: string;
}

export interface SlideData {
  title: string;
  description: string;
  items: SlideItem[];
}
