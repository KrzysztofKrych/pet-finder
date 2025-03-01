import { create } from 'zustand';
import { DEFAULT_ANIMALS_STATE } from './consts';
import { AnimalsState } from './interfaces';
import { getAnimals } from '../../api/petFinder/animals/getAnimals';
import { AnimalFilterType } from '../../components/AnimalsFilters/enums';
import { getAnimalsTypes } from '../../api/petFinder/animals/getAnimalsTypes';

export const useAnimalsStore = create<AnimalsState>((set, get) => ({
  ...DEFAULT_ANIMALS_STATE,

  handleGetAnimals: async () => {
    set(() => ({ isFetchingAnimals: true }));

    const state = get();
    const { animals, pagination } = await getAnimals(
      state.filters,
      state.currentPage
    );

    set(() => ({
      animals,
      totalPages: pagination.total_pages,
      isFetchingAnimals: false,
    }));
  },
  handleGetAnimalsTypes: async () => {
    set(() => ({ isFetchingAnimalsTypes: true }));

    const { types } = await getAnimalsTypes();

    set(() => ({
      animalsTypes: types,
      isFetchingAnimalsTypes: false,
    }));
  },
  handleSetCurrentPage: async (currentPage: number) => {
    set(() => ({ isFetchingAnimals: true }));

    const state = get();
    const { animals, pagination } = await getAnimals(
      state.filters,
      currentPage
    );

    set(() => ({
      currentPage,
      animals,
      totalPages: pagination.total_pages,
      isFetchingAnimals: false,
    }));
  },

  handleChangeFilter: async (type: AnimalFilterType, value: string) => {
    const state = get();
    const updatedFilters = {
      ...state.filters,
      [type]: value,
    };

    set(() => ({ isFetchingAnimals: true, filters: updatedFilters }));

    const { animals, pagination } = await getAnimals(
      updatedFilters,
      state.currentPage
    );

    set(() => ({
      animals,
      totalPages: pagination.total_pages,
      filters: updatedFilters,
      isFetchingAnimals: false,
    }));
  },
  handleRemoveFilter: async (key: string) => {
    const state = get();
    const updatedFilters = {
      ...state.filters,
      [key]: '',
    };

    set(() => ({ isFetchingAnimals: true, filters: updatedFilters }));

    const { animals, pagination } = await getAnimals(
      updatedFilters,
      state.currentPage
    );

    set(() => ({
      animals,
      totalPages: pagination.total_pages,
      filters: updatedFilters,
      isFetchingAnimals: false,
    }));
  },
}));
