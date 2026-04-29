export interface HeaderMenu {
  title: string;
  link: string;
}

export interface HeaderData {
  logoText: string;
  menus: HeaderMenu[];
  buttonText: string;
  buttonLink: string;
  address?: string;
  email?: string;
}
