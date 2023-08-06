type LinksT = {
  id: string;
  name: string;
};

type SkillsT = {
  name: string;
};

export type ProjectT = {
  image: string;
  title: string;
  description: string;
  info?: string;
};

export type NavBarItemsLinksT = LinksT[];

export interface ConstantsI {
  NAVBAR_ITEMS_LINKS: NavBarItemsLinksT;
  SKILLS: SkillsT[];
  PROJECTS: ProjectT[];
  LINKEDIN_URL: string;
  GITHUB_URL: string;
}

export default {};
