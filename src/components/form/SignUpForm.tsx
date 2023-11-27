"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../_ui/Button";
import { Input } from "../_ui/Input";
import { Select } from "../_ui/Select";
import Logo from "../../../public/logo.svg";

const SignUpForm = () => {
  return (
    <form className="min-w-[490px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white">
      <Image
        style={{ display: "block", margin: "auto", marginBottom: "40px" }}
        src={Logo}
        width={200}
        height={200}
        alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
      />
      <Input title="Nome" type="text" />
      <Input title="E-mail" type="email" />
      <Select title="Setor">
        <option value="Escolha" selected>
          Escolha
        </option>
        <option value="RH">RH</option>
        <option value="TI">TI</option>
        <option value="SESMET">SESMET</option>
        <option value="FINANCEIRO">FINANCEIRO</option>
        <option value="GERÊNCIA">GERÊNCIA</option>
        <option value="FROTA">FROTA</option>
        <option value="PRODUÇÃO">PRODUÇÃO</option>
      </Select>
      <Button variant="solicitation" type="submit">
        Solicitar
      </Button>
      <Link
        href={"/"}
        className="flex justify-center mt-5 font-bold text-blue-dark outline-none"
      >
        Já tenho login cadastrado!
      </Link>
    </form>
  );
};
export default SignUpForm;
