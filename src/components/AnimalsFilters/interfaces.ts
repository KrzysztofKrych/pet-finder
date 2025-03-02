import { RawFilterName } from './enums';

export interface IAnimalsFiltersData {
  type: RawFilterName;
  options: AnimalFilterSelectOption[];
}
export interface AnimalFilterSelectOption {
  label: string;
  value: string;
}
