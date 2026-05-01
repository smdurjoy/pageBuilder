import type { OurTeamMember as BaseMember } from "../our-team";

export interface OurTeam7Member extends BaseMember {
  bgColor: string;
  borderColor: string;
}

export interface OurTeam7Data {
  section: {
    title: string;
    subtitle: string;
  };
  members: OurTeam7Member[];
}
