import './App.css';
import { Button } from './components/Button/Button';
import { ButtonVariant } from './components/Button/enums';

function App() {
  return (
    <>
      <Button text="PRIMARY" variant={ButtonVariant.PRIMARY} />
      <Button text="ERROR" variant={ButtonVariant.ERROR} />
    </>
  );
}

export default App;
