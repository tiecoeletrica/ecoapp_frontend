"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/_ui/Button";
import LineUsers from "@/components/_ui/LineUsers";
import { Select } from "@/components/_ui/Select";

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
  { nome: "teste", cpf: "11231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "12123133", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "121233", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "1131231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "1231231233", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "12132111111113", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "11231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "12123133", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "121233", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "1131231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "1231231233", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "12132111111113", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "11231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "12123133", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "121233", email: "email", tipo: "ADM" },
  { nome: "teste", cpf: "1131231211", email: "email2", tipo: "CAMPO" },
  { nome: "Joao", cpf: "1231231233", email: "email", tipo: "ADM" },
  { nome: "Joao", cpf: "12132111111113", email: "email", tipo: "ADM" },
];

interface PropsResponse {
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
}

const SearchUsers = () => {
  const [originalList, setOriginalList] = useState<PropsResponse[]>([]);

  useEffect(() => {
    setOriginalList(response);
  }, []);

  const [list, setList] = useState(originalList);
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Lista de usuários</h1>
        <div className="flex items-baseline gap-2">
          <Button type="button" variant={"solicitation"}>
            Pendentes
          </Button>
        </div>
      </div>
      <div className="max-w-xs flex mt-4">
        <Select
          title="Filtrar por:"
          onChange={(e) => {
            const selectedType = e.target.value;
            const filteredList = originalList.filter(
              (item) => item.tipo === selectedType,
            );
            setList(filteredList);
          }}
        >
          <option value="Escolha">Escolha</option>
          <option value="ADM">ADM</option>
          <option value="CAMPO">CAMPO</option>
          <option value="SUPERVISOR">SUPERVISOR</option>
          <option value="PROGRAMADOR">PROGRAMADOR</option>
        </Select>
      </div>
      <div className="my-10 w-full mx-auto overflow-x-auto max-h-[600px] h-full">
        <div className="flex w-full justify-center bg-green-700 text-white rounded-tl-lg rounded-tr-lg">
          <div className=" max-w-[30%] w-full  text-center py-2">Nome</div>
          <div className=" max-w-[20%] w-full  text-center py-2">CPF</div>
          <div className=" max-w-[30%] w-full  text-center py-2">Email</div>
          <div className=" max-w-[10%] w-full  text-center py-2">Tipo</div>
          <div className=" max-w-[10%] w-full  text-center py-2">Ações</div>
        </div>
        {list.map((item) => {
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
      <div className="flex justify-end">
        <Button className="" type="button" variant={"default"}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default SearchUsers;
