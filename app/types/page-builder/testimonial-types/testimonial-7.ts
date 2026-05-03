export interface User {
  name: string;
  avatar: string;
}

export interface TestimonialItem {
  quote: string;
  user: User;
}

export interface TestimonialData {
  title: string;
  description: string;
  buttonText: string;
  quoteIcon: string;
  items: TestimonialItem[];
}
