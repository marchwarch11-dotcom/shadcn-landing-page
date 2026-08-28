export interface TeamLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role?: string;
  bio?: string;
  imageKey?: string;
  links: TeamLink[];
}

export const teamMembers: TeamMember[] = [];
