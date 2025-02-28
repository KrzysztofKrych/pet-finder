import { NotificationComponentVariant } from '../../components/NotificationComponent/enums';

export interface NotificationState {
  message: string;
  autoHideDuration: number;
  isNotificationVisible: boolean;
  variant: NotificationComponentVariant;

  handleOpenNotification: (payload: OpenNotificationParams) => void;
  handleCloseNotification: () => void;
  reset: () => void;
}

export interface OpenNotificationParams {
  message: string;
  autoHideDuration?: number;
  variant?: NotificationComponentVariant;
}
