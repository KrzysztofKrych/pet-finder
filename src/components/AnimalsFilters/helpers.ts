import { IAnimalType } from '../../api/petFinder/animals/interfaces';
import { AnimalFilterQuery, RawFilterName } from './enums';

export const filtersConfig = [
  {
    key: AnimalFilterQuery.TYPE,
    label: 'Type',
    options: (options: string[]) => options,
  },
  {
    key: AnimalFilterQuery.COAT,
    label: 'Coat',
    options: (options: string[]) => options,
  },
  {
    key: AnimalFilterQuery.COLOR,
    label: 'Color',
    options: (options: string[]) => options,
  },
  {
    key: AnimalFilterQuery.GENDER,
    label: 'Gender',
    options: (options: string[]) => options,
  },
];

export const getOptionsForKey = (
  key: AnimalFilterQuery,
  animalsTypes: IAnimalType[],
  selectedType: IAnimalType
) => {
  switch (key) {
    case AnimalFilterQuery.TYPE:
      return animalsTypes.map((t) => t.name) || [];
    case AnimalFilterQuery.COAT:
      return selectedType[RawFilterName.COATS] || [];
    case AnimalFilterQuery.COLOR:
      return selectedType[RawFilterName.COLORS] || [];
    case AnimalFilterQuery.GENDER:
      return selectedType[RawFilterName.GENDERS] || [];
    default:
      return [];
  }
};
