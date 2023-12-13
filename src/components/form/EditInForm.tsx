"use client";
import { useForm } from "react-hook-form";

import { Button } from "../_ui/Button";
import { Input } from "../_ui/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  nome: z
    .string()
    .nonempty("O nome é obrigatório.")
    .min(6, "Digite o seu nome completo."),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o domínio da Ecoelétrica"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres."),
  confirmPassword: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres."),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

interface Token {
  nome: string;
  cpf: number;
  email: string;
  equipe_id: string;
  tipo: string;
  status: string;
}
const EditInForm = ({ nome, email }: Token) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (values: createUserFormData) => {
    console.log(values);
    alert("Pode enviar");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[600px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white"
    >
      <div>
        <div className="bg-blue-dark-900 rounded-3xl w-20 h-20 flex justify-center mx-auto mb-5"></div>
      </div>
      <div>
        <Input
          type="text"
          title="Nome"
          {...register("nome")}
          placeholder="Digite o seu nome..."
          disabled
          value={nome}
          className="mb-2"
        />
        {errors.nome && <span>{errors.nome.message}</span>}
      </div>
      <div>
        <Input
          title="E-mail"
          type="email"
          {...register("email")}
          placeholder="Digite o email coorporativo..."
          disabled
          value={email}
          className="mb-2"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="mb-2 w-full">
        <Input
          type="password"
          title="Senha"
          {...register("password")}
          placeholder="Digite a sua senha..."
          className="mb-2"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="mb-2 w-full">
        <Input
          type="password"
          title="Confirme a sua senha"
          {...register("confirmPassword")}
          placeholder="Cofirme a senha..."
          className="mb-2"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <div className="flex justify-between gap-2">
        <Button size="full" variant="solicitation" type="submit">
          Alterar
        </Button>
      </div>
    </form>
  );
};
export default EditInForm;
