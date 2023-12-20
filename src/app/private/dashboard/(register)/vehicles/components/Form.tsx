"use client";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal";
import Select from "@/components/Select";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <div className="w-full mx-auto px-4">
      <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
        <Input
          className="mb-2"
          type="text"
          placeholder="Digite a placa"
          title="Equipe"
        />
        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="mb-2 w-full">
            <Select title="Tipo">
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </Select>
          </div>
          <div className="mb-2 w-full">
            <Select title="Contrato">
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
          <div className="mb-2 w-full">
            <Select title="Coordenador">
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </Select>
          </div>
          <div className="mb-6 w-full">
            <Select title="Supervisor">
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </Select>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button className="max-w-xs" type="submit">
            Cadastrar
          </Button>
        </div>
      </Modal>
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
        <Button className="md:max-w-xs w-full" onClick={handleOpenModal}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default Form;
