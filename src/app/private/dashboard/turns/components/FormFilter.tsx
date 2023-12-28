import React from "react";
import { FaSearch } from "react-icons/fa";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
interface PropsFormFilter {
  handleOpenModal: () => void;
}
const FormFilter = ({ handleOpenModal }: PropsFormFilter) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4  mb-10">
      <div className="flex flex-col md:flex-row items-end gap-4 w-full justify-between">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            type="text"
            title="Equipe"
            placeholder="Digite a equipe..."
            className="min-w-[300px] w-full md:max-w-xs"
          />
          <Input type="date" title="Data Inicial" />
          <Input type="date" title="Data Final" />
        </div>
        <Button onClick={handleOpenModal} className="w-full md:max-w-xs">
          <FaSearch className="mr-2" />
        </Button>
      </div>
    </div>
  );
};

export default FormFilter;
