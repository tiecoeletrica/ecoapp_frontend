"use client";
import { useState } from "react";

import { Button } from "@/components/Button";

import FormRegister from "./FormRegister";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <div className="w-full mx-auto px-4">
      {modalIsOpen ? (
        <div className="mt-72">
          <FormRegister isOpen={modalIsOpen} onClose={handleOpenModal} />
        </div>
      ) : (
        <Button className="md:max-w-xs w-full" onClick={handleOpenModal}>
          Cadastrar
        </Button>
      )}
    </div>
  );
};

export default Form;
