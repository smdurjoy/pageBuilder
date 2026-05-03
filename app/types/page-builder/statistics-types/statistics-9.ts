export interface Stat9Item {
  value: string;
  suffix?: string;
  label: string;
}

export interface Statistics9Data {
  backgroundImage: string;
  items: Stat9Item[];
}
