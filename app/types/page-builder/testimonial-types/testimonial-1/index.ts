export interface TestimonialItem {
  quote: string;
  user: {
    name: string;
    avatar: string;
  };
}

export interface TestimonialData {
  title: string;
  description: string;
  quoteIcon: string;
  items: TestimonialItem[];
  buttonText: string;
}
