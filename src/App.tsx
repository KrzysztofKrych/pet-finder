import { requestAccessToken } from './api/petFinder/auth/accessToken';
import { getAnimals } from './api/petFinder/animals/getAnimals';
import './App.css';
import { Button } from './components/Button/Button';
import { ButtonVariant } from './components/Button/enums';

function App() {
  return (
    <>
      <Button
        text="PRIMARY"
        variant={ButtonVariant.PRIMARY}
        onClick={() => requestAccessToken()}
      />
      <Button
        text="ERROR"
        variant={ButtonVariant.ERROR}
        onClick={() => getAnimals()}
      />
    </>
  );
}

export default App;
