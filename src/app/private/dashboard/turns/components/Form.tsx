"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import FormFilter from "./FormFilter";
import FormTable from "./FormTable";
import Pagination from "./Pagination";

import { TurnType } from "@/types/rotes";
interface FormProps {
  data: TurnType[];
}

const Form = ({ data }: FormProps) => {
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [originalList] = useState(data);
  const [filteredUsers] = useState<TurnType[]>(originalList);
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

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleClick(id: number) {
    router.push(`turns/${id}`);
  }

  return (
    <div className="w-full mx-auto px-4 relative">
      <>
        <FormFilter handleOpenModal={handleOpenModal} />
        <FormTable currentItems={currentItems} onClick={handleClick} />
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          goToPreviousPage={goToPreviousPage}
          setCurrentPage={setCurrentPage}
          goToNextPage={goToNextPage}
        />
      </>
    </div>
  );
};
export default Form;
