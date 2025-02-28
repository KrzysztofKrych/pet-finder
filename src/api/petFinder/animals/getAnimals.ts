import { env } from '../../../configs/envConfig/envConfig';
import { PetFinderUrls } from '../enums';
import { getAccessToken } from '../auth/accessToken';
import { IAnimal, IGetAnimalsResponse } from './interfaces';

export const getAnimals = async (): Promise<IAnimal[]> => {
  try {
    const token = await getAccessToken();
    const response: Response = await fetch(
      `${env.petFinderApiUrl}${PetFinderUrls.ANIMALS}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const data: IGetAnimalsResponse = await response.json();

    if (!data.animals) {
      throw new Error('Animals not found in the response');
    }

    return data.animals;
  } catch (error) {
    console.error('Error fetching animals:', error);
    return [];
    //TODO show error in dialog/notificationbar
  }
};
