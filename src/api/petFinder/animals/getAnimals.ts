import { env } from '../../../configs/envConfig/envConfig';
import { PetFinderUrls } from '../enums';
import { getAccessToken } from '../auth/accessToken';
import { IAnimalFilters, IGetAnimalsResponse } from './interfaces';

export const getAnimals = async (
  filters: IAnimalFilters,
  page: number
): Promise<IGetAnimalsResponse> => {
  const queryString = createSearchParams(filters, page);
  try {
    const token = await getAccessToken();
    const response: Response = await fetch(
      `${env.petFinderApiUrl}${PetFinderUrls.ANIMALS}?${queryString}`,
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

    return data;
  } catch (error) {
    console.error('Error fetching animals:', error);
    return {
      pagination: {
        count_per_page: 0,
        total_count: 0,
        current_page: 1,
        total_pages: 0,
      },
      animals: [],
    };
    //TODO show error in dialog/notificationbar
  }
};

export function createSearchParams(
  filters: IAnimalFilters,
  page: number
): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });
  params.append('page', page.toString());
  return params;
}
