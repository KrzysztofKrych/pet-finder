import { AttributeVariant } from './enums';
import { ATTRIBUTE_VARIANTS } from './variants';

interface IProps {
  text: string | number;
  variant: AttributeVariant;
}

export const Attribute = ({ text, variant }: IProps) => (
  <div
    className={`${ATTRIBUTE_VARIANTS[variant]} px-3 py-1 text-xs font-medium rounded-full`}
  >
    {text}
  </div>
);
