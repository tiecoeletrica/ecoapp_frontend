"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  nome: z.string().min(6, "Digite o seu nome completo."),
  email: z
    .string()
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

const Form = ({ name, email }: { name: string; email: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (values: createUserFormData) => {
    alert(values);
  };

  return (
    <form
      className="max-w-[600px] w-full p-4 mx-auto mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="bg-blue-dark-900 rounded-3xl w-20 h-20 flex justify-center mx-auto mb-5"></div>
      </div>
      <div>
        <Input
          type="text"
          title="Nome"
          disabled
          value={name}
          className="mb-2"
        />
        {/* {errors.nome && <span>{errors.nome.message}</span>} */}
      </div>
      <div>
        <Input
          title="E-mail"
          type="email"
          disabled
          value={email}
          className="mb-2"
        />
        {/* {errors.email && <span>{errors.email.message}</span>} */}
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
        <Button type="submit">Alterar</Button>
      </div>
    </form>
  );
};
export default Form;
