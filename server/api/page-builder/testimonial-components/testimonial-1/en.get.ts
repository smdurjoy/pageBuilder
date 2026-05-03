import { defineEventHandler } from "h3";
import type { TestimonialData } from "~/types/page-builder/testimonial-types/testimonial-1";

export default defineEventHandler((): TestimonialData => {
  return {
    title: "What Our Customers Say About Us",
    description: "Our customers praise the quality of our products, fast delivery service, and seamless shopping experience.",
    quoteIcon: "/page-builder/testimonials/quoteIcon1.svg",
    buttonText: "Read More",
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
      {
        quote: "My experience was exceptional, the team is friendly and professional. The products are very luxurious, and I got amazing results.",
        user: {
          name: "Mazen Salem",
          avatar: "/page-builder/testimonials/user4.png",
        },
      },
    ],
  };
});
