"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";

import { constructionType } from "@/types/rotes";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  projeto: z.string(),
  descricao: z.string(),
  status: z.string(),
  carteira: z.string(),
  cidade: z.string(),
  utd: z.string(),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

interface FormProps {
  data: constructionType;
  id: string;
}
const FormUpdate = ({ data, id }: FormProps) => {
  const [successContent, setSuccessContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { back } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const [buttonClicked, setButtonClicked] = useState<string | null>(null);
  const handleButtonClick = (buttonName: string) => {
    setButtonClicked(buttonName);
  };

  const onSubmit = async (values: createUserFormData) => {
    if (buttonClicked === "voltar") {
      back();
    } else if (buttonClicked === "atualizar") {
      setSuccessContent("");
      setLoading(true);

      const response = await fetch("/api/constructions", {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          projeto: values.projeto,
          descricao: values.descricao,
          cidade: values.cidade,
          utd: values.utd,
          carteira: values.carteira,
          // status: values.status,
          status: "true",
        }),
      });
      console.log(response);
      if (response.status == 201 || response.status == 200) {
        setSuccessContent("Atualizado com sucesso!");
      } else {
        setSuccessContent("Houve um erro! Agora qual foi eu não sei.");
      }
      setLoading(false);
    }
  };

  const [projeto, setProjeto] = useState(data.projeto || "");
  const handleProjetoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjeto(e.target.value);
  };

  const [status, setStatus] = useState(data.status || "");
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const [descricao, setDescricao] = useState(data.descricao || "");
  const handleDescricaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDescricao(e.target.value);
  };
  const [utd, setUtd] = useState(data.utd || "");
  const handleUTDChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUtd(e.target.value);
  };

  const [cidade, setCidade] = useState(data.cidade || "");
  const handleCidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCidade(e.target.value);
  };

  const [carteira, setCarteira] = useState(data.carteira || "");
  const handleCarteiraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarteira(e.target.value);
  };
  return (
    <form
      className="max-w-[1000px] w-full mx-auto mt-10 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loading && <Loading />}
      {successContent && (
        <div>
          <div
            className={`flex justify-center w-full ${
              successContent === "Atualizado com sucesso!"
                ? "bg-green-400"
                : "bg-red-600"
            } text-white font-bold py-1 max-w-[50%] mx-auto rounded`}
          >
            {successContent}
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row w-full gap-4 mb-2">
        <div className="w-full mb-2">
          <Input
            title="Projeto"
            type="text"
            placeholder="Projeto"
            {...register("projeto")}
            className="w-full mb-2"
            value={projeto}
            onChange={() => handleProjetoChange}
          />
          {errors.projeto && <span>{errors.projeto.message}</span>}
        </div>
        <div className="mb-2">
          <label className="font-bold">Status</label>
          <select
            {...register("status")}
            value={status}
            onChange={handleStatusChange}
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
          value={descricao}
          onChange={() => handleDescricaoChange}
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
            value={utd}
            onChange={handleUTDChange}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded mb-2"
          >
            <option value="Escolha">Escolha</option>
            <option value="VITÓRIA DA CONQUISTA">VITÓRIA DA CONQUISTA</option>
            <option value="RIO DE CONTAS">RIO DE CONTAS</option>
            <option value="ITABERABA">ITABERABA</option>
            <option value="IRECÊ">IRECÊ</option>
            <option value="BRUMADO">BRUMADO</option>
          </select>
          {errors.utd && <span className="mt-2">{errors.utd.message}</span>}
        </div>
        <div className="w-full mb-2">
          <label className="font-bold">Cidade</label>
          <select
            {...register("cidade")}
            value={cidade}
            onChange={handleCidadeChange}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          >
            <option value="Escolha">Escolha</option>
            <option value="VITÓRIA DA CONQUISTA">VITÓRIA DA CONQUISTA</option>
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
            value={carteira}
            onChange={handleCarteiraChange}
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

      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <Button
          background={"return"}
          className="w-full"
          onClick={() => handleButtonClick("voltar")}
        >
          Voltar
        </Button>
        <Button
          className="w-full"
          type="submit"
          onClick={() => handleButtonClick("atualizar")}
        >
          Atualizar
        </Button>
      </div>
    </form>
  );
};
export default FormUpdate;
