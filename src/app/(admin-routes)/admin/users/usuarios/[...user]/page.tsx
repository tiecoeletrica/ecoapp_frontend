"use client";
import { useRouter } from "next/navigation";

import { Input } from "@/components/_ui/Input";
import { Select } from "@/components/_ui/Select";
const UserId = () => {
  const { back } = useRouter();
  return (
    <div className="container mx-auto px-4">
      <button onClick={() => back()}>back</button>
      <div className="flex items-center gap-4 mb-10">
        <Input title="Nome" />
        <Input title="CPF" />
      </div>
      <div className="flex items-center gap-4 mb-10 ">
        <Input title="Nova senha" />
        <Input title="Confirmar senha" />
      </div>
      <div className="flex justify-between flex-wrap md:flex-wrap md:justify-between sm:justify-center">
        <Select className="sm:w-full mb-2">
          <option value="Escolha">Tipo</option>
          <option value="ADM">ADM</option>
          <option value="CAMPO">CAMPO</option>
          <option
            value="SUPERVISOR (A) DE OBRAS	
"
          >
            SUPERVISOR (A) DE OBRAS
          </option>
        </Select>
        <Select className="sm:w-full mb-2">
          <option value="Escolha">Equipe atual</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option
            value="SUPERVISOR (A) DE OBRAS	
"
          >
            SUPERVISOR (A) DE OBRAS
          </option>
        </Select>
        <Select className="sm:w-full mb-2">
          <option value="Escolha">Status</option>
          <option value="ATIVO">ATIVO</option>
          <option value="INATIVO">INATIVO</option>
          <option
            value="SUPERVISOR (A) DE OBRAS	
"
          >
            SUPERVISOR (A) DE OBRAS
          </option>
        </Select>
      </div>
    </div>
  );
};

export default UserId;
