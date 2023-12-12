"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPen } from "react-icons/fa";

import { Select } from "@/components/_ui/Select";

import PropTypes from "prop-types";

interface PropsResponse {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
}

interface SearchUsersProps {
  response: PropsResponse[];
}

const SearchUsers: React.FC<SearchUsersProps> = ({ response }) => {
  console.log(response);
  const [originalList, setOriginalList] = useState<PropsResponse[]>(response);

  const [filteredUsers, setFilteredUsers] =
    useState<PropsResponse[]>(originalList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-3xl">Lista de usuários</h1>
        </div>
        <div className="max-w-xs flex mt-4">
          <Select onChange={handleFilterChange}>
            <option value="Filtrar por">Filtrar por</option>
            <option value="ADM">ADM</option>
            <option value="CAMPO">CAMPO</option>
            <option value="SUPERVISOR (A) DE OBRAS">
              SUPERVISOR (A) DE OBRAS
            </option>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded">
          <thead className="bg-green-900 text-white ">
            <tr className="border">
              <th className="border py-1 text-center">ID</th>
              <th className="border py-1 text-center">CPF</th>
              <th className="border py-1 text-center">Nome</th>
              <th className="border py-1 text-center">Email</th>
              <th className="border py-1 text-center">Tipo</th>
              <th className="border py-1 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((d) => (
              <tr key={d.id}>
                <td className="border py-1 text-center">{d.id}</td>
                <td className="border  py-1 text-center">{d.cpf}</td>
                <td className="border  py-1 text-center">{d.nome}</td>
                <td className="border  py-1 text-center">{d.email}</td>
                <td className="border  py-1 text-center">{d.tipo}</td>
                <td className="border  py-1 text-center">
                  <FaPen className="mx-auto" />
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
  );
};

SearchUsers.propTypes = {
  response: PropTypes.array.isRequired,
};
export default SearchUsers;
