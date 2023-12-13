"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import { Select } from "@/components/_ui/Select";
const UserId = () => {
  const { back } = useRouter();
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="font-bold text-3xl">Informação individual</h1>
      </div>
      <div className="flex flex-wrap gap-4 my-8 md:flex-nowrap">
        <Input className="full" title="Nome" />
        <Input className="full" title="E-mail" />
      </div>
      <div className="flex  gap-4 mb-8 flex-wrap items-end  w-full md:justify-between">
        <div className="max-w-[200px]">
          <Input className="xl:w-full" title="CPF" maxLength={11} />
        </div>
        <Select title="Tipo">
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
        <Select title="Status">
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
        <Select title="Equipe atual">
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
      </div>
      <div className="flex flex-wrap gap-4 mb-8 md:flex-nowrap items-end w-full ">
        <Input title="Nova senha" type="password" />
        <Input title="Confirmar senha" type="password" />
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="destructive" onClick={() => back()}>
          Voltar
        </Button>
        <Button variant="default">Alterar</Button>
      </div>
    </div>
  );
};

export default UserId;
