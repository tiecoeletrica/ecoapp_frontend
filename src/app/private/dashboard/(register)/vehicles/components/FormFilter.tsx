import React from "react";
import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
interface PropsFormFilter {
  optionType: string[];
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOpenModal: () => void;
}
const FormFilter = ({
  optionType,
  handleOpenModal,
  handleFilterChange,
}: PropsFormFilter) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-end my-10">
      <div className="flex flex-col md:flex-row items-end gap-4 w-full justify-end">
        <div className="flex flex-col md:flex-row gap-4">
          <Input title="Placa" className="max-w-xs w-full min-w-[300px]" />
          <div className="w-full max-w-xs flex flex-col">
            <label className="font-bold">Tipo</label>
            <select
              className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              onChange={handleFilterChange}
            >
              <option value="Filtrar por">Filtrar por:</option>
              {optionType?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button onClick={handleOpenModal} className="md:max-w-xs">
          <FaPlus className="mr-2" />
          Criar
        </Button>
      </div>
    </div>
  );
};

export default FormFilter;
