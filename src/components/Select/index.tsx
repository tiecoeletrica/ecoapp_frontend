import { ReactNode } from "react";
interface selectTypes {
  title: string;
  children: ReactNode;
}

const Select = ({ title, children }: selectTypes) => {
  return (
    <div className="flex flex-col w-full text-black">
      <label className="font-bold ">{title}</label>
      <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
        <option value="">Escolha</option>
        {children}
      </select>
    </div>
  );
};

export default Select;
