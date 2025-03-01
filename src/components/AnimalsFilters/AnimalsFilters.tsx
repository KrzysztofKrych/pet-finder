import { X } from 'lucide-react';
import { IAnimalFilters } from '../../api/petFinder/animals/interfaces';
import { useAnimalsStore } from '../../store/useAnimalsStore/useAnimalsStore';
import { AnimalFilterType } from './enums';

export const AnimalFilters = () => {
  const { filters, handleChangeFilter, handleRemoveFilter, animalsTypes } =
    useAnimalsStore();

  return (
    <>
      <div className="bg-white p-4 rounded-xl flex flex-wrap gap-4 justify-center">
        <select
          className="p-2 border rounded-lg"
          value={filters[AnimalFilterType.TYPE]}
          onChange={(e) =>
            handleChangeFilter(AnimalFilterType.TYPE, e.target.value)
          }
        >
          <option value="">Select Type</option>

          {animalsTypes.map((type, index) => (
            <option key={index} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 justify-center my-3">
        {Object.entries(filters).map(([key, value]) =>
          value ? (
            <div
              key={key}
              className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
            >
              {value}
              <button
                onClick={() => handleRemoveFilter(key as keyof IAnimalFilters)}
                className="ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};
