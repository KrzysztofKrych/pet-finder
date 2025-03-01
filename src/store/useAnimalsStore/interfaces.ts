import {
  IAnimal,
  IAnimalFilters as IAnimalFilters,
  IAnimalType,
} from '../../api/petFinder/animals/interfaces';
import { AnimalFilterType } from '../../components/AnimalsFilters/enums';

export interface AnimalsState {
  animals: IAnimal[];
  animalsTypes: IAnimalType[];
  filters: IAnimalFilters;
  currentPage: number;
  totalPages: number;
  isFetchingAnimals: boolean;
  isFetchingAnimalsTypes: boolean;

  handleGetAnimals: () => void;
  handleGetAnimalsTypes: () => void;
  handleSetCurrentPage: (currentPage: number) => void;
  handleChangeFilter: (type: AnimalFilterType, value: string) => void;
  handleRemoveFilter: (key: string) => void;
}
