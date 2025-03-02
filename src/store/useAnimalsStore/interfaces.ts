import {
  IAnimal,
  IAnimalFilters as IAnimalFilters,
  IAnimalType,
} from '../../api/petFinder/animals/interfaces';
import { AnimalFilterQuery } from '../../components/AnimalsFilters/enums';

export interface AnimalsState {
  animals: IAnimal[];
  animalsTypes: IAnimalType[];
  selectedType: IAnimalType;
  filters: IAnimalFilters;
  currentPage: number;
  totalPages: number;
  isFetchingAnimals: boolean;
  isFetchingAnimalsTypes: boolean;

  handleGetAnimals: () => void;
  handleGetAnimalsTypes: () => void;
  handleSetCurrentPage: (currentPage: number) => void;
  handleChangeFilter: (type: AnimalFilterQuery, value: string) => void;
  handleRemoveFilter: (key: string) => void;
}
