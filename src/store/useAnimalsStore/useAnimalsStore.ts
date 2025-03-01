import { create } from 'zustand';
import {
  DEFAULT_ANIMAL_TYPE,
  DEFAULT_ANIMALS_FILTERS,
  DEFAULT_ANIMALS_STATE,
} from './consts';
import { AnimalsState } from './interfaces';
import { getAnimals } from '../../api/petFinder/animals/getAnimals';
import { AnimalFilterQuery } from '../../components/AnimalsFilters/enums';
import { getAnimalsTypes } from '../../api/petFinder/animals/getAnimalsTypes';
import { IAnimalType } from '../../api/petFinder/animals/interfaces';

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

  handleChangeFilter: async (type: AnimalFilterQuery, value: string) => {
    const state = get();
    const isTypeChanged =
      type === AnimalFilterQuery.TYPE && state.selectedType.name !== value;

    const updatedFilters = isTypeChanged
      ? { ...DEFAULT_ANIMALS_FILTERS, type: value }
      : {
          ...state.filters,
          [type]: value,
        };

    set(() => ({ isFetchingAnimals: true, filters: updatedFilters }));

    const { animals, pagination } = await getAnimals(
      updatedFilters,
      state.currentPage
    );
    const selectedType: IAnimalType =
      type === AnimalFilterQuery.TYPE
        ? state.animalsTypes.find((loopedType) => loopedType.name === value) ||
          DEFAULT_ANIMAL_TYPE
        : state.selectedType;

    set(() => ({
      animals,
      totalPages: pagination.total_pages,
      filters: updatedFilters,
      isFetchingAnimals: false,
      selectedType,
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
