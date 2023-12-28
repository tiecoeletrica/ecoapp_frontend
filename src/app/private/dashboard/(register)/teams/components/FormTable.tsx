// FormTable.jsx
import React from "react";
import { FaPen } from "react-icons/fa";

import { VehiclesTeamType } from "@/types/rotes";
interface FormTableProps {
  currentItems: VehiclesTeamType[];
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
                  <th className="border-b text-center">Equipe</th>
                  <th className="border-b text-center">Tipo</th>
                  <th className="border-b text-center">Lider</th>
                  <th className="border-b text-center">Contrato</th>
                  <th className="border-b text-center">Coordenador</th>
                  <th className="border-b text-center">Supervisor</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.equipe}</td>
                    <td className="border-b py-2 text-center">{d.tipo}</td>
                    <td className="border-b py-2 text-center">{d.lider_id}</td>
                    <td className="border-b py-2 text-center">{d.contrato}</td>
                    <td className="border-b py-2 text-center">
                      {d.coordenador_id}
                    </td>
                    <td className="border-b py-2 text-center">
                      {d.supervisor_id}
                    </td>
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
