export interface Stat10Item {
  value: string;
  suffix?: string;
  label: string;
  percentage: number;
}

export interface Statistics10Data {
  items: Stat10Item[];
}
