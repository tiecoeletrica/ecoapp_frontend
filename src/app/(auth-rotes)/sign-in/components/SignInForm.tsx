"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "../../../../components/_ui/Button";
import { Input } from "../../../../components/_ui/Input";

import Logo from "../../../../../public/logo.svg";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o domínio da Ecoelétrica"),
  password: z.string().min(3, "A senha precisa conter no minimo 6 caracteres"),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

const SignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (values: createUserFormData) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    console.log(signInData);
    if (signInData?.error) {
      alert("Login não foi encontrado");
    } else {
      router.refresh();
      router.push("/admin");
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
          type="email"
          title="E-mail"
          {...register("email")}
          placeholder="Digite o seu email..."
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="mb-2">
        <Input
          type="password"
          title="Senha"
          {...register("password")}
          placeholder="Digite a sua senha..."
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button size="full" variant="default" type="submit">
        Entrar
      </Button>
      <Link
        href={"/sign-up"}
        className="flex justify-center mt-5 font-bold text-blue-dark outline-none"
      >
        Solicitar acesso
      </Link>
    </form>
  );
};
export default SignInForm;
