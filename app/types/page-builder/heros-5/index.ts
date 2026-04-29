export interface HeroBottomStep {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Hero5Data {
  navbar: {
    logoText: string;
    menus: { title: string; link: string }[];
    actionText: string;
    actionLink: string;
    langIcon: string;
    profileIcon: string;
  };
  content: {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    backgroundImage: string;
  };
}
