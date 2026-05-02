export interface AboutFeature {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

export interface AboutData {
  header: {
    title: string;
    description: string;
    subDescription?: string;
  };
  gallery: {
    tall: string;
    landscape1: string;
    landscape2: string;
  };
  features: AboutFeature[];
}
