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
  isRandomAnimalFetching: boolean;
  favouriteAnimalsId: number[];
  abortController: AbortController | null;

  handleGetAnimals: () => void;
  handleGetAnimalsTypes: () => void;
  handleSetCurrentPage: (currentPage: number) => void;
  handleChangeFilter: (type: AnimalFilterQuery, value: string) => void;
  handleSetFavouriteAnimalsIds: () => void;
  handleOnClickFavouriteAnimal: (id: number) => void;
  handleClearAllFilters: () => void;
  handleGetRandomAnimal: () => void;
}
