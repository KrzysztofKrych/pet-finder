interface IProps {
  label: string;
  value: string;
  options: string[];
  onChange: () => void;
}

export const FilterSelect = ({ label, value, options, onChange }: IProps) => (
  <select className="p-2 border rounded-lg" value={value} onChange={onChange}>
    <option value="">{`Select ${label}`}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);
