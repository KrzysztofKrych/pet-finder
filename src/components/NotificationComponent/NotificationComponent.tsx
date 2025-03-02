import { useEffect } from 'react';
import { Button } from '../Button/Button';
import { ButtonVariant } from '../Button/enums';
import { useNotificationStore } from '../../store/useNotificationStore/useNotificationStore';
import { NOTIFICATION_COMPONENT_VARIANTS } from './variants';

export const NotificationComponent = () => {
  const {
    handleCloseNotification,
    message,
    autoHideDuration,
    isNotificationVisible,
    variant,
  } = useNotificationStore();

  useEffect(() => {
    if (!isNotificationVisible || !autoHideDuration) return;

    const timeoutId = setTimeout(handleCloseNotification, autoHideDuration);
    return () => clearTimeout(timeoutId);
  }, [isNotificationVisible, autoHideDuration, handleCloseNotification]);

  if (!isNotificationVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-screen flex items-center justify-between px-4 py-3 z-[9999] shadow-md transition-transform duration-300 transform translate-y-0 opacity-100 pointer-events-auto ${NOTIFICATION_COMPONENT_VARIANTS[variant]}`}
      role="alert"
      aria-live="assertive"
    >
      <span className="text-sm font-medium text-center flex-1">{message}</span>
      <Button
        onClick={handleCloseNotification}
        variant={ButtonVariant.SECONDARY}
      >
        Close
      </Button>
    </div>
  );
};
