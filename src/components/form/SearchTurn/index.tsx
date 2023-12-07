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
  const onSubmit = () => {
    alert("Pokemon");
  };

  return (
    <div className="w-full gap-2">
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
          onSubmit={onSubmit}
          className="mb-10"
        >
          <FaSearch />
        </Button>
      </form>
      <div className="flex items-center border p-4 rounded-t w-full mt-10">
        <div className="min-w-full[10%] w-full[10%] text-center">
          <a>Cód. Turno</a>
        </div>
        <div className="min-w-full[10%] w-full[10%] text-center">Processo</div>
        <div className="min-w-full[10%] w-full[10%] text-center">Contratos</div>
        <div className="min-w-full[10%] w-full[10%] text-center">
          Coordenador
        </div>
        <div className="min-w-full[10%] w-full[10%] text-center">
          Supervisor
        </div>
        <div className="min-w-full[10%] w-full[10%] text-center">
          Reponsável
        </div>
        <div className="min-w-full[10%] w-full[10%] text-center">Placa</div>
        <div className="min-w-full[10%] w-full[10%] text-center">
          Data inicial
        </div>
        <div className="min-w-full[10%] w-full[10%] text-center">
          Data final
        </div>
        <div className="min-w-full[10%] w-full[10%] text-center">Situação</div>
        <div className="min-w-full[10%] w-full[10%] text-center">
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
