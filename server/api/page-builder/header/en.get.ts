import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  const data = {
    logoText: "Logo",
    menus: [
      { title: "Home", link: "/" },
      { title: "Services", link: "/services" },
      { title: "Projects", link: "/projects" },
      { title: "Blog", link: "/blog" },
      { title: "About Us", link: "/about" },
      { title: "Contact", link: "/contact" },
    ],
    buttonText: "Let's Talk",
    buttonLink: "/contact",
    address: "123 Academic Street, Education City",
    email: "info@academy.edu",
  };

  return data;
});
