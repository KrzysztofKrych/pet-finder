import { X } from 'lucide-react';
import { useAnimalsStore } from '../../store/useAnimalsStore/useAnimalsStore';
import { filtersConfig, getOptionsForKey } from './helpers';
import { AnimalFilterQuery } from './enums';
import { Button } from '../Button/Button';
import { ButtonVariant } from '../Button/enums';

export const AnimalFilters = () => {
  const {
    filters,
    handleChangeFilter,
    animalsTypes,
    selectedType,
    handleClearAllFilters,
  } = useAnimalsStore();

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col p-4 bg-white rounded-xlborder border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Filter Pets
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtersConfig.map(({ key, label, options }) => (
            <div key={key} className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {label}
              </label>
              <select
                className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none
                appearance-none pr-8 transition-all shadow-sm hover:border-blue-300"
                value={filters[key]}
                onChange={(e) => handleChangeFilter(key, e.target.value)}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                }}
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
      </div>

      {Object.values(filters).some((value) => value) && (
        <div className="flex flex-wrap gap-2 px-1 mb-2">
          <div className="w-full">
            <p className="text-xs font-medium text-gray-500 mb-2">
              Active filters:
            </p>
          </div>
          {Object.entries(filters).map(([key, value]) =>
            value ? (
              <div
                key={key}
                className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 
                rounded-full text-sm font-medium shadow-sm transition-all transform hover:scale-105 hover:shadow-md"
              >
                {value}
                <Button
                  onClick={() =>
                    handleChangeFilter(key as AnimalFilterQuery, '')
                  }
                  variant={ButtonVariant.PILL}
                  aria-label={`Remove ${value} filter`}
                >
                  <X className="w-3 h-3 text-white" />
                </Button>
              </div>
            ) : null
          )}

          {Object.values(filters).some((value) => value) && (
            <Button
              onClick={handleClearAllFilters}
              variant={ButtonVariant.PILL_CLEAR}
            >
              Clear all
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
