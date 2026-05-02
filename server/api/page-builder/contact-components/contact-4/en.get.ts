import { defineEventHandler } from "h3";
import type { ContactData } from "~/types/page-builder/contact-types/contact-4";

export default defineEventHandler((): ContactData => {
  return {
    form: {
      title: "Contact Us Now",
      description: "Share your inquiry or request and one of our team members will contact you soon.",
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
      title: "Contact us, how can we help?",
      description: "We are happy to hear from you at any time. You can call us directly or send a message via the following form and we will respond to you as soon as possible.",
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
          value: "Riyadh - Saudi Arabia",
          icon: "map-pin",
        },
      ],
    },
  };
});
