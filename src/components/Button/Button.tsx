import { ButtonVariant } from './enums';
import { BUTTON_VARIANTS } from './variants';

interface IProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button = ({ children, variant, onClick, className }: IProps) => (
  <button
    className={`${BUTTON_VARIANTS[variant]} ${className} cursor-pointer`}
    onClick={onClick}
  >
    {children}
  </button>
);
