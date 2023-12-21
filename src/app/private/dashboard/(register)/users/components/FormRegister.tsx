"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  nome: z.string().min(7, "O nome foi digitado corretamente?"),
  cpf: z
    .string()
    .min(11, "O CPF foi digitado corretamente?")
    .max(11, "A quantidade de digitos ultrapassou o permitido")
    .refine((cpf) => {
      const onlyNumbers = cpf.replace(/\D/g, "");
      const onlyNumbersAndLetters = /^[0-9a-zA-Z]*$/;
      return onlyNumbers.length === 11 && onlyNumbersAndLetters.test(cpf);
    }, "O CPF foi digitado corretamente?"),
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o dominio da Ecoelétrica"),
  senha: z.string().min(6, "A senha deve conter pelo menos 6 digitos"),
  tipo: z.string(),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

interface FormRegisterProps {
  token: string;
  isOpen: boolean;
  onClose: () => void;
}
const FormRegister: React.FC<FormRegisterProps> = ({
  token,
  isOpen,
  onClose,
}: FormRegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const [successContent, setSuccessContent] = useState("");
  function handleOpenModal() {
    onClose();
    reset();
  }

  const [loading, setLoading] = useState(false);
  const onSubmit = async (values: createUserFormData) => {
    setSuccessContent("");
    setLoading(true);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        cpf: values.cpf,
        tipo: values.tipo,
      }),
    });
    if (response.status == 201 || response.status == 200) {
      reset();
      setSuccessContent("Usuário criado com sucesso!");
    } else {
      setSuccessContent("Houve um erro! Agora qual foi eu não sei.");
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal title="Criar usuário" isOpen={isOpen} onClose={handleOpenModal}>
        {loading && <Loading />}

        {successContent && (
          <div>
            <div
              className={`flex justify-center w-full ${
                successContent === "Usuário criado com sucesso!"
                  ? "bg-green-400"
                  : "bg-red-600"
              } text-white font-bold py-1 max-w-[50%] mx-auto rounded`}
            >
              {successContent}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="mb-2"
            type="text"
            placeholder="Digite o seu nome"
            title="Nome"
            {...register("nome")}
          />
          {errors.nome && <span className="mt-2">{errors.nome.message}</span>}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Input
                className="mb-2"
                title="CPF"
                {...register("cpf")}
                type="text"
                placeholder="Somente os números..."
                maxLength={11}
              />
              {errors.cpf && <span className="mt-2">{errors.cpf.message}</span>}
            </div>
            <div className="w-full">
              <Input
                className="mb-2"
                {...register("email")}
                title="E-mail"
                type="email"
                placeholder="@ecoeletrica.com.br"
              />
              {errors.email && (
                <span className="mt-2">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Input
                className="mb-2"
                title="Senha"
                {...register("senha")}
                type="text"
                placeholder="Digite o Senha do colaborador"
              />
              {errors.senha && (
                <span className="mt-2">{errors.senha.message}</span>
              )}
            </div>
            <div className="flex flex-col w-full text-black">
              <label className="font-bold">Tipo</label>
              <select
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
                {...register("tipo")}
              >
                <option value="Escolha">Escolha</option>
                <option value="ADM">Adm</option>
                <option value="CAMPO">Campo</option>
                <option value="PROGRAMACAO">Programação</option>
                <option value="SUPERVISOR">Supervisor</option>
              </select>
              {errors.tipo && (
                <span className="mt-2">{errors.tipo.message}</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button className="max-w-xs" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default FormRegister;
