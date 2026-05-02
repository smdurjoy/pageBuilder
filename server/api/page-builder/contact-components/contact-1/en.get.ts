import { defineEventHandler } from "h3";
import type { ContactData } from "~/types/page-builder/contact-types/contact-1";

export default defineEventHandler((): ContactData => {
  return {
    form: {
      title: "Send your message directly",
      description: "Fill out the following form and our team will get back to you as soon as possible.",
      placeholders: {
        name: "Write your name",
        email: "Write your email",
        phone: "Write your phone number",
        subject: "Write your message subject",
        message: "Write your message",
      },
      buttonText: "Send Message",
    },
    info: {
      title: "We are happy to connect with you",
      description: "We are happy to hear from you at any time. You can call us directly or send a message via the following form and we will respond to you as soon as possible.",
      items: [
        {
          type: "email",
          label: "Email",
          value: "info@company.com",
          icon: "mail",
        },
        {
          type: "phone",
          label: "Phone",
          value: "+966 50 123 4567",
          icon: "phone",
        },
        {
          type: "address",
          label: "Address",
          value: "Riyadh - Saudi Arabia",
          icon: "map-pin",
        },
      ],
    },
  };
});
