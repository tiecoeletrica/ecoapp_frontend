import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const Form = () => {
  return (
    <div className="w-full mx-auto px-4">
      <form className="flex flex-col gap-4 md:flex-row mb-4 ">
        <Input type="text" title="placa" />
        <div className=" md:max-w-[50%] w-full">
          <label className="font-bold">Tipo</label>
          <select className="outline-none focus:no-underline w-full border border-gray h-10 rounded">
            <option value="Escolha">Escolha</option>
            <option value="LEVE">LEVE</option>
            <option value="PESADO">PESADO</option>
            <option value="RETROESCAVADEIRA">RETROESCAVADEIRA</option>
          </select>
        </div>
        <Input type="text" title="Equipe" />
      </form>
      <div className="w-full flex justify-end">
        <Button className="md:max-w-xs w-full">Cadastrar</Button>
      </div>
    </div>
  );
};

export default Form;
