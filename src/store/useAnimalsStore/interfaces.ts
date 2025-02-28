import { IAnimal } from '../../api/petFinder/animals/interfaces';

export interface AnimalsState {
  animals: IAnimal[];

  handleSetAnimals: (animals: IAnimal[]) => void;
}
