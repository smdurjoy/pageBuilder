import { defineEventHandler } from "h3";
import type { ContactData } from "~/types/page-builder/contact-types/contact-3";

export default defineEventHandler((): ContactData => {
  return {
    backgroundImage: "/page-builder/contact/contactPage3Bg.jpg",
    form: {
      title: "Get in Touch",
      placeholders: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your Message...",
      },
      buttonText: "Send Message",
    },
    info: {
      title: "Contact Info",
      description: "Fill the form and our team will get back to you within 24 hours.",
      items: [
        {
          type: "phone",
          label: "Phone",
          value: "+966 50 123 4567",
          icon: "phone",
        },
        {
          type: "email",
          label: "Email",
          value: "info@company.com",
          icon: "mail",
        },
        {
          type: "address",
          label: "Address",
          value: "Riyadh, Saudi Arabia",
          icon: "map-pin",
        },
      ],
    },
  };
});
