import { env } from '../../../configs/envConfig/envConfig';
import { PetFinderUrls } from '../enums';
import { getAccessToken } from '../auth/accessToken';
import { IGetAnimalsTypesResponse } from './interfaces';
import { useNotificationStore } from '../../../store/useNotificationStore/useNotificationStore';
import { NotificationComponentVariant } from '../../../components/NotificationComponent/enums';

export const getAnimalsTypes = async (): Promise<IGetAnimalsTypesResponse> => {
  try {
    const token = await getAccessToken();
    const response: Response = await fetch(
      `${env.petFinderApiUrl}${PetFinderUrls.TYPES}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const data: IGetAnimalsTypesResponse = await response.json();

    if (!data.types) {
      throw new Error('Types not found in the response');
    }

    return data;
  } catch (error) {
    console.error('Error fetching types:', error);
    useNotificationStore.getState().handleOpenNotification({
      message: 'Oops! We couldn’t load the pet types. Please try again later.',
      variant: NotificationComponentVariant.ERROR,
    });

    return {
      types: [],
    };
  }
};
