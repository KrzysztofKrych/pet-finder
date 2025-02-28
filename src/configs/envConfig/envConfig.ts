import { IEnvConfig } from './interfaces';

export const env: IEnvConfig = {
  petFinderApiKey: import.meta.env.VITE_PET_FINDER_API_KEY || '',
  petFinderSecretKey: import.meta.env.VITE_PET_FINDER_SECRET_KEY || '',
  petFinderApiUrl: import.meta.env.VITE_PET_FINDER_URL || '',
};
