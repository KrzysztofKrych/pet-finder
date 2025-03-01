import {
  IAnimal,
  IAnimalFilters as IAnimalFilters,
} from '../../api/petFinder/animals/interfaces';

export interface AnimalsState {
  animals: IAnimal[];
  filters: IAnimalFilters;
  currentPage: number;
  totalPages: number;
  isFetching: boolean;

  handleGetAnimals: () => void;
  handleSetCurrentPage: (currentPage: number) => void;
}
