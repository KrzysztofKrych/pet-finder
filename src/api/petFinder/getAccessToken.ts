import { env } from '../../configs/envConfig/envConfig';
import { LocalStorageKey } from '../../services/localStorage/enums';
import { setLocalStorageValue } from '../../services/localStorage/localStorage';
import { PetFinderUrls } from './enums';

export const getAccessToken = async () => {
  try {
    const response = await fetch(
      `${env.petFinderApiUrl}${PetFinderUrls.TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: env.petFinderApiKey,
          client_secret: env.petFinderSecretKey,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.access_token) {
      throw new Error('Access token not found in the response');
    }
    setLocalStorageValue(LocalStorageKey.petFinderToken, data.access_token);
  } catch (error) {
    console.error('Error fetching access token:', error);
    //TODO show error in dialog/notificationbar
  }
};
