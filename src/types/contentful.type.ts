import { Entry } from "contentful";

export enum TTypeId {
  CompanyExperience = "companyExperience",
  Skill = "skill",
  Contact = "contact",
  My = "my",
}

export interface QueryParams
  extends Record<string, string | number | undefined> {
  limit?: number;
  skip?: number;
}

export type TCompanyExperience = {
  companyName: string;
  description: string;
  link: string;
  mainOfficeLocation: {
    lat: number;
    lon: number;
  };
  preview: Entry<MediaDTO>;
  timeSpend: number;
};

export type TContact = {
  title: string;
  icon: Entry<MediaDTO>;
  link: string;
};

export type TSkill = {
  name: string;
  icon: Entry<MediaDTO>;
};

export type TMy = {
  name: string;
  avatar: Entry<MediaDTO>;
  cv: Entry<MediaDTO>;
  summery: string;
};

export type MediaDTO = {
  file: FileDTO;
};

type FileDTO = {
  url: string;
  title: string;
};
