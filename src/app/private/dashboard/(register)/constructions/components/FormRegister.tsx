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
  projeto: z.string().nonempty("Projeto obrigatório"),
  descricao: z.string().nonempty("Descrição obrigatória"),
  status: z.string().refine((value) => value !== "Escolha", {
    message: "Status obrigatório",
  }),
  carteira: z.string().refine((value) => value !== "Escolha", {
    message: "Carteira obrigatória",
  }),
  cidade: z.string().refine((value) => value !== "Escolha", {
    message: "Cidade obrigatória",
  }),
  utd: z.string().refine((value) => value !== "Escolha", {
    message: "UTD obrigatória",
  }),
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

  function handleOpenModal() {
    onClose();
    reset();
  }

  const onSubmit = async (values: createUserFormData) => {
    setSuccessContent("");
    setLoading(true);
    const response = await fetch("/api/constructions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },

      body: JSON.stringify({
        projeto: values.projeto,
        descricao: values.descricao,
        cidade: values.cidade,
        utd: values.utd,
        carteira: values.carteira,
        status: values.status,
        token: token,
      }),
    });
    if (response.status == 200 || response.status == 201) {
      reset();
      setSuccessContent("Obra criada com sucesso!");
    } else {
      setSuccessContent("Erro ao criar obra!");
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal title="Criar projeto" isOpen={isOpen} onClose={handleOpenModal}>
        {loading && <Loading />}

        {successContent && (
          <div>
            <div
              className={`flex justify-center w-full ${
                successContent === "Obra criada com sucesso!"
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
            <div className="w-full mb-2">
              <Input
                title="Projeto"
                type="text"
                placeholder="Projeto"
                {...register("projeto")}
                className="w-full mb-2"
              />
              {errors.projeto && <span>{errors.projeto.message}</span>}
            </div>
            <div className="mb-2">
              <label className="font-bold">Status</label>
              <select
                {...register("status")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha" selected>
                  Escolha
                </option>
                <option value="PROGRAMADA">PROGRAMADA</option>
                <option value="EM EXECUÇÃO">EM EXECUÇÃO</option>
                <option value="EXECUTADA">EXECUTADA</option>
                <option value="ADIADA">ADIADA</option>
              </select>
              {errors.status && (
                <span className="mt-2">{errors.status.message}</span>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label className="font-bold">Descrição</label>
            <textarea
              className="w-full border border-solid border-gray focus:no-underline rounded outline-none p-2 resize-none"
              cols={30}
              rows={2}
              {...register("descricao")}
              placeholder="Descrição da obra"
            ></textarea>
            {errors.descricao && (
              <span className="mt-2">{errors.descricao.message}</span>
            )}
          </div>
          <div className="flex flex-col justify-between md:flex-row w-full gap-4 mb-2">
            <div className="w-full mb-2">
              <label className="font-bold">UTD</label>
              <select
                {...register("utd")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded mb-2"
              >
                <option value="Escolha" selected>
                  Escolha
                </option>
                <option value="VITÓRIA DA CONQUISTA">
                  VITÓRIA DA CONQUISTA
                </option>
                <option value="RIO DE CONTAS">RIO DE CONTAS</option>
                <option value="ITABERABA">ITABERABA</option>
                <option value="IRECÊ">IRECÊ</option>
              </select>
              {errors.utd && <span className="mt-2">{errors.utd.message}</span>}
            </div>
            <div className="w-full mb-2">
              <label className="font-bold">Cidade</label>
              <select
                {...register("cidade")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha" selected>
                  Escolha
                </option>
                <option value="VITÓRIA DA CONQUISTA">
                  VITÓRIA DA CONQUISTA
                </option>
                <option value="RIO DE CONTAS">RIO DE CONTAS</option>
                <option value="ITABERABA">ITABERABA</option>
                <option value="IRECÊ">IRECÊ</option>
              </select>
              {errors.cidade && (
                <span className="mt-2">{errors.cidade.message}</span>
              )}
            </div>
            <div className="w-full mb-2">
              <label className="font-bold">Carteira</label>
              <select
                {...register("carteira")}
                className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
              >
                <option value="Escolha" selected>
                  Escolha
                </option>
                <option value="setembro/2022">setembro/2022</option>
                <option value="setembro/2023">setembro/2023</option>
                <option value="outubro/2023">outubro/2023</option>
                <option value="setembro/2023">setembro/2023</option>
              </select>
              {errors.carteira && (
                <span className="mt-2">{errors.carteira.message}</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-end gap-4">
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
