import { NotificationComponentVariant as NotificationComponentVariant } from './enums';

export const NOTIFICATION_COMPONENT_VARIANTS = {
  [NotificationComponentVariant.SUCCESS]: 'bg-green-500 text-white',
  [NotificationComponentVariant.ERROR]: 'bg-red-500 text-white',
  [NotificationComponentVariant.WARNING]: 'bg-yellow-500 text-black',
  [NotificationComponentVariant.INFO]: 'bg-blue-500 text-white',
};
