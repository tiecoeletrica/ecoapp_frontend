import { Input } from "@/components/_ui/Input";

const SearchTurn = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap w-full gap-4">
        <Input
          title="Lider da equipe"
          size={"lg"}
          type="text"
          placeholder="Digite o nome do encarregado..."
        />
        <div className="flex items-center flex-wrap gap-4">
          <Input title="Início" type="date" />
          <Input title="Final" type="date" />
        </div>
      </div>
    </>
  );
};
export default SearchTurn;
