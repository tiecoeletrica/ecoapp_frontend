"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Loading from "../../../../../../ecoapp_frontend/src/components/Loading";
import { Button } from "@/components/Button";
import ButtonSignWithGoogle from "@/components/ButtonSignWithGoogle";
import { Input } from "@/components/Input";

import Logo from "../../../../../../public/logo.svg";

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

const SigninContent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (values: createUserFormData) => {
    setLoading(true);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      alert("Login não foi encontrado");
    } else {
      router.refresh();
      router.push("/private/dashboard");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[490px] w-full p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Image
        style={{ display: "block", margin: "auto", marginBottom: "40px" }}
        src={Logo}
        width={200}
        height={200}
        alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
      />
      <div className="mb-2">
        <Input
          size="default"
          type="email"
          title="CPF"
          {...register("email")}
          placeholder="Digite o seu cpf..."
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="mb-2">
        <Input
          size="default"
          type="password"
          title="Senha"
          {...register("password")}
          placeholder="Digite a sua senha..."
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      {!loading ? (
        <Button type="submit">Entrar</Button>
      ) : (
        <Button type="submit">
          <Loading />
        </Button>
      )}
      <ButtonSignWithGoogle />
      <Link
        href={"/public/sign-up"}
        className="flex justify-center mt-5 font-bold text-blue-dark outline-none"
      >
        Solicitar acesso
      </Link>
    </form>
  );
};
export default SigninContent;
