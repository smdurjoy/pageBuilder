export interface User {
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialItem {
  quote: string;
  user: User;
}

export interface TestimonialData {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  quoteIcon: string;
  bgQuoteIcon: string;
  items: TestimonialItem[];
}
