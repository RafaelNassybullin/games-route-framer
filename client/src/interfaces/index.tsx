
export interface ISystemReq {
  developper: string;
  genre: string;
  platform: string;
  os: string;
  ram: string;
  directX: string;
  space: string;
  cpu: string;
  gpu: string;
}

export interface IData {
  _id: string;
  title: string;
  description: string;
  image: string;
  trailerLink: string;
  galeryImages: [string];
  category: string;
  systemRequirement: ISystemReq;
  createdAt: string;
  updatedAt: string;
}
