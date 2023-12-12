"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";

import PropTypes from "prop-types";
interface PropsResponse {
  id: number;
  equipe_id: number;
  placa: string;
  equipe: string;
  data: string;
  construction: string;
}

interface SearchUsersProps {
  response: PropsResponse[];
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
    <div className="container mx-auto px-4">
      <form className="flex flex-wrap justify-between items-end mb-10">
        <Input
          title="Lider da equipe"
          type="text"
          placeholder="Digite o nome do encarregado..."
        />
        <div className="flex flex-row items-end gap-4">
          <Input title="Início" type="date" />
          <Input title="Final" type="date" />
        </div>
        <Button size="default" type="button" variant="default">
          <FaSearch />
        </Button>
      </form>
      {currentItems.length ? (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto rounded">
              <thead className="bg-green-900 text-white ">
                <tr className="border">
                  <th className="border px-2 py-1 text-center">ID</th>
                  <th className="border px-2 py-1 text-center">Data</th>
                  <th className="border px-2 py-1 text-center">Obra</th>
                  <th className="border px-2 py-1 text-center">Placa</th>
                  <th className="border px-2 py-1 text-center">Nome</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id}>
                    <td className="border  py-1 text-center">{d.equipe_id}</td>
                    <td className="border py-1 text-center">{d.data}</td>
                    <td className="border py-1 text-center">
                      {d.construction}
                    </td>
                    <td className="border  py-1 text-center">{d.placa}</td>
                    <td className="border  py-1 text-center">{d.equipe}</td>
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
