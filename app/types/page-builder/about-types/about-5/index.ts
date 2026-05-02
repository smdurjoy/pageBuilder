export interface AboutPillar {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

export interface AboutStat {
  value: string;
  label: string;
  color: string;
}

export interface AboutFeature {
  title: string;
  description: string;
  borderColor: string;
}

export interface AboutData {
  header: {
    title: string;
    description: string;
  };
  pillars: AboutPillar[];
  stats: AboutStat[];
  features: AboutFeature[];
}
