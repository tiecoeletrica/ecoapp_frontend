"use client"
import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPen, FaSearch } from "react-icons/fa";
interface PropsResponse {
  id: number,
  placa: string,
  tipo: string,
  equipe_id?: number
}
interface Repo {
  name: string
  description: string
}

interface SearchVehicleProps {
  response: PropsResponse[];
}
import PropTypes from "prop-types";
import { Select } from "@/components/_ui/Select";
// const equipes = [
//   "ECOLM0008 - ALDEMIR",
//   "ECOLM0002 - REGIGLEISON",
//   "ECOLM0006 - CARLOS SANTOS",
//   "ECOLM0031 - MARIVALDO SANTOS",
//   "ECOLM0014 - THIAGO BRANDI",
//   "ECOLM0025 - VALBER ALAN",
//   "ECOLV0001 - JOAQUIM SILVA",
//   "ECOLV0002 - JADSON PINHO",
//   "ECOLV0004 - EDIVALDO BRITO",
//   "ECOLV0003 - TIAGO BISPO",
//   "ECOLV0005 - PATRICIO BARBOSA",
//   "ECOPOD001 - JAILTON SANTOS",
//   "ECOLM0037 - ADALBERTO",
//   "ECOLM0019 - CLERISTON",
//   "ECOLM0038 - EDMILSON",
//   "ECOLM0040 - TIAGO DUARTE",
//   "ECOLM0029 - GEIRISON",
//   "ECOLM0010 - JOSE JUNIOR",
//   "ECOLM0030 - RAFAEL AGUIAR",
//   "ECOLM0012 - ROMARIO DUARTE",
//   "ECOLM0017 - HELIO OLIVEIRA",
//   "ECOLM0039 - MANOEL FIRME",
//   "ECOLM0013 - CAMILO ANTONIO",
//   "ECOLM0020 - ELDER ROCHA",
//   "ECOLM0011 - MARCIO SOUZA",
//   "ECOLM0022 - LEANDRO MARTINS",
//   "ECOLM0036 - RUAN",
//   "ECOLM0015 - ACACIO ROCHA",
//   "ECOLM0009 - AGENILDO",
//   "ECOLM0026 - REVERTON",
//   "ECOLM0032 - ADELSON NASCIMENTO",
//   "ECOLM0016 - ENES RAMOS",
//   "ECOLM0033 - GIVALDO VIEIRA",
//   "ECOLM0021 - MATIAS PEREIRA",
//   "ECOLM0018 - VANILSON LUCIO",
//   "ECOLM0041 - ALEX SANTOS",
//   "ECOLM0005 - FABIANO",
//   "ECOLM0001 - JOÃO CARLOS",
//   "ECOLM0024 - RENILDO REIS",
//   "ECOLM0007 - UILIAN SILVA",
//   "ECOLM0004 - WALLAS DIAS",
//   "ECOLM0043 - UBIRAJARA VASCONCELOS",
//   "ECOLM0028 - ANDERSON PEREIRA",
//   "ECOLM0023 - ARILDO JOSE",
//   "ECOLM0035 - MARCELO FREITAS",
//   "ECOLM0027 - VILMARIO",
//   "ECOLM0034 - JAIRO BENICIO",
//   "ECOLM0042 - RAILAN SILVA",
// ];
const AddVehicle: React.FC<SearchVehicleProps> = ({ response }) => {

  const [originalList] = useState<PropsResponse[]>(response);
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

  const goToPreviousPage = () => setCurrentPage((page) => (page > 1 ? page - 1 : page));
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
  }



  var placas = response.filter(item => item.tipo !== "").map(item => item.placa);
  const [repos] = useState(placas)
  const [search, setSearch] = useState('')

  // filtro escrevendo
  const filteredRepos = search.length > 0 ? repos.filter(repo => repo.includes(search)) : []



  return (
    <div className="container mx-auto px-4">
      <form className="flex flex-wrap justify-between items-end mb-10">
        <Input
          type="text"
          title="Placa"
          placeholder="Digite a placa..."
          maxLength={7}
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Select onChange={handleFilterChange}>
          <option value="Filtrar por">Filtrar por</option>
          <option value="PESADO">PESADO</option>
          <option value="LEVE">LEVE</option>
          <option value="RETRO">
            RETRO
          </option>
        </Select>
        <Button size="default" type="button" variant="default">
          <FaSearch />
        </Button>
      </form>
      {currentItems.length ? (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto rounded">
              <thead className="bg-green-900 text-white ">
                <tr className="border">
                  <th className="border px-2 py-1 text-center">ID</th>
                  <th className="border px-2 py-1 text-center">Placa</th>
                  <th className="border px-2 py-1 text-center">Tipo</th>
                  <th className="border px-2 py-1 text-center">Equipe</th>
                  <th className="border py-1 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id}>
                    <td className="border  py-1 text-center">{d.id}</td>
                    <td className="border  py-1 text-center">{d.placa}</td>
                    <td className="border  py-1 text-center">{d.tipo}</td>
                    <td className="border  py-1 text-center">{d.equipe_id}</td>
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
              className={`px-3 py-1 mx-1 ${currentPage === 1
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
                  className={`px-3 py-1 mx-1 ${currentPage === number
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
              className={`px-3 py-1 mx-1 ${currentPage === pageCount
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
}

AddVehicle.propTypes = {
  response: PropTypes.array.isRequired,
};
export default AddVehicle

// const AddVehicle = () => {
//   return (
//     <div className="max-w-6xl w-full mx-auto">
//       <div className="flex items-end justify-between w-full gap-2 mb-10">
//         <Input title="Placa" placeholder="Digite a placa..." />
//         <Select title="Tipo">
//           <option value="Escolha">Escolha</option>
//           <option value="Leve">Leve</option>
//           <option value="Retro">Retro</option>
//           <option value="Pesado">Pesado</option>
//         </Select>
//         <Select title="Equipe">
//           {equipes.map((item) => {
//             return (
//               <option key={item} value={item}>
//                 {item}
//               </option>
//             );
//           })}
//         </Select>
//         <Button variant="default">Cadastrar</Button>
//       </div>
//       <div className="w-full overflow-auto max-h-96 h-full rounded border">
//         <div className="w-full flex justify-between border-b bg-blue-dark-900 text-white ">
//           <div className="max-w-[25%%] bg- w-full text-center border-r">
//             Placa
//           </div>
//           <div className="max-w-[25%%] w-full text-center border-r">Tipo</div>
//           <div className="max-w-[25%%] w-full text-center border-r">Equipe</div>
//           <div className="max-w-[25%%] w-full text-center">Editar</div>
//         </div>
//         {veiculos.length &&
//           veiculos.map((item) => {
//             return (
//               <LineVehicles
//                 key={item.placa}
//                 placa={item.placa}
//                 tipo={item.tipo}
//                 equipe={item.equipe}
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default AddVehicle;
