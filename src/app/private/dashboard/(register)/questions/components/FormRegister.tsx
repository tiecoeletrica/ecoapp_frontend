import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";
import Modal from "@/components/Modal";

interface FormRegisterProps {
  token: string;
  isOpen: boolean;
  onClose: () => void;
}

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  pergunta: z.string().min(7, "O nome foi digitado corretamente?"),
  tipo: z.string().nonempty("Selecione o tipo"),
  categoria: z.string().nonempty("Selecione a categoria"),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;
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
  const [successContent, setSuccessContent] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: createUserFormData) => {
    setSuccessContent("");
    setLoading(true);
    const response = await fetch("/api/create_question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        pergunta_resposta: values.pergunta,
        tipo: values.tipo,
        categoria: values.categoria,
      }),
    });

    if (response.status == 201 || response.status == 200) {
      reset();
      setSuccessContent("Pergunta criada com sucesso!");
    } else {
      setSuccessContent("Houve um erro! Agora qual foi eu não sei.");
    }
    setLoading(false);
  };

  return (
    <Modal title="Criar pergunta" isOpen={isOpen} onClose={handleOpenModal}>
      {loading && <Loading />}

      {successContent && (
        <div>
          <div
            className={`flex justify-center w-full ${
              successContent === "Pergunta criada com sucesso!"
                ? "bg-green-400"
                : "bg-red-600"
            } text-white font-bold py-1 max-w-[50%] mx-auto rounded`}
          >
            {successContent}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            className="mb-2"
            type="text"
            placeholder="Digite a pergunta"
            title="Pergunta"
            {...register("pergunta")}
          />
          {errors.pergunta && (
            <span className="mt-2">{errors.pergunta.message}</span>
          )}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full text-black mb-2">
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
                <span className="mt-1">{errors.tipo.message}</span>
              )}
            </div>
            <div className="flex flex-col w-full text-black mb-2">
              <label className="font-bold">Categoria</label>
              <select
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
                {...register("categoria")}
              >
                <option value="Escolha">Escolha</option>
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 2">Categoria 2</option>
                <option value="Categoria 3">Categoria 3</option>
                <option value="Categoria 4">Categoria 4</option>
              </select>
              {errors.categoria && (
                <span className="mt-1">{errors.categoria.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button className="md:max-w-xs" type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </Modal>
  );
};
export default FormRegister;
