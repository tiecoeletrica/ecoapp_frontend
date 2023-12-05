"use client";
import { Button } from "@/components/_ui/Button";

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

      <div className="mt-10 mx-auto">
        <div className="flex w-full justify-center bg-green-700 text-white">
          <div className=" max-w-[600px] w-full border text-center">Nome</div>
          <div className=" max-w-[200px] w-full border text-center">CPF</div>
          <div className=" max-w-[200px] w-full border text-center">Email</div>
          <div className=" max-w-[200px] w-full border text-center">Tipo</div>
          <div className=" max-w-[200px] w-full border text-center">Ações</div>
        </div>

        {/* componetns */}
      </div>
    </>
  );
};

export default SearchUsers;
