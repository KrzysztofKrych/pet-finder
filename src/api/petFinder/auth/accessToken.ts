import { env } from '../../../configs/envConfig/envConfig';
import { LocalStorageKey } from '../../../services/localStorage/enums';
import {
  getLocalStorageValueWithExpiry,
  setLocalStorageValueWithExpiry,
} from '../../../services/localStorage/localStorage';
import { PetFinderUrls } from '../enums';
import { IGetAccessTokenResponse } from './interfaces';

export const requestAccessToken = async (): Promise<string> => {
  try {
    const response: Response = await fetch(
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

    const data: IGetAccessTokenResponse = await response.json();

    if (!data.access_token) {
      throw new Error('Access token not found in the response');
    }

    setLocalStorageValueWithExpiry(
      LocalStorageKey.petFinderToken,
      data.access_token,
      data.expires_in
    );

    return data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return '';
    //TODO show error in dialog/notificationbar
  }
};

export const getAccessToken = async (): Promise<string> => {
  const accessToken = getLocalStorageValueWithExpiry<string>(
    LocalStorageKey.petFinderToken
  );

  if (!accessToken) {
    return await requestAccessToken();
  }

  return accessToken;
};
