import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";

const SlugUser = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Usuário - João Vittor Lopes dos Santos</h1>
        <Button type="button" variant={"default"}>
          Resetar senha
        </Button>
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <Input title="Nome" size="lg" style={{ width: "100%" }} />
          <Input title="cpf" />
        </div>
        <div className="flex justify-between items-center">
          <Input size="lg" title="E-mail" />
          <Input title="Status" />
        </div>
        <Input title="Tipo" />
      </div>
    </div>
  );
};

export default SlugUser;
