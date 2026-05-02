import { defineEventHandler } from "h3";
import type { ContactData } from "~/types/page-builder/contact-types/contact-2";

export default defineEventHandler((): ContactData => {
  return {
    form: {
      title: "تواصل معنا الآن",
      description: "شاركنا استفسارك أو طلبك وسيتواصل معك أحد أعضاء فريقنا قريباً.",
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
      title: "تواصل معنا، كيف يمكننا المساعدة ؟",
      description: "يسعدنا تواصلكم معنا في أي وقت. يمكنكم الاتصال بنا مباشرة أو إرسال رسالة عبر النموذج التالي وسنقوم بالرد عليكم في أقرب وقت ممكن.",
      items: [
        {
          type: "phone",
          label: "الهاتف",
          value: "+966 50 123 4567",
          icon: "phone",
        },
        {
          type: "email",
          label: "البريد الإلكتروني",
          value: "info@company.com",
          icon: "mail",
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
