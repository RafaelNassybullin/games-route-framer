import { Document } from 'mongoose';

export interface ISysReq extends Document {
  developper: string,
  genre: string,
  platform: string,
  os: string,
  ram: string,
  directX: string,
  space: string,
  cpu: string,
  gpu: string
}

export interface ICards extends Document {
  title: string;
  description: string;
  category: string;
  image: string;
  trailerLink: string,
  galeryImages: [string],
  systemRequirement: ISysReq
}