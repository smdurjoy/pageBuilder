import { defineEventHandler } from "h3";
import type { ContactData } from "~/types/page-builder/contact-types/contact-6";

export default defineEventHandler((): ContactData => {
  return {
    backgroundImage: "/page-builder/contact/contactPage3Bg.jpg",
    form: {
      title: "Send Your Message Directly",
      description: "Fill out the form below and our team will get back to you as soon as possible.",
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
      title: "Contact Us, How Can We Help?",
      description: "We are happy to connect with you at any time. You can contact us directly or send a message via the form below and we will respond to you as soon as possible.",
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
