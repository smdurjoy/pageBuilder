export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  stats: AboutStat[];
  cta: {
    label: string;
    href: string;
  };
}
