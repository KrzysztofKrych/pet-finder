import { getAccessToken } from './api/petFinder/getAccessToken';
import './App.css';
import { Button } from './components/Button/Button';
import { ButtonVariant } from './components/Button/enums';

function App() {
  return (
    <>
      <Button
        text="PRIMARY"
        variant={ButtonVariant.PRIMARY}
        onClick={() => getAccessToken()}
      />
      <Button
        text="ERROR"
        variant={ButtonVariant.ERROR}
        onClick={() => undefined}
      />
    </>
  );
}

export default App;
