import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-7";

export default defineEventHandler((): TestimonialData => {
  return {
    title: "What Our Customers Say About Our Store",
    description:
      "Our customers praise the quality of our products, fast delivery service, and seamless shopping experience.",
    buttonText: "Read More",
    quoteIcon: "/page-builder/testimonials/quoteIcon1.svg",
    items: [
      {
        quote:
          "I have always liked the design details, everything seems perfect. I feel comfortable using it, which makes me recommend it.",
        user: {
          name: "Ahmed Ali",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote:
          "My experience was wonderful, the service was fast and professional. I appreciate the high quality I got without trouble.",
        user: {
          name: "Majed Hussein",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
      {
        quote:
          "I have tried several similar products, but this one is the best. You will love the high performance and reasonable price.",
        user: {
          name: "Layla Khaled",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote:
          "I am really surprised by how good this product is. The order arrived before the scheduled time and everything was perfect.",
        user: {
          name: "Sarah Mohammed",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote:
          "I have always liked the design details, everything seems perfect. I feel comfortable using it, which makes me recommend it.",
        user: {
          name: "Ahmed Ali",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote:
          "My experience was wonderful, the service was fast and professional. I appreciate the high quality I got without trouble.",
        user: {
          name: "Majed Hussein",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
    ],
  };
});
