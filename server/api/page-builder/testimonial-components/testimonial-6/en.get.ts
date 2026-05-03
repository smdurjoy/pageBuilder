import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-6";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "",
    title: "What Our Customers Say About Their Experience",
    description: "Our customers praise the quality of our products, fast delivery service, and seamless shopping experience.",
    buttonText: "Read More",
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
        quote: "I had an excellent experience with this company. From the moment I contacted them, they were quick and professional. They excelled in providing customized solutions that fit my needs. I feel happy with the result.",
        user: {
          name: "Sarah Al-Faleh",
          role: "Project Manager",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote: "Great team and professional work. Attention to the smallest details and speed in achievement. The product quality far exceeded my expectations.",
        user: {
          name: "Ahmed Al-Saeed",
          role: "Digital Artist",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
      {
        quote: "The experience was unique. The team was always available to answer my questions. Excellent service and quality is unbeatable.",
        user: {
          name: "Khaled Al-Harbi",
          role: "UI Designer",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
    ],
  };
});
