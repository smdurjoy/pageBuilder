export interface Stat3Item {
  icon: string;
  iconBgColor?: string;
  value: string;
  suffix?: string;
  label: string;
}

export interface Statistics3Data {
  items: Stat3Item[];
}
