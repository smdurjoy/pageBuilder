export interface Hero4Data {
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
    image: string;
    videoUrl: string;
  };
}
