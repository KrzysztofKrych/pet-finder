import { create } from 'zustand';
import { DEFAULT_NOTIFICATION_STATE } from './consts';
import { NotificationState, OpenNotificationParams } from './interfaces';

export const useNotificationStore = create<NotificationState>((set) => ({
  ...DEFAULT_NOTIFICATION_STATE,

  reset: () => set(DEFAULT_NOTIFICATION_STATE),
  handleOpenNotification: ({
    message,
    variant,
    autoHideDuration,
  }: OpenNotificationParams) =>
    set((state: NotificationState) => ({
      ...state,
      isNotificationVisible: true,
      autoHideDuration,
      message,
      variant,
    })),
  handleCloseNotification: () => set(() => ({ isNotificationVisible: false })),
}));
