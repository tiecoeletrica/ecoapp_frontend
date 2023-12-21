"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";

import { Button } from "@/components/Button";

import FormRegister from "./FormRegister";

import { QuestionType } from "@/types/rotes";
interface FormProps {
  data: QuestionType[];
  token: string;
}
const Form = ({ data, token }: FormProps) => {
  const typeData = data.map((item) => item.tipo);
  const optionType = [...new Set(typeData)];

  const categoryData = data.map((item) => item.categoria);
  const optionCategory = [...new Set(categoryData)];

  const [originalList] = useState(data);
  const [filteredUsers, setFilteredUsers] =
    useState<QuestionType[]>(originalList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredUsers.slice(firstItemIndex, lastItemIndex);

  const goToNextPage = () =>
    setCurrentPage((page) => (page < pageCount ? page + 1 : page));

  const goToPreviousPage = () =>
    setCurrentPage((page) => (page > 1 ? page - 1 : page));

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    if (selectedType == "Filtrar por") {
      setFilteredUsers(originalList);
    } else {
      const filteredList = originalList.filter(
        (item) => item.tipo === selectedType,
      );
      setFilteredUsers(filteredList);
    }
  };
  const [isDelete, setDelete] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }
  const handleCheckboxChange = (id: string) => {
    if (isDelete.includes(id)) {
      setDelete(isDelete.filter((item) => item !== id));
    } else {
      setDelete([...isDelete, id]);
    }
  };
  const handleDelete = () => {
    setDelete([]);
  };

  return (
    <div className="w-full mx-auto px-4 relative">
      {modalIsOpen ? (
        <div className="mt-72">
          <FormRegister
            token={token}
            isOpen={modalIsOpen}
            onClose={handleOpenModal}
          />
        </div>
      ) : (
        <div>
          <div className="flex flex-col md:flex-row gap-4 justify-end  mb-10">
            <div className="flex flex-col md:flex-row items-end gap-4">
              <div className="md:max-w-[300px]  w-full flex flex-col">
                <label className="font-bold">Tipo</label>
                <select
                  className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
                  onChange={handleFilterChange}
                >
                  <option value="Filtrar por">Filtrar por:</option>
                  {optionType?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:max-w-[300px] w-full flex flex-col">
                <label className="font-bold">Tipo</label>
                <select
                  className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
                  title="Categoria"
                >
                  <option value="Filtrar por">Filtrar por:</option>
                  {optionCategory?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <Button onClick={handleOpenModal}>
                <FaPlus className="mr-2" />
                Criar
              </Button>
              {isDelete.length > 0 && (
                <Button onClick={handleDelete} background="return">
                  Deletar
                </Button>
              )}
            </div>
          </div>
          <div>
            {currentItems.length ? (
              <div>
                <div className="overflow-x-auto max-h-[45%]">
                  <table className="min-w-full table-auto rounded overflow-x">
                    <thead>
                      <tr className="border-b">
                        <th className="border-b text-center">Categoria</th>
                        <th className="border-b text-center ">Tipo</th>
                        <th className="border-b text-center">Pergunta</th>
                        <th className="border-b text-center">Deletar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((d) => (
                        <tr
                          key={d.id}
                          className="cursor-pointer hover:bg-gray-200"
                        >
                          <td className="border-b py-2 text-center">
                            {d.categoria}
                          </td>
                          <td className="border-b py-2 text-center">
                            {d.tipo}
                          </td>
                          <td className="border-b py-2 text-center">
                            {d.pergunta_resposta}
                          </td>
                          <td className="border-b py-2 text-center">
                            <input
                              id="disabled-checkbox"
                              type="checkbox"
                              className="w-6 h-6  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={isDelete.includes(d.id)}
                              onChange={() => handleCheckboxChange(d.id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end items-center my-4">
                  <button
                    onClick={goToPreviousPage}
                    className={`px-3 py-1 mx-1 ${
                      currentPage === 1
                        ? "cursor-not-allowed text-gray-500"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    <FaAngleLeft />
                  </button>
                  {Array.from(
                    { length: pageCount },
                    (_, index) => index + 1,
                  ).map((number) => (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`px-3 py-1 mx-1 ${
                        currentPage === number
                          ? "bg-gray-300 text-white hover:bg-gray-300 rounded"
                          : "bg-blue-500 text-gray-500"
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  <button
                    onClick={goToNextPage}
                    className={`px-3 py-1 mx-1 ${
                      currentPage === pageCount
                        ? "cursor-not-allowed text-gray-500"
                        : "bg-blue-500 text-gray-500"
                    }`}
                  >
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center font-bold">
                Não há dados para essa pesquisa...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
