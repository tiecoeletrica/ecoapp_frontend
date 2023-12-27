"use client";
type OptionSelect = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const Select = ({ label, options, value, onChange }: OptionSelect) => {
  return (
    <div className="w-full">
      <label className="font-bold">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
