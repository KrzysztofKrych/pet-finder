import { NotificationComponentVariant } from '../../components/NotificationComponent/enums';

export const DEFAULT_AUTO_HIDE_DURATION = 5000;

export const DEFAULT_NOTIFICATION_STATE = {
  message: '',
  isNotificationVisible: false,
  autoHideDuration: DEFAULT_AUTO_HIDE_DURATION,
  variant: NotificationComponentVariant.SUCCESS,
};
