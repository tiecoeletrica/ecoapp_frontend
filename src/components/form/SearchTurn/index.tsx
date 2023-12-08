"use client";
import { FaPen, FaSearch } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import Turn from "@/components/_ui/Turn";
const response = [
  {
    cod: "123123132",
    processo: "12312313",
    contrato: "CELPE",
    coordenador: " Joao",
    supervisor: "Joazin",
    responsavel: "Joaozao",
    placa: "RPA2J17",
    data_inicial: "11/06/2023",
    data_final: "11/09/2023",
    situacao: "Concluida",
  },
  {
    cod: "123123132",
    processo: "12312313",
    contrato: "CELPE",
    coordenador: " Joao",
    supervisor: "Joazin",
    responsavel: "Joaozao",
    placa: "RPA2J17",
    data_inicial: "11/06/2023",
    data_final: "11/09/2023",
    situacao: "Concluida",
  },
  {
    cod: "123123132",
    processo: "12312313",
    contrato: "CELPE",
    coordenador: " Joao",
    supervisor: "Joazin",
    responsavel: "Joaozao",
    placa: "RPA2J17",
    data_inicial: "11/06/2023",
    data_final: "11/09/2023",
    situacao: "Concluida",
  },
  {
    cod: "123123132",
    processo: "12312313",
    contrato: "CELPE",
    coordenador: " Joao",
    supervisor: "Joazin",
    responsavel: "Joaozao",
    placa: "RPA2J17",
    data_inicial: "11/06/2023",
    data_final: "11/09/2023",
    situacao: "Concluida",
  },
  {
    cod: "123123132",
    processo: "12312313",
    contrato: "CELPE",
    coordenador: " Joao",
    supervisor: "Joazin",
    responsavel: "Joaozao",
    placa: "RPA2J17",
    data_inicial: "11/06/2023",
    data_final: "11/09/2023",
    situacao: "Concluida",
  },
  {
    cod: "123123132",
    processo: "12312313",
    contrato: "CELPE",
    coordenador: " Joao",
    supervisor: "Joazin",
    responsavel: "Joaozao",
    placa: "RPA2J17",
    data_inicial: "11/06/2023",
    data_final: "11/09/2023",
    situacao: "Concluida",
  },
];
const SearchTurn = () => {
  return (
    <div className="max-w-6xl w-full mx-auto gap-2">
      <form className="flex flex-wrap justify-between items-end">
        <Input
          size={"lg"}
          title="Lider da equipe"
          type="text"
          placeholder="Digite o nome do encarregado..."
        />
        <div className="flex flex-row items-end gap-4">
          <Input title="Início" type="date" />
          <Input title="Final" type="date" />
        </div>
        <Button
          size="default"
          type="button"
          variant="default"
          className="mb-10"
        >
          <FaSearch />
        </Button>
      </form>
      <div className="flex items-center justify-between border-b border-l border-r p-4 w-full">
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          <a>Cód. Turno</a>
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Processo
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Contratos
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Coordenador
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Supervisor
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Reponsável
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">Placa</div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Data inicial
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Data final
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          Situação
        </div>
        <div className="min-w-[10%] max-w-[10%] w-full text-center">
          <FaPen />
        </div>
      </div>
      {response.map((item) => {
        return (
          <Turn
            key={item.cod}
            cod={item.cod}
            processo={item.processo}
            contrato={item.contrato}
            coordenador={item.coordenador}
            supervisor={item.supervisor}
            responsavel={item.responsavel}
            placa={item.placa}
            data_inicial={item.data_inicial}
            data_final={item.data_final}
            situacao={item.situacao}
          />
        );
      })}
    </div>
  );
};
export default SearchTurn;
