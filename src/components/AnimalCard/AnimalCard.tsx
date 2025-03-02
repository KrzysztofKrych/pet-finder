import { IAnimal } from '../../api/petFinder/animals/interfaces';
import { Heart, Mail } from 'lucide-react';
import { PLACEHOLDER_IMAGE } from './consts';
import { Attribute } from '../Attribute/Attribute';
import { AttributeVariant } from '../Attribute/enums';
import { Button } from '../Button/Button';
import { ButtonVariant } from '../Button/enums';
import { useAnimalsStore } from '../../store/useAnimalsStore/useAnimalsStore';

interface IProps {
  animal: IAnimal;
}

export const AnimalCard = ({ animal }: IProps) => {
  const { handleOnClickFavouriteAnimal, favouriteAnimalsId } =
    useAnimalsStore();
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <Button
        variant={ButtonVariant.GHOST}
        onClick={() => handleOnClickFavouriteAnimal(animal.id)}
        className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
      >
        <Heart
          className={`w-6 h-6 ${
            favouriteAnimalsId.includes(animal.id)
              ? 'fill-red-500 text-red-500'
              : 'text-gray-400'
          }`}
        />
      </Button>
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
          <Attribute text={animal.age} variant={AttributeVariant.PRIMARY} />
          <Attribute
            text={animal.gender}
            variant={AttributeVariant.SECONDARY}
          />
          <Attribute text={animal.size} variant={AttributeVariant.INFO} />
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
