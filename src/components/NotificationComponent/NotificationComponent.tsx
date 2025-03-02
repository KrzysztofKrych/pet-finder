import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { ButtonVariant } from '../Button/enums';
import { useNotificationStore } from '../../store/useNotificationStore/useNotificationStore';
import { NOTIFICATION_COMPONENT_VARIANTS } from './variants';
import { X } from 'lucide-react';

export const NotificationComponent = () => {
  const {
    handleCloseNotification,
    message,
    autoHideDuration,
    isNotificationVisible,
    variant,
  } = useNotificationStore();
  const [isExiting, setIsExiting] = useState(false);

  const handleCloseAnimation = () => {
    setIsExiting(true);
    setTimeout(() => {
      handleCloseNotification();
      setIsExiting(false);
    }, 300);
  };

  useEffect(() => {
    if (!isNotificationVisible || !autoHideDuration) return;
    const timeoutId = setTimeout(() => {
      handleCloseAnimation();
    }, autoHideDuration);
    return () => clearTimeout(timeoutId);
  }, [isNotificationVisible, autoHideDuration]);

  if (!isNotificationVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-screen flex items-center justify-between px-4 py-3 z-[9999] shadow-md transition-all duration-300 ${NOTIFICATION_COMPONENT_VARIANTS[variant]} ${
        isExiting
          ? '-translate-y-full opacity-0'
          : 'translate-y-0 opacity-100 animate-slideDown'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <span className="text-sm font-medium text-center flex-1">{message}</span>
      <Button
        onClick={handleCloseAnimation}
        variant={ButtonVariant.SECONDARY}
        className=" mr-4"
      >
        {<X />}
      </Button>
    </div>
  );
};
