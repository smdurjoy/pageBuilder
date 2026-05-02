import { defineEventHandler } from "h3";
import type { AboutData } from "~/types/page-builder/about-types/about-5";

export default defineEventHandler((): AboutData => {
  return {
    header: {
      title: "About Us",
      description: "We are a leading provider of advanced technical solutions, combining experience and innovation to serve our clients.",
    },
    pillars: [
      {
        title: "Our Values",
        description: "Innovation, quality, transparency, and a commitment to excellence in everything we do. We believe true success comes from teamwork and dedication.",
        icon: "star",
        iconBg: "#f5f3ff",
      },
      {
        title: "Our Mission",
        description: "Empowering companies to achieve their goals through innovative and specialized technical solutions, and building long-term partnerships based on trust, excellence, and tangible results.",
        icon: "file-text",
        iconBg: "#e6fffa",
      },
      {
        title: "Our Vision",
        description: "To be the first choice for companies seeking digital transformation and innovation, by providing distinguished technical solutions that create a positive impact on the business community.",
        icon: "eye",
        iconBg: "#ebf8ff",
      },
    ],
    stats: [
      {
        value: "98%",
        label: "Customer Satisfaction",
        color: "#ff6b00",
      },
      {
        value: "150+",
        label: "Professional Experts",
        color: "#a855f7",
      },
      {
        value: "500+",
        label: "Successful Projects",
        color: "#10b981",
      },
      {
        value: "15+",
        label: "Years of Experience",
        color: "#2563eb",
      },
    ],
    features: [
      {
        title: "Continuous Support",
        description: "We provide 24/7 continuous technical support to ensure your business continuity and resolve any issues you may face immediately.",
        borderColor: "#10b981",
      },
      {
        title: "Specialized Team",
        description: "We have a team of specialized experts in various technical fields, working in harmony to provide the best solutions for our clients.",
        borderColor: "#2563eb",
      },
      {
        title: "Modern Technologies",
        description: "We use the latest global technologies and tools to ensure the provision of advanced and scalable solutions for the future.",
        borderColor: "#ff6b00",
      },
      {
        title: "Customized Solutions",
        description: "Every project is unique, so we provide solutions specifically designed to meet your special needs and achieve your specific goals.",
        borderColor: "#a855f7",
      },
    ],
  };
});
