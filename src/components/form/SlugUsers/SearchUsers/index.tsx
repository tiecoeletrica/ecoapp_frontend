// "use client";
// import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// const SearchUsers = () => {
//   const data = [
//     { id: 1, placa: "AAA-1234", nome: "Vehicle 1", data: "2023-01-01" },
//     { id: 2, placa: "BBB-5678", nome: "Vehicle 2", data: "2023-01-02" },
//     { id: 3, placa: "CCC-9101", nome: "Vehicle 3", data: "2023-01-03" },
//     { id: 4, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 5, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 6, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 7, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 8, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 9, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 10, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 11, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 12, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 13, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 14, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 15, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 16, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 17, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 18, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 19, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 20, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 21, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 22, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 23, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 24, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 25, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 26, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 27, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 28, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 29, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//     { id: 30, placa: "DDD-1123", nome: "Vehicle 4", data: "2023-01-04" },
//   ];
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const pageCount = Math.ceil(data.length / itemsPerPage);

//   const lastItemIndex = currentPage * itemsPerPage;
//   const firstItemIndex = lastItemIndex - itemsPerPage;
//   const currentItems = data.slice(firstItemIndex, lastItemIndex);

//   const goToNextPage = () =>
//     setCurrentPage((page) => (page < pageCount ? page + 1 : page));

//   const goToPreviousPage = () =>
//     setCurrentPage((page) => (page > 1 ? page - 1 : page));

//   return (
//     <div className="container mx-auto px-4">
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto rounded">
//           <thead className="bg-green-900 text-white ">
//             <tr className="border">
//               <th className="border px-2 py-1 text-center">ID</th>
//               <th className="border px-2 py-1 text-center">Placa</th>
//               <th className="border px-2 py-1 text-center">Nome</th>
//               <th className="border px-2 py-1 text-center">Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((d) => (
//               <tr key={d.id}>
//                 <td className="border py-1 text-center">{d.id}</td>
//                 <td className="border  py-1 text-center">{d.placa}</td>
//                 <td className="border  py-1 text-center">{d.nome}</td>
//                 <td className="border  py-1 text-center">{d.data}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-end items-center my-4">
//         <button
//           onClick={goToPreviousPage}
//           className={`px-3 py-1 mx-1 ${
//             currentPage === 1
//               ? "cursor-not-allowed text-gray-500"
//               : "bg-blue-500 text-white"
//           }`}
//         >
//           <FaAngleLeft />
//         </button>
//         {Array.from({ length: pageCount }, (_, index) => index + 1).map(
//           (number) => (
//             <button
//               key={number}
//               onClick={() => setCurrentPage(number)}
//               className={`px-3 py-1 mx-1 ${
//                 currentPage === number
//                   ? "bg-gray-300 text-white hover:bg-gray-300 rounded"
//                   : "bg-blue-500 text-gray-500"
//               }`}
//             >
//               {number}
//             </button>
//           ),
//         )}
//         <button
//           onClick={goToNextPage}
//           className={`px-3 py-1 mx-1 ${
//             currentPage === pageCount
//               ? "cursor-not-allowed text-gray-500"
//               : "bg-blue-500 text-gray-500"
//           }`}
//         >
//           <FaAngleRight />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default SearchUsers;

// "use client";
// import React, { useState, useEffect } from "react";

// import LineUsers from "@/components/_ui/LineUsers";
// import { Select } from "@/components/_ui/Select";

// interface PropsResponse {
//   id: number;
//   nome: string;
//   cpf: string;
//   email: string;
//   tipo: string;
//   equipe?: string;
//   onClick?: (event: React.MouseEvent<HTMLElement>) => void;
// }

// interface SearchUsersProps {
//   response: PropsResponse[];
// }

// const SearchUsers: React.FC<SearchUsersProps> = ({ response }) => {
//   const [originalList, setOriginalList] = useState<PropsResponse[]>(response);
//   const [filteredUsers, setFilteredUsers] =
//     useState<PropsResponse[]>(originalList);

//   useEffect(() => {
//     setOriginalList(response);
//     setFilteredUsers(response);
//   }, [response]);
//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedType = e.target.value;
//     const filteredList = originalList.filter(
//       (item) => item.tipo === selectedType,
//     );
//     setFilteredUsers(filteredList);
//   };

//   const handleRote = (e: React.MouseEvent<HTMLElement>) => {
//     console.log(e);
//   };

//   return (
//     <div className="max-w-6xl w-full mx-auto">
//       <div className="flex items-center justify-between">
//         <h1 className="font-bold text-3xl">Lista de usuários</h1>
//       </div>
//       <div className=" max-w-xs flex mt-4">
//         <Select title="Filtrar por:" onChange={handleFilterChange}>
//           <option value="Escolha">Escolha</option>
//           <option value="ADM">ADM</option>
//           <option value="CAMPO">CAMPO</option>
//           <option value="SUPERVISOR (A) DE OBRAS">
//             SUPERVISOR (A) DE OBRAS
//           </option>
//           <option value="PROGRAMADOR">PROGRAMADOR</option>
//         </Select>
//       </div>
//       <div className="my-10 w-full mx-auto">
//         <div className="flex w-full justify-center bg-green-700 text-white rounded-tl-lg rounded-tr-lg">
//           <div className=" max-w-[30%] w-full  text-center py-2">Nome</div>
//           <div className=" max-w-[20%] w-full  text-center py-2">CPF</div>
//           <div className=" max-w-[30%] w-full  text-center py-2">Email</div>
//           <div className=" max-w-[10%] w-full  text-center py-2">Tipo</div>
//           <div className=" max-w-[10%] w-full  text-center py-2">Ações</div>
//         </div>
//         <div className="overflow-x-auto max-h-[400px] h-full">
//           {filteredUsers.map((item) => (
//             <LineUsers
//               key={item.id}
//               nome={item.nome}
//               cpf={item.cpf}
//               email={item.email}
//               tipo={item.tipo}
//               onClick={handleRote}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchUsers;
