export interface Certificate {
  title: string;
  company: string;
  companyIcon: React.ReactNode;
  skills: string[];
  link: string;
}

export type ProjectData = {
  projectName: string;
  projectGithubLink: string;
  projectApplicationLink: string | null;
  projectReadmeContent: string;
};

export interface Application {
  name: string;
  gitHubLink: string | null;
  applicationLink: string | null;
  homePageLink: string | null;
}
