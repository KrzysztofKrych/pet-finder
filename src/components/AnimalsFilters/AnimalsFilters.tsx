import { X } from 'lucide-react';
import { useAnimalsStore } from '../../store/useAnimalsStore/useAnimalsStore';
import { filtersConfig, getOptionsForKey } from './helpers';
import { AnimalFilterQuery } from './enums';

export const AnimalFilters = () => {
  const { filters, handleChangeFilter, animalsTypes, selectedType } =
    useAnimalsStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-white rounded-lg">
        {filtersConfig.map(({ key, label, options }) => (
          <div key={key} className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              {label}
            </label>
            <select
              className="w-full p-2 border rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={filters[key]}
              onChange={(e) => handleChangeFilter(key, e.target.value)}
            >
              <option value="">{`Select ${label}`}</option>
              {options(getOptionsForKey(key, animalsTypes, selectedType)).map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center px-4">
        {Object.entries(filters).map(([key, value]) =>
          value ? (
            <div
              key={key}
              className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-md transition hover:bg-blue-200 mb-4"
            >
              {value}
              <button
                onClick={() => handleChangeFilter(key as AnimalFilterQuery, '')}
                className="flex items-center justify-center bg-blue-200 rounded-full p-1 hover:bg-blue-300 transition"
              >
                <X className="w-3 h-3 text-blue-700" />
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
