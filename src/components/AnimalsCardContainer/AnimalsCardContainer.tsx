import { IAnimal } from '../../api/petFinder/animals/interfaces';
import { AnimalCard } from '../AnimalCard/AnimalCard';

interface IProps {
  animals: IAnimal[];
}

export const AnimalsCardContainer = ({ animals }: IProps) => (
  <div className="container mx-auto px-4 py-6">
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
      Adoptable Animals
    </h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {animals.map((animal, index) => (
          <AnimalCard animal={animal} key={index} />
        ))}
      </div>
    </div>
  </div>
);
