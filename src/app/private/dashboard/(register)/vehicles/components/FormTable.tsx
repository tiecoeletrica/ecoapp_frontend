// FormTable.jsx
import React from "react";
import { FaPen } from "react-icons/fa";

import { vehicleType } from "@/types/rotes";

interface FormTableProps {
  currentItems: vehicleType[];
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
                  <th className="border-b text-center">Placa</th>
                  <th className="border-b text-center">Tipo</th>
                  <th className="border-b text-center">Equipe</th>
                  <th className="border-b text-center">CIDADE</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.placa}</td>
                    <td className="border-b py-2 text-center">{d.tipo}</td>
                    <td className="border-b py-2 text-center">{d.equipe_id}</td>
                    <td className="border-b py-2 text-center">CIDADE</td>
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
