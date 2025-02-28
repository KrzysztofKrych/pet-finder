import { create } from 'zustand';
import { DEFAULT_ANIMALS_STATE } from './consts';
import { AnimalsState } from './interfaces';
import { IAnimal } from '../../api/petFinder/animals/interfaces';

export const useAnimalsStore = create<AnimalsState>((set) => ({
  ...DEFAULT_ANIMALS_STATE,
  handleSetAnimals: (animals: IAnimal[]) => set(() => ({ animals })),
}));
