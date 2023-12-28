import React from "react";
import { FaPlus } from "react-icons/fa";

import { Button } from "@/components/Button";
interface PropsFormFilter {
  optionType: string[];
  optionCategory: string[];
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOpenModal: () => void;
  isDelete: string[];
  handleDelete: () => void;
}
const FormFilter = ({
  optionType,
  optionCategory,
  handleFilterChange,
  handleOpenModal,
  isDelete,
  handleDelete,
}: PropsFormFilter) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-end  mb-10">
      <div className="flex flex-col md:flex-row items-end gap-4">
        <div className="md:max-w-[300px]  w-full flex flex-col">
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
        <div className="md:max-w-[300px] w-full flex flex-col">
          <label className="font-bold">Categoria</label>
          <select
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
            title="Categoria"
          >
            <option value="Filtrar por">Filtrar por:</option>
            {optionCategory?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <Button onClick={handleOpenModal}>
          <FaPlus className="mr-2" />
          Criar
        </Button>
        {isDelete.length > 0 && (
          <Button onClick={handleDelete} background="return">
            Deletar
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormFilter;
