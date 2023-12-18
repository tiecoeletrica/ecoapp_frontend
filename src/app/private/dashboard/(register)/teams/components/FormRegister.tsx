import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
const Form = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div className="md:max-w-[50%] w-full">
          <Input title="Equipe" />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold ">Tipo</label>
          <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
            <option value="Escolha">Escolha</option>
            <option value="LM">LM</option>
            <option value="LV">LV</option>
            <option value="APOIO">APOIO</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold ">Contrato</label>
          <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
            <option value="Escolha">Escolha</option>
            <option value="CELPE">CELPE</option>
            <option value="COELBA">COELBA</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <Input title="Lider da equipe" placeholder="Digite o lider da equipe" />
        <div className="flex flex-col w-full">
          <label className="font-bold ">Coordenador</label>
          <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
            <option value="Escolha">Escolha</option>
            <option value="Juninho Pernambucano">Juninho Pernambucano</option>
            <option value="Edilson">Edilson</option>
            <option value="Pedrinho">Pedrinho</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold ">Supervisor</label>
          <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
            <option value="Escolha">Escolha</option>
            <option value="Juninho Pernambucano">Juninho Pernambucano</option>
            <option value="Edilson">Edilson</option>
            <option value="Pedrinho">Pedrinho</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button className="md:max-w-xs">Cadastrar</Button>
      </div>
    </>
  );
};

export default Form;
