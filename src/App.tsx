import { requestAccessToken } from './api/petFinder/auth/accessToken';
import { getAnimals } from './api/petFinder/animals/getAnimals';
import './App.css';
import { Button } from './components/Button/Button';
import { ButtonVariant } from './components/Button/enums';
import { NotificationComponent } from './components/NotificationComponent/NotificationComponent';
import { useNotificationStore } from './store/useNotificationStore/useNotificationStore';
import { NotificationComponentVariant } from './components/NotificationComponent/enums';

function App() {
  const { handleOpenNotification } = useNotificationStore();
  return (
    <>
      <Button
        text="token"
        variant={ButtonVariant.PRIMARY}
        onClick={() => requestAccessToken()}
      />
      <Button
        text="animals"
        variant={ButtonVariant.ERROR}
        onClick={() => getAnimals()}
      />
      <Button
        text="notification"
        variant={ButtonVariant.ERROR}
        onClick={() =>
          handleOpenNotification({
            message: 'testMESSAGE',
            variant: NotificationComponentVariant.SUCCESS,
            autoHideDuration: 5000,
          })
        }
      />
      <NotificationComponent />
    </>
  );
}

export default App;
