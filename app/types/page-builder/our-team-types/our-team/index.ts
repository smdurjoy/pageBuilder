export interface OurTeamMember {
  image: string;
  name: string;
  role: string;
  twitter?: string;
  linkedin?: string;
}

export interface OurTeamData {
  section: {
    title: string;
    subtitle: string;
  };
  members: OurTeamMember[];
}
