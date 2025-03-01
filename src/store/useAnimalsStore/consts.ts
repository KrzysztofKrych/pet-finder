import {
  IAnimalFilters,
  IAnimalType,
} from '../../api/petFinder/animals/interfaces';

export const DEFAULT_ANIMAL_TYPE: IAnimalType = {
  name: '',
  coats: [],
  colors: [],
  genders: [],
};
export const DEFAULT_ANIMALS_FILTERS: IAnimalFilters = {
  type: '',
  coat: '',
  gender: '',
  color: '',
};
export const DEFAULT_ANIMALS_STATE = {
  animals: [],
  animalsTypes: [],
  selectedType: DEFAULT_ANIMAL_TYPE,
  filters: DEFAULT_ANIMALS_FILTERS,
  currentPage: 1,
  totalPages: 0,
  isFetchingAnimals: false,
  isFetchingAnimalsTypes: false,
};
