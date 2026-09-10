export type Link = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  subtitle: string;
  badge?: string;
  summary: string;
  role: string;
  tasks: string[];
  lesson: string;
  result?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  eyebrow: string;
  school: string;
  major: string;
  year: string;
  tagline: string;
  links: Link[];
  projects: Project[];
  interests: string[];
  hobbies: string[];
  skills: SkillGroup[];
  study: {
    name: string;
    wantToBuild: {
      title: string;
      description: string;
    };
    goals: string[];
  };
};
