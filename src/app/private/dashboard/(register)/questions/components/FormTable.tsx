// FormTable.jsx
import React from "react";

import { QuestionType } from "@/types/rotes";

interface FormTableProps {
  currentItems: QuestionType[];
  isDelete: string[];
  handleCheckboxChange: (id: string) => void;
}
const FormTable: React.FC<FormTableProps> = ({
  currentItems,
  isDelete,
  handleCheckboxChange,
}) => {
  return (
    <div>
      {currentItems.length ? (
        <div>
          <div className="overflow-x-auto max-h-[45%]">
            <table className="min-w-full table-auto rounded overflow-x">
              <thead>
                <tr className="border-b">
                  <th className="border-b text-center">ID</th>
                  <th className="border-b text-center">Tipo</th>
                  <th className="border-b text-center">Categoria</th>
                  <th className="border-b text-center">Pergunta</th>
                  <th className="border-b text-center">Deletar</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.id}</td>
                    <td className="border-b py-2 text-center">{d.tipo}</td>
                    <td className="border-b py-2 text-center">{d.categoria}</td>
                    <td className="border-b py-2 text-center">
                      {d.pergunta_resposta}
                    </td>
                    <td className="border-b py-2 text-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        className="w-6 h-6  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={isDelete.includes(d.id.toString())}
                        onChange={() => handleCheckboxChange(d.id.toString())}
                      />
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
