"use client";
import { useRouter } from "next/navigation";
import { FaPlus, FaTrash } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import { Select } from "@/components/_ui/Select";
const UserId = () => {
  const { back } = useRouter();
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-2 items-end xl:flex-nowrap mt-10">
        <Input title="Placa" maxLength={7} value="RPA2J17" />
        <Select title="Equipe" className="w-full">
          <option value="Escolha" selected>
            Escolha
          </option>
          <option value="ECOLM0014">ECOLM0014</option>
          <option value="ECOLM0005">ECOLM0005</option>
          <option value="ECOLM0007">ECOLM0007</option>
          <option value="ECOLM0008">ECOLM0008</option>
        </Select>
        <Select title="Situação da equipe" className="w-full">
          <option value="Escolha" selected>
            Escolha
          </option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </Select>
      </div>
      <div className="flex items-center flex-col my-10">
        <h2 className="text-base font-bold mb-4">Integrantes da equipe</h2>
        <div className="w-full flex items-center justify-between gap-4 mb-2">
          <Input value="COLABORADOR DE EXEMPLO 1" />
          <FaPlus className="cursor-pointer" />
        </div>
        <div className="w-full flex items-center justify-between gap-4 mb-2">
          <Input value="COLABORADOR DE EXEMPLO 2" />
          <FaTrash className="text-red cursor-pointer" />
        </div>
        <div className="w-full flex items-center justify-between gap-4 mb-2">
          <Input value="COLABORADOR DE EXEMPLO 3" />
          <FaTrash className="text-red cursor-pointer" />
        </div>
        <div className="w-full flex items-center justify-between gap-4 mb-2">
          <Input value="COLABORADOR DE EXEMPLO 4" />
          <FaTrash className="text-red cursor-pointer" />
        </div>
        <div className="w-full flex items-center justify-between gap-4 mb-2">
          <Input value="COLABORADOR DE EXEMPLO 5" />
          <FaTrash className="text-red cursor-pointer" />
        </div>
        <div className="w-full flex items-center justify-between gap-4 mb-2">
          <Input value="COLABORADOR DE EXEMPLO 6" />
          <FaTrash className="text-red cursor-pointer" />
        </div>
      </div>
      <div className="flex sm:flex-row sm:justify-end gap-4 ">
        <Button variant="destructive" onClick={() => back()}>
          Voltar
        </Button>
        <Button variant="default">Atualizar</Button>
      </div>
    </div>
  );
};

export default UserId;
