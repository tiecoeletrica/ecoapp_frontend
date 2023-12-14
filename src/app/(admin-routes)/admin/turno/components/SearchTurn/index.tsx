"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";

import { TurnType as TurnType } from "@/types/Turno";
import PropTypes from "prop-types";

interface SearchUsersProps {
  response: TurnType[];
}
const SearchTurn: React.FC<SearchUsersProps> = ({ response }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(response.length / itemsPerPage);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = response.slice(firstItemIndex, lastItemIndex);

  const goToNextPage = () =>
    setCurrentPage((page) => (page < pageCount ? page + 1 : page));

  const goToPreviousPage = () =>
    setCurrentPage((page) => (page > 1 ? page - 1 : page));

  return (
    <div className="w-full mx-auto px-4">
      <form className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-10">
        <Input
          title="Lider da equipe"
          type="text"
          placeholder="Digite o nome do encarregado..."
        />
        <div className="flex flex-row items-end gap-4">
          <Input title="Início" type="date" />
          <Input title="Final" type="date" />
        </div>
        <Button className="lg:max-w-[200px]" type="button">
          <FaSearch />
        </Button>
      </form>
      {currentItems.length ? (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto rounded">
              <thead>
                <tr className="border-b">
                  <th className="border-b text-center">Data</th>
                  <th className="border-b text-center">ID</th>
                  <th className="border-b text-center">Equipe</th>
                  <th className="border-b text-center">Nome</th>
                  <th className="border-b text-center">Placa</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center">{d.data}</td>
                    <td className="border-b py-2 text-center">{d.id}</td>
                    <td className="border-b py-2 text-center">{d.equipe}</td>
                    <td className="border-b py-2 text-center">{d.nome}</td>
                    <td className="border-b py-2 text-center">{d.placa}</td>
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
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(
              (number) => (
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
              ),
            )}
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
  );
};

SearchTurn.propTypes = {
  response: PropTypes.array.isRequired,
};

export default SearchTurn;
