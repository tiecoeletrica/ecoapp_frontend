// Pagination.jsx
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  setCurrentPage: (number: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  pageCount: number;
  currentPage: number;
}

const Pagination = ({
  currentPage,
  pageCount,
  goToPreviousPage,
  setCurrentPage,
  goToNextPage,
}: PaginationProps) => {
  return (
    <div className="flex justify-end items-center my-4">
      <button
        onClick={goToPreviousPage}
        className={`px-3 py-1 mx-1 ${
          currentPage === 1 ? "cursor-not-allowed text-gray-500" : " text-white"
        }`}
      >
        <FaAngleLeft />
      </button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
        (number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 mx-1  rounded ${
              currentPage === number
                ? "bg-gray-300 text-white hover:bg-gray-300"
                : " text-gray-500 hover:bg-gray-500 hover:text-white"
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
            : " text-gray-500"
        }`}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
