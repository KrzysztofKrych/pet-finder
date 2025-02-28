import { Next as INext, Pagination as IPagination } from '../interfaces';
import {
  Age as IAge,
  Country,
  Gender as IGender,
  Size as ISize,
  Species as ISpecies,
  Status,
} from './enums';

export interface IGetAnimalsResponse {
  animals: IAnimal[];
  pagination: IPagination;
}

export interface IAnimal {
  id: number;
  organization_id: string;
  url: string;
  type: ISpecies;
  species: ISpecies;
  breeds: IBreeds;
  colors: IColors;
  age: IAge;
  gender: IGender;
  size: ISize;
  coat: null | string;
  attributes: IAttributes;
  environment: IEnvironment;
  tags: string[];
  name: string;
  description: null | string;
  organization_animal_id: null | string;
  photos: IPhoto[];
  primary_photo_cropped: IPhoto | null;
  videos: unknown[];
  status: Status;
  status_changed_at: string;
  published_at: string;
  distance: null;
  contact: IContact;
  _links: IAnimalLinks;
}

export interface IAnimalLinks {
  self: INext;
  type: INext;
  organization: INext;
}

export interface IAttributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean | null;
  special_needs: boolean;
  shots_current: boolean;
}

export interface IBreeds {
  primary: string;
  secondary: null | string;
  mixed: boolean;
  unknown: boolean;
}

export interface IColors {
  primary: null | string;
  secondary: null | string;
  tertiary: null | string;
}

export interface IContact {
  email: string;
  phone: string | null;
  address: IAddress;
}

export interface IAddress {
  address1: string | null;
  address2: null;
  city: string;
  state: string;
  postcode: string;
  country: Country;
}

export interface IEnvironment {
  children: boolean | null;
  dogs: boolean | null;
  cats: boolean | null;
}

export interface IPhoto {
  small: string;
  medium: string;
  large: string;
  full: string;
}
