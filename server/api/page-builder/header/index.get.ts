import { defineEventHandler } from "h3";
import type { HeaderData } from "~/types/page-builder/header";

export default defineEventHandler((event) => {
  const data: HeaderData = {
    logoText: "شعار",
    menus: [
      { title: "الرئيسية", link: "/" },
      { title: "الخدمات", link: "/services" },
      { title: "المشاريع", link: "/projects" },
      { title: "مدونة", link: "/blog" },
      { title: "من نحن", link: "/about" },
      { title: "اتصل", link: "/contact" },
    ],
    buttonText: "دعنا نتحدث",
    buttonLink: "/contact",
    address: "الرياض، السعودية",
    email: "info@example.com",
  };

  return data;
});
