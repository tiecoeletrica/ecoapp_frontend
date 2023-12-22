"use client";

import { useState } from "react";

import FormFilter from "./FormFilter";
import FormRegister from "./FormRegister";
import FormTable from "./FormTable";
import Pagination from "./Pagination";

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDelete, setDelete] = useState<string[]>([]);

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
    console.log(isDelete);
    setDelete([]);
  };

  return (
    <div className="w-full mx-auto px-4 relative">
      {!modalIsOpen ? (
        <>
          <FormFilter
            optionType={optionType}
            optionCategory={optionCategory}
            handleFilterChange={handleFilterChange}
            handleOpenModal={handleOpenModal}
            isDelete={isDelete}
            handleDelete={handleDelete}
          />
          <FormTable
            currentItems={currentItems}
            isDelete={isDelete}
            handleCheckboxChange={handleCheckboxChange}
          />
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            goToPreviousPage={goToPreviousPage}
            setCurrentPage={setCurrentPage}
            goToNextPage={goToNextPage}
          />
        </>
      ) : (
        <div className="mt-72">
          <FormRegister
            token={token}
            isOpen={modalIsOpen}
            onClose={handleOpenModal}
          />
        </div>
      )}
    </div>
  );
};

export default Form;
