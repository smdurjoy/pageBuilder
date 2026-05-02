export interface ContactInfo {
  type: "email" | "phone" | "address";
  label: string;
  value: string;
  icon: string;
}

export interface ContactData {
  backgroundImage: string;
  form: {
    title: string;
    description: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    buttonText: string;
  };
  info: {
    title: string;
    description: string;
    items: ContactInfo[];
  };
}
