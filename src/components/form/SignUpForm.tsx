"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "../_ui/Button";
import { Input } from "../_ui/Input";
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
  password: z.string().min(6, "Senha precisa conter no minimo 6 dígitos."),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

const SignUpForm = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const onSubmit = async (values: createUserFormData) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    if (response.ok) {
      route.push("/sign-in");
    } else {
      console.log("Registro falhou");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        <Input
          title="Senha"
          type="password"
          {...register("password")}
          placeholder="Digite a senha..."
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button size="full" variant="solicitation" type="submit">
        Solicitar
      </Button>
      <Link
        href={"/sign-in"}
        className="flex justify-center mt-5 font-bold text-blue-dark outline-none"
      >
        Já tenho login cadastrado!
      </Link>
    </form>
  );
};
export default SignUpForm;
