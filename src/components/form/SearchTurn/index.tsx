"use client";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const SearchTurn = () => {
  const data = [
    { id: 1, placa: "AAA-1234", nome: "Vehicle 1", data: "2023-01-01" },
    { id: 2, placa: "BBB-5678", nome: "Vehicle 2", data: "2023-01-02" },
    { id: 3, placa: "CCC-9101", nome: "Vehicle 3", data: "2023-01-03" },
    { id: 4, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 5, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 6, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 7, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 8, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 9, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 10, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 11, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 12, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 13, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 14, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 15, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 16, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 17, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 18, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 19, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 20, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 21, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 22, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 23, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 24, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 25, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 26, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 27, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 28, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 29, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
    { id: 30, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const goToNextPage = () =>
    setCurrentPage((page) => (page < pageCount ? page + 1 : page));

  const goToPreviousPage = () =>
    setCurrentPage((page) => (page > 1 ? page - 1 : page));

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded">
          <thead className="bg-green-900 text-white ">
            <tr className="border">
              <th className="border px-2 py-1 text-center">ID</th>
              <th className="border px-2 py-1 text-center">Placa</th>
              <th className="border px-2 py-1 text-center">Nome</th>
              <th className="border px-2 py-1 text-center">Data</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((d) => (
              <tr key={d.id}>
                <td className="border py-1 text-center">{d.id}</td>
                <td className="border  py-1 text-center">{d.placa}</td>
                <td className="border  py-1 text-center">{d.nome}</td>
                <td className="border  py-1 text-center">{d.data}</td>
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

export default SearchTurn;

// "use client";
// import { FaPen, FaSearch } from "react-icons/fa";

// import { Button } from "@/components/_ui/Button";
// import { Input } from "@/components/_ui/Input";
// import Turn from "@/components/_ui/Turn";

// interface PropsResponse {
//   id: number;
//   equipe_id: number;
//   equipe: string;
//   nome: string;
//   data: string;
//   placa: string;
// }
// interface SearchUsersProps {
//   response: PropsResponse[];
// }

// const SearchTurn: React.FC<SearchUsersProps> = ({ response }) => {
//   return (
//     <div className="max-w-6xl w-full mx-auto gap-2">
//       <form className="flex flex-wrap justify-between items-end">
//         <Input
//           size={"lg"}
//           title="Lider da equipe"
//           type="text"
//           placeholder="Digite o nome do encarregado..."
//         />
//         <div className="flex flex-row items-end gap-4">
//           <Input title="Início" type="date" />
//           <Input title="Final" type="date" />
//         </div>
//         <Button
//           size="default"
//           type="button"
//           variant="default"
//           className="mb-10"
//         >
//           <FaSearch />
//         </Button>
//       </form>
//       <div className="flex items-center justify-between border-b border-l border-r p-4 w-full">
//         <div className="min-w-[10%] max-w-[10%] w-full text-center">Placa</div>
//         <div className="min-w-[10%] max-w-[10%] w-full text-center">Equipe</div>
//         <div className="min-w-[10%] max-w-[10%] w-full text-center">
//           Encarregado
//         </div>
//         <div className="min-w-[10%] max-w-[10%] w-full text-center">Data</div>
//         <div className="min-w-[10%] max-w-[10%] w-full text-center">
//           <FaPen />
//         </div>
//       </div>
//       {response.map((item, index) => {
//         return (
//           <Turn
//             key={index}
//             equipe_id={item.equipe_id}
//             nome={item.nome}
//             data={item.data}
//             placa={item.placa}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default SearchTurn;
