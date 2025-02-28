import { ButtonVariant } from './enums';
import { BUTTON_VARIANTS } from './variants';

interface Props {
  text: string;
  variant: ButtonVariant;
}

export const Button = ({ text, variant }: Props) => (
  <button className={BUTTON_VARIANTS[variant]}>{text}</button>
);
