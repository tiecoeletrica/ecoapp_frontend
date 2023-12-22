// FormTable.jsx
import React from "react";
import { FaPen } from "react-icons/fa";

import { Input } from "@/components/Input";

import { serviceType } from "@/types/rotes";

interface FormTableProps {
  currentItems: serviceType[];
  optionType: string[];
}

const FormTable: React.FC<FormTableProps> = ({ currentItems, optionType }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="max-w-[50%] w-full">
        {currentItems.length ? (
          <div>
            <div className="overflow-x-auto max-h-[45%]">
              <table className="min-w-full table-auto rounded overflow-x">
                <thead>
                  <tr className="border-b">
                    <th className="border-b text-center">Nome</th>
                    <th className="border-b text-center">CPF</th>
                    <th className="border-b text-center">E-mail</th>
                    <th className="border-b text-center">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((d) => (
                    <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                      <td className="border-b py-2 text-center">{d.codigo}</td>
                      <td className="border-b py-2 text-center">
                        {d.descricao}
                      </td>
                      <td className="border-b py-2 text-center">{d.unidade}</td>
                      <td className="border-b py-2 text-center">
                        <FaPen />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center font-bold">
            Não há dados para essa pesquisa...
          </div>
        )}
      </div>
      <div className="max-w-[50%] w-full">
        <Input title="Código" type="text" placeholder="Código" />
        <Input title="Código" type="text" placeholder="Código" />
        <select>
          <option value="Escolha">Escolha</option>
          {optionType?.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormTable;
