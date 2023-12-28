"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z
  .object({
    password: z.string().min(6).nonempty("Senha obrigatória"),
    confirmPassword: z.string().min(6).nonempty("Confirmação obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
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
  const onSubmit = (values: createUserFormData) => {
    console.log(values);
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
      </div>
      <div>
        <Input
          title="E-mail"
          type="email"
          disabled
          value={email}
          className="mb-2"
        />
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
