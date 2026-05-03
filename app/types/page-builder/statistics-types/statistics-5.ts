export interface Stat5Item {
  value: string;
  suffix?: string;
  label: string;
  percentage: number;
  colorClass: string;
}

export interface Statistics5Data {
  items: Stat5Item[];
}
