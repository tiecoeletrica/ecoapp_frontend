// FormTable.jsx
import React from "react";
import { FaPen } from "react-icons/fa";

import { SearchUsersType } from "@/types/rotes";

interface FormTableProps {
  currentItems: SearchUsersType[];
  onClick: (id: number) => void;
}

const FormTable: React.FC<FormTableProps> = ({ currentItems, onClick }) => {
  return (
    <div>
      {currentItems.length ? (
        <div>
          <div className="overflow-x-auto max-h-[45%]">
            <table className="min-w-full table-auto rounded overflow-x">
              <thead>
                <tr className="border-b">
                  <th className="border-b text-center">Nome</th>
                  <th className="border-b text-center">CPF</th>
                  <th className="border-b text-center">E-mail</th>
                  <th className="border-b text-center">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.nome}</td>
                    <td className="border-b py-2 text-center">{d.cpf}</td>
                    <td className="border-b py-2 text-center">{d.email}</td>
                    <td className="border-b py-2 text-center">{d.tipo}</td>
                    <td
                      className="border-b py-2 text-center"
                      onClick={() => onClick(d.id)}
                    >
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
  );
};

export default FormTable;
