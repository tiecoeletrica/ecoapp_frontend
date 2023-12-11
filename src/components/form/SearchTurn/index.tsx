"use client";
import { FaPen, FaSearch } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import Turn from "@/components/_ui/Turn";

interface PropsResponse {
  id: number;
  equipe_id: number;
  equipe: string;
  nome: string;
  data: string;
  placa: string;
}
interface SearchUsersProps {
  response: PropsResponse[];
}

const SearchTurn: React.FC<SearchUsersProps> = ({ response }) => {
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
      {response.map((item, index) => {
        return <Turn key={index} />;
      })}
    </div>
  );
};
export default SearchTurn;
