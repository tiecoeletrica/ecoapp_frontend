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
  equipe: z.string().nonempty("Equipe obrigatória"),
  tipo: z.string().nonempty("Tipo obrigatório"),
  lider: z.string().nonempty("Lider obrigatório"),
  contrato: z.string().nonempty("Contrato obrigatório"),
  supervisor: z.string(),
  coordenador: z.string(),
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
  const [loading, setLoading] = useState(false);
  const [successContent, setSuccessContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const supervisores = ["Lucas", "Claudio", "Vinicius", "Pedro"];
  const coordenadores = ["Lucas", "Claudio", "Vinicius", "Pedro"];
  function handleOpenModal() {
    onClose();
    reset();
  }

  const onSubmit = async (values: createUserFormData) => {
    setSuccessContent("");
    setLoading(true);
    const response = await fetch("/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        equipe: values.equipe,
        tipo: values.tipo,
        lider_id: values.lider,
        supervisor_id: values.supervisor,
        coordenador_id: values.coordenador,
        contrato: values.contrato,
      }),
    });

    if (response.status == 200 || response.status == 201) {
      reset();
      setSuccessContent("Equipe criada com sucesso!");
    } else {
      setSuccessContent("Erro ao criar equipe");
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal title="Criar equipe" isOpen={isOpen} onClose={handleOpenModal}>
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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="flex flex-col md:flex-row w-full gap-4 mb-2">
            <div className="w-full">
              <Input
                title="Equipe"
                type="text"
                placeholder="Equipe"
                {...register("equipe")}
                className="w-full "
              />
              {errors.equipe && (
                <span className="mt-2">{errors.equipe.message}</span>
              )}
            </div>
            <div className="w-full">
              <label className="font-bold">Tipo</label>
              <select
                {...register("tipo")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha">Escolha</option>
                <option value="LM">LM</option>
                <option value="LV">LV</option>
                <option value="APOIO">APOIO</option>
                <option value="RETROESCAVADEIRA">RETROESCAVADEIRA</option>
              </select>
              {errors.tipo && (
                <span className="mt-2">{errors.tipo.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4 mb-2">
            <div className="w-full">
              <label className="font-bold">Lider</label>
              <select
                {...register("lider")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha">Escolha</option>
                <option value="1">TEST 2</option>
                <option value="2">TEST 2</option>
                <option value="4">TESTE 3</option>
                <option value="6">TESTE 3</option>
                <option value="7">TESTE 3</option>
                <option value="8">TESTE 3</option>
                <option value="9">TESTE 3</option>
                <option value="10">TESTE 3</option>
              </select>
              {errors.lider && (
                <span className="mt-2">{errors.lider.message}</span>
              )}
            </div>
            <div className="w-full">
              <label className="font-bold">Supervisor</label>
              <select
                {...register("supervisor")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha">Escolha</option>
                {supervisores.map((supervisor, index) => (
                  <option key={supervisor} value={index}>
                    {supervisor}
                  </option>
                ))}
              </select>
              {errors.supervisor && (
                <span className="mt-2">{errors.supervisor.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4 mb-4">
            <div className="w-full">
              <label className="font-bold">Coordenador</label>
              <select
                {...register("coordenador")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha">Escolha</option>
                {coordenadores.map((coordenador, index) => (
                  <option key={coordenador} value={index}>
                    {coordenador}
                  </option>
                ))}
              </select>
              {errors.coordenador && (
                <span className="mt-2">{errors.coordenador.message}</span>
              )}
            </div>
            <div className="w-full">
              <label className="font-bold">Tipo</label>
              <select
                {...register("contrato")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha">Escolha</option>
                <option value="COELBA">COELBA</option>
                <option value="CELPE">CELPE</option>
              </select>
              {errors.contrato && (
                <span className="mt-2">{errors.contrato.message}</span>
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
