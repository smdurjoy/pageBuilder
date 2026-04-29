export interface Hero6Data {
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
    playStoreIcon: string;
    playStoreLink: string;
    appStoreIcon: string;
    appStoreLink: string;
    images: string[];
  };
}
