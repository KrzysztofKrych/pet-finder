import { requestAccessToken } from './api/petFinder/auth/accessToken';
import { getAnimals } from './api/petFinder/animals/getAnimals';
import './App.css';
import { Button } from './components/Button/Button';
import { ButtonVariant } from './components/Button/enums';
import { NotificationComponent } from './components/NotificationComponent/NotificationComponent';
import { useNotificationStore } from './store/useNotificationStore/useNotificationStore';
import { NotificationComponentVariant } from './components/NotificationComponent/enums';
import { useAnimalsStore } from './store/useAnimalsStore/useAnimalsStore';
import { useEffect } from 'react';
import { AnimalCard } from './components/AnimalCard/AnimalCard';

function App() {
  const { handleOpenNotification } = useNotificationStore();
  const { handleSetAnimals, animals } = useAnimalsStore();

  useEffect(() => {
    const getAnimalsAction = async () => {
      const animals = await getAnimals();
      handleSetAnimals(animals);
    };
    getAnimalsAction();
  }, []);
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
        onClick={() => undefined}
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
      {animals.map((animal, index) => (
        <AnimalCard animal={animal} key={index} />
      ))}
      <NotificationComponent />
    </>
  );
}

export default App;
