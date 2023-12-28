import React from "react";
import { FaPen } from "react-icons/fa";

import { serviceType } from "@/types/rotes";
interface FormTableProps {
  currentItems: serviceType[];
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
                  <th className="border-b text-center">Código</th>
                  <th className="border-b text-center">Descrição</th>
                  <th className="border-b text-center">Unidade</th>
                  <th className="border-b text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.codigo}</td>
                    <td className="border-b py-2 text-center">{d.descricao}</td>
                    <td className="border-b py-2 text-center">{d.unidade}</td>
                    <td
                      className="border-b py-2 text-center"
                      onClick={() => onClick(d.id as number)}
                    >
                      <FaPen className="mx-auto" />
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
