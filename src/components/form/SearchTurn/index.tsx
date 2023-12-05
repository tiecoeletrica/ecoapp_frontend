import { FaSearch } from "react-icons/fa";

import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";

const SearchTurn = () => {
  return (
    <div className="flex flex-wrap justify-between items-center  w-full gap-2">
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
      <Button size="default" type="button" variant="default">
        <FaSearch />
      </Button>
    </div>
  );
};
export default SearchTurn;
