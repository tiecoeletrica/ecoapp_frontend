"use client";
import { useState } from "react";

import { Button } from "@/components/_ui/Button";
import LineUsers from "@/components/_ui/LineUsers";
import { Select } from "@/components/_ui/Select";
interface User {
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
}
const response = [
  { nome: "Joao", cpf: "1231", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "111", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "1231323", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "11231323", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "11231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "12123133", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "121233", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "1131231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "1231231233", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "12132111111113", email: "email", tipo: "ADM" },
];

const SearchUsers = () => {
  const [users, setUsers] = useState<User[]>(response);
  function setChange() {
    const newResponse = response
      .filter((item) => item.tipo === "CAMPO" || item.nome !== undefined)
      .map((item) => ({ ...item }));
    console.log(response);
    setUsers(newResponse);
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Lista de usuários</h1>
        <div className="flex items-baseline gap-2">
          <Select title="Filtrar por:" onChange={setChange}>
            <option value={"Escolha"}>Escolha</option>
            <option value="ADM">ADM</option>
            <option value="CAMPO">CAMPO</option>
            <option value="SUPERVISOR">SUPERVISOR</option>
            <option value="PROGRAMADOR">PROGRAMADOR</option>
          </Select>
          <Button type="button" variant={"solicitation"}>
            Pendentes
          </Button>
          <Button type="button" variant={"default"}>
            Cadastrar
          </Button>
        </div>
      </div>
      <div className="mt-10 w-full mx-auto overflow-x-auto">
        <div className="flex w-full justify-center bg-green-700 text-white rounded-tl-lg rounded-tr-lg">
          <div className=" max-w-[30%] w-full  text-center py-2">Nome</div>
          <div className=" max-w-[20%] w-full  text-center py-2">CPF</div>
          <div className=" max-w-[30%] w-full  text-center py-2">Email</div>
          <div className=" max-w-[10%] w-full  text-center py-2">Tipo</div>
          <div className=" max-w-[10%] w-full  text-center py-2">Ações</div>
        </div>
        {users.map((item) => {
          return (
            <LineUsers
              key={item.cpf}
              nome={item.nome}
              cpf={item.cpf}
              email={item.email}
              tipo={item.tipo}
            />
          );
        })}
      </div>
      <div></div>
    </>
  );
};

export default SearchUsers;
