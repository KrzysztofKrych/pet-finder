import { create } from 'zustand';
import { DEFAULT_ANIMALS_STATE } from './consts';
import { AnimalsState } from './interfaces';
import { getAnimals } from '../../api/petFinder/animals/getAnimals';

export const useAnimalsStore = create<AnimalsState>((set, get) => ({
  ...DEFAULT_ANIMALS_STATE,

  handleGetAnimals: async () => {
    const state = get();
    set(() => ({ isFetching: true }));
    const { animals, pagination } = await getAnimals(
      state.filters,
      state.currentPage
    );
    set(() => ({
      animals,
      totalPages: pagination.total_pages,
      isFetching: false,
    }));
  },
  handleSetCurrentPage: async (currentPage: number) => {
    const state = get();
    set(() => ({ isFetching: true }));
    const { animals, pagination } = await getAnimals(
      state.filters,
      currentPage
    );
    set(() => ({
      currentPage,
      animals,
      totalPages: pagination.total_pages,
      isFetching: false,
    }));
  },
}));
