"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Button } from "../_ui/Button";
import { Input } from "../_ui/Input";
import { Select } from "../_ui/Select";
import Logo from "../../../public/logo.svg";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const createUserFormSchema = z.object({
  name: z.string().min(7, "O nome foi digitado corretamente?"),
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o dominio da Ecoelétrica"),
  setor: z.string().min(2, "Escolha um setor"),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;
console.log(createUserFormSchema);

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data: object) {
    alert("Pode buscar no banco de dados");
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="min-w-[490px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white"
    >
      <Image
        style={{ display: "block", margin: "auto", marginBottom: "40px" }}
        src={Logo}
        width={200}
        height={200}
        alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
      />
      <div>
        <Input
          title="Nome"
          type="text"
          {...register("name")}
          placeholder="Digite o nome completo..."
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <Input
          title="E-mail"
          type="email"
          {...register("email")}
          placeholder="Digite o email coorporativo..."
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <Select title="Setor" {...register("setor")}>
          <option value="" selected>
            Escolha
          </option>
          <option value="RH">RH</option>
          <option value="TI">TI</option>
          <option value="SESMT">SESMT</option>
          <option value="FINANCEIRO">FINANCEIRO</option>
          <option value="GERÊNCIA">GERÊNCIA</option>
          <option value="FROTA">FROTA</option>
          <option value="PRODUÇÃO">PRODUÇÃO</option>
        </Select>
        {errors.setor && <span>{errors.setor.message}</span>}
      </div>
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
