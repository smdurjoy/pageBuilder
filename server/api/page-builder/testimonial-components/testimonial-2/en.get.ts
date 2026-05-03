import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-2";

export default defineEventHandler((): TestimonialData => {
  return {
    badge: "Customer Reviews",
    title: "What Our Customers Say About Their Experience",
    description: "Our customers are our source of pride, and their experiences with us reflect our commitment to providing the best services and products. Through their reviews, you can see the level of professionalism and attention to detail we provide at every step, whether in product quality, response speed, or the level of support we offer to each customer. We appreciate your trust and always strive to provide an experience that exceeds your expectations.",
    quoteIcon: "/page-builder/testimonials/quoteIcon1.svg",
    bgQuoteIcon: "/page-builder/testimonials/quoteIcon2.svg",
    items: [
      {
        quote: "I was truly surprised by how smooth the whole process was. Product quality is excellent and delivery was earlier than expected.",
        user: {
          name: "Sarah Ahmed",
          avatar: "/page-builder/testimonials/user1.png",
        },
      },
      {
        quote: "I have always loved the design details, everything looks perfect. I feel comfortable using it, which makes me recommend it.",
        user: {
          name: "Ahmed Ali",
          avatar: "/page-builder/testimonials/user2.png",
        },
      },
      {
        quote: "I have tried several similar products, but this product is the best. You will love the high performance and reasonable price.",
        user: {
          name: "Layla Khaled",
          avatar: "/page-builder/testimonials/user3.png",
        },
      },
    ],
  };
});
