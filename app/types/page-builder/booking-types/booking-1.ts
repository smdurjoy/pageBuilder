export interface Booking1Field {
  label: string;
  placeholder: string;
  type?: string;
}

export interface Booking1Data {
  title: string;
  subtitle: string;
  fullName: Booking1Field;
  phone: Booking1Field;
  email: Booking1Field;
  notes: Booking1Field;
  termsTextPart1: string;
  termsLinkText: string;
  termsLinkUrl: string;
  termsTextPart2: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}
