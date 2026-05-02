import { defineEventHandler } from "h3";
import type { ContactData } from "~/types/page-builder/contact-types/contact-1";

export default defineEventHandler((): ContactData => {
  return {
    form: {
      title: "أرسل رسالتك مباشرة",
      description: "املأ النموذج التالي وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.",
      placeholders: {
        name: "قم بكتابة اسمك",
        email: "قم بكتابة البريد الإلكتروني",
        phone: "قم بكتابة رقم هاتفك",
        subject: "قم بكتابة عنوان رسالتك",
        message: "قم بكتابة رسالتك",
      },
      buttonText: "إرسال الرسالة",
    },
    info: {
      title: "يسعدنا تواصلكم معنا",
      description: "يسعدنا تواصلكم معنا في أي وقت. يمكنكم الاتصال بنا مباشرة أو إرسال رسالة عبر النموذج التالي وسنقوم بالرد عليكم في أقرب وقت ممكن.",
      items: [
        {
          type: "email",
          label: "البريد الإلكتروني",
          value: "info@company.com",
          icon: "mail",
        },
        {
          type: "phone",
          label: "الهاتف",
          value: "+966 50 123 4567",
          icon: "phone",
        },
        {
          type: "address",
          label: "العنوان",
          value: "الرياض - المملكة العربية السعودية",
          icon: "map-pin",
        },
      ],
    },
  };
});
