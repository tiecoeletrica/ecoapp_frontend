"use client";
import { Button } from "@/components/_ui/Button";
import LineUsers from "@/components/_ui/LineUsers";

const SearchUsers = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold">Lista de usuários</h1>
        <div className="flex gap-2">
          <Button type="button" variant={"solicitation"}>
            Pendentes
          </Button>
          <Button type="button" variant={"default"}>
            Cadastrar
          </Button>
        </div>
      </div>

      <div className="mt-10 w-full mx-auto">
        <div className="flex w-full justify-center bg-green-700 text-white rounded-tl-lg rounded-tr-lg">
          <div className=" max-w-[40%] w-full  text-center p-2">Nome</div>
          <div className=" max-w-[10%] w-full  text-center p-2">CPF</div>
          <div className=" max-w-[30%] w-full  text-center p-2">Email</div>
          <div className=" max-w-[10%] w-full  text-center p-2">Tipo</div>
          <div className=" max-w-[10%] w-full  text-center p-2">Ações</div>
        </div>
        <LineUsers
          nome="João Vittor Lopes dos Santos"
          cpf="***********"
          email="joaovittor@ecoeletrica.com.br"
          tipo="ADM"
        />
        <LineUsers
          nome="João do beira rio"
          cpf="***********2"
          email="joaovittor2@ecoeletrica.com.br"
          tipo="ADM"
        />
      </div>
    </>
  );
};

export default SearchUsers;
