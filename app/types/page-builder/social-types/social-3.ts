export interface Social3Item {
  icon: string;
  name: string;
  followers: string;
  description: string;
  buttonText: string;
  link: string;
  color: string;
}

export interface Social3Data {
  title: string;
  description: string;
  items: Social3Item[];
}
