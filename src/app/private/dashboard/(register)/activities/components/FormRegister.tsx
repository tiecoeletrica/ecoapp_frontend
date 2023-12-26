"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  codigo: z.string().nonempty("Equipe obrigatória"),
  tipo: z.string().refine((value) => value !== "Escolha", {
    message: "Tipo obrigatório",
  }),
  descricao: z.string().min(1, "Descrição obrigatória"),
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
  function handleOpenModal() {
    onClose();
    reset();
  }

  const onSubmit = async (values: createUserFormData) => {
    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        codigo: values.codigo,
        tipo: values.tipo,
        descricao: values.descricao,
        token: token,
      }),
    });

    console.log(response);
  };

  return (
    <div>
      <Modal title="Criar equipe" isOpen={isOpen} onClose={handleOpenModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-4 mb-2">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  title="Código"
                  type="text"
                  placeholder="Código"
                  {...register("codigo")}
                  className="w-full"
                />
                {errors.codigo && (
                  <span className="mt-2">{errors.codigo.message}</span>
                )}
              </div>

              <div className="w-full">
                <label className="font-bold">Tipo</label>
                <select
                  {...register("tipo")}
                  className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
                >
                  <option value="Escolha">Escolha</option>
                  <option value="MT">MT</option>
                  <option value="MM">MM</option>
                  <option value="ML">ML</option>
                </select>
                {errors.tipo && (
                  <span className="mt-2">{errors.tipo.message}</span>
                )}
              </div>
            </div>
            <div className="w-full">
              <Input
                title="Descrição"
                type="text"
                placeholder="descricao"
                {...register("descricao")}
                className="w-full"
              />
              {errors.descricao && (
                <span className="mt-2">{errors.descricao.message}</span>
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
