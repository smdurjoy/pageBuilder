export interface Stat4Item {
  value: string;
  suffix?: string;
  label: string;
}

export interface Statistics4Data {
  backgroundImage: string;
  items: Stat4Item[];
}
