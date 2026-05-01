export interface OurTeam3Member {
  image: string;
  name: string;
  role: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface OurTeam3Data {
  section: {
    title: string;
    subtitle: string;
  };
  members: OurTeam3Member[];
}
