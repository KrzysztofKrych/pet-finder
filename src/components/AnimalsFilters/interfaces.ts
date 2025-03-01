import { AnimalFilterType } from './enums';

export interface IAnimalsFiltersData {
  type: AnimalFilterType;
  options: AnimalFilterSelectOption[];
}
export interface AnimalFilterSelectOption {
  label: string;
  value: string;
}
