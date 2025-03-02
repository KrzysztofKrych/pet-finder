import { Loader2 } from 'lucide-react';
import { Button } from '../Button/Button';
import { ButtonVariant } from '../Button/enums';
import { useAnimalsStore } from '../../store/useAnimalsStore/useAnimalsStore';

export const RandomPet = () => {
  const { isRandomAnimalFetching, handleGetRandomAnimal } = useAnimalsStore();
  return (
    <div className="flex justify-center mb-6">
      <Button
        isDisabled={isRandomAnimalFetching}
        onClick={handleGetRandomAnimal}
        variant={ButtonVariant.GRADIENT}
        aria-label="Find a random pet to adopt"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

        {isRandomAnimalFetching ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Finding your pet...</span>
          </>
        ) : (
          <>
            <span>Surprise Me!</span>
          </>
        )}
      </Button>
    </div>
  );
};
