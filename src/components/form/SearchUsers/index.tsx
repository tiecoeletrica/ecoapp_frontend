"use client";
import React, { useState, useEffect } from "react";

import LineUsers from "@/components/_ui/LineUsers";
import { Select } from "@/components/_ui/Select";

interface PropsResponse {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
  equipe?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface SearchUsersProps {
  response: PropsResponse[];
}

const SearchUsers: React.FC<SearchUsersProps> = ({ response }) => {
  const [originalList, setOriginalList] = useState<PropsResponse[]>(response);
  const [filteredUsers, setFilteredUsers] =
    useState<PropsResponse[]>(originalList);

  useEffect(() => {
    setOriginalList(response);
    setFilteredUsers(response);
  }, [response]);
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    const filteredList = originalList.filter(
      (item) => item.tipo === selectedType,
    );
    setFilteredUsers(filteredList);
  };

  const handleRote = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Lista de usuários</h1>
      </div>
      <div className=" max-w-xs flex mt-4">
        <Select title="Filtrar por:" onChange={handleFilterChange}>
          <option value="Escolha">Escolha</option>
          <option value="ADM">ADM</option>
          <option value="CAMPO">CAMPO</option>
          <option value="SUPERVISOR (A) DE OBRAS">
            SUPERVISOR (A) DE OBRAS
          </option>
          <option value="PROGRAMADOR">PROGRAMADOR</option>
        </Select>
      </div>
      <div className="my-10 w-full mx-auto">
        <div className="flex w-full justify-center bg-green-700 text-white rounded-tl-lg rounded-tr-lg">
          <div className=" max-w-[30%] w-full  text-center py-2">Nome</div>
          <div className=" max-w-[20%] w-full  text-center py-2">CPF</div>
          <div className=" max-w-[30%] w-full  text-center py-2">Email</div>
          <div className=" max-w-[10%] w-full  text-center py-2">Tipo</div>
          <div className=" max-w-[10%] w-full  text-center py-2">Ações</div>
        </div>
        <div className="overflow-x-auto max-h-[400px] h-full">
          {filteredUsers.map((item) => (
            <LineUsers
              key={item.id}
              nome={item.nome}
              cpf={item.cpf}
              email={item.email}
              tipo={item.tipo}
              onClick={handleRote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchUsers;
