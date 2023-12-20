import React, { ReactNode } from "react";

interface OptionProps {
  value: string;
  children: ReactNode;
}
interface SelectProps {
  title: string;
  children: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[];
}

const Option: React.FC<OptionProps> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function SelectComponent({ title, children }, ref) {
    return (
      <div className="flex flex-col w-full text-black">
        <label className="font-bold ">{title}</label>
        <select
          ref={ref}
          className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
        >
          <option value="">Escolha</option>
          {children}
        </select>
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select, Option };
