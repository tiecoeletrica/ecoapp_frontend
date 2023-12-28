// FormTable.jsx
import React from "react";
import { FaPen } from "react-icons/fa";

import { constructionType } from "@/types/rotes";
interface FormTableProps {
  currentItems: constructionType[];
  onClick: (id: string) => void;
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
                  <th className="border-b text-center">Projeto</th>
                  <th className="border-b text-center">Descrição</th>
                  <th className="border-b text-center">Cidade</th>
                  <th className="border-b text-center">UTD</th>
                  <th className="border-b text-center">Carteira</th>
                  <th className="border-b text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.projeto}</td>
                    <td className="border-b py-2 text-center">{d.descricao}</td>
                    <td className="border-b py-2 text-center">{d.cidade}</td>
                    <td className="border-b py-2 text-center">{d.utd}</td>
                    <td className="border-b py-2 text-center">{d.carteira}</td>
                    <td className="border-b py-2 text-center">{d.status}</td>
                    <td
                      className="border-b py-2 text-center"
                      onClick={() => onClick(d.id as string)}
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
