export interface TestimonialItem {
  quote: string;
  user: {
    name: string;
    avatar: string;
  };
}

export interface TestimonialData {
  badge: string;
  title: string;
  description: string;
  quoteIcon: string;
  bgQuoteIcon: string;
  items: TestimonialItem[];
}
