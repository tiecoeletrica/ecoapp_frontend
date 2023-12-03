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
        <div className="flex w-full justify-center  text-white">
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            Nome
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            CPF
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            Email
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            Tipo
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            Ações
          </div>
        </div>
        <div className="flex w-full justify-center text-white">
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            JOAO
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            **********
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            TESTE@GMIAL.COM
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            ADM
          </div>
          <div className="bg-green-700 max-w-[200px] w-full border text-center">
            Ações
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUsers;
