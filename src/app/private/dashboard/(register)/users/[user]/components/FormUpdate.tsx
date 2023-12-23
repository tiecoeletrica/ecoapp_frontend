"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { usersType } from "@/types/rotes";

interface FormProps {
  data: usersType;
}
const FormUpdate = ({ data }: FormProps) => {
  const { back } = useRouter();
  const [status, setStatus] = useState(data.status);
  const [tipo, setTipo] = useState(data.tipo);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(e.target.value);
  };

  return (
    <div className="max-w-[1000px] w-full mx-auto px-4 mt-10">
      <Input title="Nome" value={data.nome} disabled className="mb-4" />
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="CPF" value={data.cpf} disabled />
        <Input title="E-mail" value={data.email} disabled />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label className="font-bold">Tipo</label>
          <select
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
            value={tipo}
            onChange={handleTipoChange}
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold">Status</label>
          <select
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="1">ativo</option>
            <option value="0">inativo</option>
          </select>
        </div>
        <Input title="Senha" type="password" maxLength={10} />
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <Button background="return" onClick={back}>
          Voltar
        </Button>
        <Button>Atualizar usuário</Button>
      </div>
    </div>
  );
};
export default FormUpdate;
