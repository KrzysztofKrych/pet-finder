import { ButtonVariant } from './enums';
import { BUTTON_VARIANTS } from './variants';

interface Props {
  text: string;
  variant: ButtonVariant;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, variant, onClick }: Props) => (
  <button className={BUTTON_VARIANTS[variant]} onClick={onClick}>
    {text}
  </button>
);
