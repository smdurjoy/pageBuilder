export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  description: string;
  image: string;
  stats: AboutStat[];
}
