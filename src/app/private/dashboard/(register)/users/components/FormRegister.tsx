import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const FormRegister = () => {
  return (
    <>
      <div>
        <Input
          className="mb-2"
          title="Nome"
          type="text"
          placeholder="Digite o nome do colaborador"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            className="mb-2"
            title="CPF"
            type="text"
            placeholder="Digite o CPF do colaborador"
          />
          <Input
            className="mb-2"
            title="E-mail"
            type="email"
            placeholder="@ecoeletrica.com.br"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Input className="mb-2" title="Senha" type="password" />
          <div className="flex flex-col w-full">
            <label className="font-bold">Status</label>
            <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
              <option value="Escolha">Escolha</option>:
              <option value="ADM">ADM</option>:
              <option value="PROGRAMADOR">PROGRAMADOR</option>:
              <option value="SUPERVISOR">SUPERVISOR</option>:
            </select>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <Button className="md:max-w-xs">Cadastrar</Button>
      </div>
    </>
  );
};
export default FormRegister;
