"use client";
import { useState } from "react";

import FormTable from "./FormTable";

import { serviceType } from "@/types/rotes";

interface FormProps {
  data: serviceType[];
}
const Form = ({ data }: FormProps) => {
  const typeData = data.map((item) => item.unidade);
  const optionType = [...new Set(typeData)];
  const [originalList] = useState(data);
  const [filteredUsers, setFilteredUsers] =
    useState<serviceType[]>(originalList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredUsers.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="w-full mx-auto px-4 relative">
      <FormTable currentItems={currentItems} optionType={optionType} />
    </div>
  );
};

export default Form;
