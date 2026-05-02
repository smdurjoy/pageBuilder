export interface AboutFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface AboutData {
  header: {
    title: string;
    description: string;
    subDescription: string;
  };
  gallery: string[];
  features: AboutFeature[];
}
