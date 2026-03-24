// common app types

export enum AppLanguage {
  CS = "cs",
  EN = "en",
}

export type TablePageSize = 5 | 10 | 15 | 20 | 25 | 50 | 75 | 100;

export enum ResearcherRole {
  RESEARCHER = "researcher",
  STUDY_MANAGER = "studyManager",
  RESEARCHER_MANAGER = "researcherManager",
  SERVICE = "service",
}

export type Researcher = {
  email: string;
  password: string;
  passwordConfirmation?: string;
  language: AppLanguage;
  role: ResearcherRole;
  firstName?: string;
  lastName?: string;
};
