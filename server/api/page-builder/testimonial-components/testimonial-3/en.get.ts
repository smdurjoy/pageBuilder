import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-3";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "Customer Reviews",
    title: "What Our Customers Say About Their Experience",
    description: "Our customers are our source of pride, and their experiences with us reflect our commitment to providing the best services and products. Through their reviews, you can see the level of professionalism and attention to detail we provide at every step, whether in product quality, response speed, or the level of support we offer to each customer.",
    quoteIcon: "/page-builder/testimonials/quoteIcon3.svg",
    bgQuoteIcon: "/page-builder/testimonials/quoteIcon2.svg",
    items: [
      {
        quote: "My experience was wonderful with this team. The service was fast and organized, and they responded to all my inquiries with precision and friendliness. I liked the attention to detail and the feeling that the customer is important to them.",
        user: {
          name: "Mohammed Al-Otaibi",
          role: "Software Engineer",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote: "I was impressed by the product quality and fast delivery. The technical support team was very helpful and helped me choose what's best for my needs. An exceptional shopping experience from start to finish.",
        user: {
          name: "Sarah Hamad",
          role: "Graphic Designer",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
    ],
  };
});
