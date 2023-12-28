"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import FormFilter from "./FormFilter";
import FormRegister from "./FormRegister";
import FormTable from "./FormTable";
import Pagination from "./Pagination";

import { constructionType } from "@/types/rotes";
interface FormProps {
  data: constructionType[];
  token: string;
}

const Form = ({ data, token }: FormProps) => {
  const router = useRouter();
  const typeData = data.map((item) => item.utd);
  const optionType = [...new Set(typeData)];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [originalList] = useState(data);
  const [filteredUsers, setFilteredUsers] =
    useState<constructionType[]>(originalList);
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
      const filteredList = originalList.filter((item) => {
        if (item.utd === selectedType) {
          return item;
        }
      });
      setFilteredUsers(filteredList);
    }
  };
  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleClick(id: string) {
    router.push(`constructions/${id}`);
  }

  return (
    <div className="w-full mx-auto px-4 relative">
      {!modalIsOpen ? (
        <>
          <FormFilter
            optionType={optionType}
            handleOpenModal={handleOpenModal}
            handleFilterChange={handleFilterChange}
          />
          <FormTable currentItems={currentItems} onClick={handleClick} />
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