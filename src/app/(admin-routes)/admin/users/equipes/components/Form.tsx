"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPen, FaPlus } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import { Select } from "@/components/_ui/Select";

import { VehicleType } from "@/types/type-req";
import PropTypes from "prop-types";

interface SearchVehicleProps {
  data: VehicleType[];
}
const AddVehicle = ({ data }: SearchVehicleProps) => {
  const { push } = useRouter();
  const [originalList] = useState<VehicleType[]>(data);
  const [filteredUsers, setFilteredUsers] =
    useState<VehicleType[]>(originalList);
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

  function handlePageVehicle(d: VehicleType) {
    push(`/admin/users/equipes/${d.id}`);
  }

  // const placas = response
  //   .filter((item) => item.tipo !== "")
  //   .map((item) => item.placa);
  // const [repos] = useState(placas);
  // const [search, setSearch] = useState("");

  // // filtro escrevendo
  // const filteredRepos =
  //   search.length > 0 ? repos.filter((repo) => repo.includes(search)) : [];

  return (
    <div className="w-full mx-auto p-4">
      <form className="flex flex-wrap justify-between items-end mb-10">
        <div className="max-w-[600px]">
          <Input
            type="text"
            placeholder="Digite a placa..."
            maxLength={7}
            name="search"
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <Select onChange={handleFilterChange}>
            <option value="Filtrar por">Filtrar por</option>
            <option value="PESADO">PESADO</option>
            <option value="LEVE">LEVE</option>
            <option value="RETRO">RETRO</option>
          </Select>
          <Button className="flex justify-between" type="button">
            <span className="w-auto">Cadastrar</span>
            <FaPlus className="ml-2" />
          </Button>
        </div>
      </form>
      {currentItems.length ? (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto rounded">
              <thead>
                <tr className="border-b">
                  <th className="py-1 text-center max-w-[10px]">ID</th>
                  <th className="py-1 text-center max-w-[10px]">Placa</th>
                  <th className="py-1 text-center max-w-[10px]">Tipo</th>
                  <th className="py-1 text-center">Equipe</th>
                  <th className="py-1 text-center  max-w-[10px]">Ações</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="border-b py-2 text-center max-w-[10px]">
                      {d.id}
                    </td>
                    <td className="border-b py-2 text-center max-w-[10px]">
                      {d.placa}
                    </td>
                    <td className="border-b py-2 text-center  max-w-[10px]">
                      {d.tipo}
                    </td>
                    <td className="border-b py-2 text-center">{d.equipe_id}</td>
                    <td className="border-b py-2 text-center  max-w-[10px]">
                      <FaPen
                        className="mx-auto"
                        onClick={() => handlePageVehicle(d)}
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

AddVehicle.propTypes = {
  data: PropTypes.array.isRequired,
};
export default AddVehicle;
