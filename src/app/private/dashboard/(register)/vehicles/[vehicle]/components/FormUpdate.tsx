"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { vehicleType } from "@/types/rotes";

interface FormProps {
  data: vehicleType;
}
const FormUpdate = ({ data }: FormProps) => {
  const { back } = useRouter();
  const [status, setStatus] = useState(data.tipo);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div className="max-w-[1000px] w-full mx-auto px-4 mt-10">
      <Input title="Placa" value={data.placa} disabled className="mb-4" />
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="Equipe" value={data.equipe_id} disabled />
        <Input title="Cidade" value={data.equipe_id} disabled />
      </div>
      <div className="flex flex-col w-full">
        <label className="font-bold">Tipo</label>
        <select
          className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="CAMINHÃO">CAMINHÃO</option>
          <option value="LEVE">LEVE</option>
          <option value="APOIO">APOIO</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <Button background="return" onClick={back}>
          Voltar
        </Button>
        <Button>Atualizar veículo</Button>
      </div>
    </div>
  );
};
export default FormUpdate;
