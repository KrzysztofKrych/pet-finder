import { IAnimal } from '../../api/petFinder/animals/interfaces';
import { Mail } from 'lucide-react';
import { PLACEHOLDER_IMAGE } from './consts';

interface IProps {
  animal: IAnimal;
}

export const AnimalCard = ({ animal }: IProps) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="w-full h-60 bg-gray-200">
        <img
          src={animal.primary_photo_cropped?.medium || PLACEHOLDER_IMAGE}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{animal.name}</h3>
        <p className="text-gray-500 text-sm">
          {animal.breeds.primary} - {animal.species}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
            {animal.age}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
            {animal.gender}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
            {animal.size}
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <a
            href={animal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 text-sm font-medium hover:underline"
          >
            View Details →
          </a>
          {animal.contact.email && (
            <a
              href={`mailto:${animal.contact.email}`}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600 transition"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
