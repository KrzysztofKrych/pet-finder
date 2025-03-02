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
import { LocalStorageKey } from '../../services/localStorage/enums';
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from '../../services/localStorage/localStorage';
import debounce from 'lodash.debounce';

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
  handleChangeFilter: debounce(
    async (type: AnimalFilterQuery, value: string) => {
      const state = get();
      const abortController = state.abortController;
      if (abortController) {
        abortController.abort();
      }
      const newController = new AbortController();
      set({ abortController: newController });

      const isTypeChanged =
        type === AnimalFilterQuery.TYPE && state.selectedType.name !== value;

      const updatedFilters = isTypeChanged
        ? { ...DEFAULT_ANIMALS_FILTERS, type: value }
        : { ...state.filters, [type]: value };

      set(() => ({ isFetchingAnimals: true, filters: updatedFilters }));

      try {
        const { animals, pagination } = await getAnimals(
          updatedFilters,
          state.currentPage,
          { signal: newController.signal }
        );

        if (newController.signal.aborted) return;

        const selectedType: IAnimalType =
          type === AnimalFilterQuery.TYPE
            ? state.animalsTypes.find(
                (loopedType) => loopedType.name === value
              ) || DEFAULT_ANIMAL_TYPE
            : state.selectedType;

        set(() => ({
          animals,
          totalPages: pagination.total_pages,
          filters: updatedFilters,
          isFetchingAnimals: false,
          selectedType,
        }));
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred', error);
        }
        console.error('Error fetching animals:', error);
      }
    },
    300
  ),
  handleSetFavouriteAnimalsIds: () => {
    const favouriteAnimalsId = JSON.parse(
      getLocalStorageValue(LocalStorageKey.favouriteAnimalsId) || '[]'
    );

    set(() => ({ favouriteAnimalsId }));
  },
  handleOnClickFavouriteAnimal: (id: number) => {
    const state = get();
    const isFavourite = state.favouriteAnimalsId.includes(id);
    const updatedFavourites = isFavourite
      ? state.favouriteAnimalsId.filter((loopedId) => loopedId !== id)
      : [...state.favouriteAnimalsId, id];
    set(() => ({ favouriteAnimalsId: updatedFavourites }));
    setLocalStorageValue(LocalStorageKey.favouriteAnimalsId, updatedFavourites);
  },
  handleClearAllFilters: async () => {
    const state = get();
    const abortController = state.abortController;
    if (abortController) {
      abortController.abort();
    }
    const newController = new AbortController();
    set({
      abortController: newController,
      isFetchingAnimals: true,
      filters: DEFAULT_ANIMALS_FILTERS,
    });

    try {
      const { animals, pagination } = await getAnimals(
        DEFAULT_ANIMALS_FILTERS,
        1,
        { signal: newController.signal }
      );
      if (newController.signal.aborted) return;

      set({
        animals,
        totalPages: pagination.total_pages,
        filters: DEFAULT_ANIMALS_FILTERS,
        isFetchingAnimals: false,
        selectedType: DEFAULT_ANIMAL_TYPE,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred', error);
      }
      console.error('Error fetching animals:', error);
      set({ isFetchingAnimals: false });
    }
  },
  handleGetRandomAnimal: async () => {
    set(() => ({ isRandomAnimalFetching: true }));
    const state = get();
    const randomPage = Math.floor(Math.random() * state.totalPages) + 1;
    const randomAnimalIndex = Math.floor(Math.random() * 20);
    const { animals } = await getAnimals(DEFAULT_ANIMALS_FILTERS, randomPage);
    const animal = animals[randomAnimalIndex];
    window.open(animal.url, '_blank');
    set(() => ({ isRandomAnimalFetching: false }));
  },
}));
