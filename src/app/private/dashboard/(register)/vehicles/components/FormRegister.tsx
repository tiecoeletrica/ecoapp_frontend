"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  equipe: z.string().nonempty("Equipe obrigatória"),
  placa: z.string().nonempty("Placa obrigatória"),
  tipo: z.string().nonempty("Placa obrigatória"),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

interface FormRegisterProps {
  isOpen: boolean;
  onClose: () => void;
  token: string;
}
const FormRegister: React.FC<FormRegisterProps> = ({
  token,
  isOpen,
  onClose,
}: FormRegisterProps) => {
  console.log(token);
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
    console.log(values);
  };

  return (
    <div>
      <Modal title="Criar equipe" isOpen={isOpen} onClose={handleOpenModal}>
        <form onClick={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row w-full gap-4 items-end justify-between">
            <div className="flex flex-col w-full">
              <Input
                {...register("placa")}
                title="Placa"
                placeholder="Digite a placa..."
              />
              {errors.placa && (
                <span className="mt-2">{errors.placa.message}</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <Input
                {...register("tipo")}
                title="Tipo"
                placeholder="Digite o tipo..."
              />
              {errors.tipo && (
                <span className="mt-2">{errors.tipo.message}</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <Input
                {...register("equipe")}
                title="Equipe"
                placeholder="Digite a equipe"
              />
              {errors.equipe && (
                <span className="mt-2">{errors.equipe.message}</span>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="max-w-[200px] w-full mt-4">Cadastrar</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default FormRegister;
