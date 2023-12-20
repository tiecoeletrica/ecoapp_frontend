"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPen } from "react-icons/fa";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal";
import Select from "@/components/Select";

import { SearchUsersType } from "@/types/rotes";
interface FormProps {
  data: SearchUsersType[];
}

const Form = ({ data }: FormProps) => {
  const [originalList] = useState(data);
  const router = useRouter();
  const [filteredUsers, setFilteredUsers] =
    useState<SearchUsersType[]>(originalList);
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleClick(id: number) {
    router.push(`users/${id}`);
  }

  return (
    <div className="w-full mx-auto px-4 relative">
      {modalIsOpen ? (
        <div className="mt-72">
          <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
            <div>
              <Input
                className="mb-2"
                title="Nome"
                type="text"
                placeholder="Digite o nome do colaborador"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  className="mb-2"
                  title="CPF"
                  type="text"
                  placeholder="Digite o CPF do colaborador"
                />
                <Input
                  className="mb-2"
                  title="E-mail"
                  type="email"
                  placeholder="@ecoeletrica.com.br"
                />
              </div>
              <Select title="Tipo">
                <option>Adm</option>
                <option>Campo</option>
                <option>Programação</option>
                <option>Supervisor</option>
              </Select>
            </div>
            <div className="w-full flex justify-end mt-4">
              <Button className="md:max-w-xs">Cadastrar</Button>
            </div>
          </Modal>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="font-bold text-3xl">Lista de usuários</h1>
            </div>
            <div className="flex mt-4 gap-4">
              <select
                className="border-none outline-none focus:no-underline"
                onChange={handleFilterChange}
              >
                <option value="Filtrar por">Filtrar por</option>
                <option value="ADM">ADM</option>
                <option value="CAMPO">CAMPO</option>
                <option value="SUPERVISOR (A) DE OBRAS">
                  SUPERVISOR (A) DE OBRAS
                </option>
              </select>
              <Button className="px-10" onClick={handleOpenModal}>
                Cadastrar
              </Button>
            </div>
          </div>
          {currentItems.length ? (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto rounded overflow-x">
                  <thead>
                    <tr className="border-b">
                      <th className="border-b text-center">ID</th>
                      <th className="border-b text-center">CPF</th>
                      <th className="border-b text-center">Nome</th>
                      <th className="border-b text-center">Email</th>
                      <th className="border-b text-center">Tipo</th>
                      <th className="border-b text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((d) => (
                      <tr
                        key={d.id}
                        className="cursor-pointer hover:bg-gray-200"
                      >
                        <td className="border-b py-2 text-center">{d.id}</td>
                        <td className="border-b py-2 text-center">{d.cpf}</td>
                        <td className="border-b py-2 text-center">{d.nome}</td>
                        <td className="border-b py-2 text-center">{d.email}</td>
                        <td className="border-b py-2 text-center">{d.tipo}</td>
                        <td className="border-b py-2 text-center">
                          <FaPen
                            className="mx-auto cursor-pointer"
                            onClick={() => handleClick(d.id)}
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
      )}
    </div>
  );
};
export default Form;
