"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";

import { serviceType } from "@/types/rotes";
interface FormProps {
  data: serviceType;
  token: string;
  id: string;
}
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

const FormUpdate = ({ data, token, id }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const [loading, setLoading] = useState(false);
  const [tipo, setTipo] = useState(data.unidade);
  const [codigo, setCodigo] = useState(data.codigo);
  const [successContent, setSuccessContent] = useState("");
  const { back } = useRouter();
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(e.target.value);
  };
  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCodigo(e.target.value);
  };
  const onSubmit = async (values: createUserFormData) => {
    setLoading(true);
    const response = await fetch("/api/activities", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        codigo: values.codigo,
        descricao: values.descricao,
        tipo: values.tipo,
        token: token,
      }),
    });
    if (response.status == 201 || response.status == 200) {
      reset();
      setSuccessContent("Serviço enviado com sucesso!");
    } else {
      setSuccessContent("Houve um erro! Agora qual foi eu não sei.");
    }
    setLoading(false);
  };
  return (
    <form
      className=" max-w-[1000px] w-full mx-auto px-4 relative mt-10  border-radius border border-gray rounded p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-bold text-center mx-auto text-lg">
        Atualizar serviço
      </h1>
      {loading && <Loading />}
      {successContent && (
        <div>
          <div
            className={`flex justify-center w-full ${
              successContent === "Serviço enviado com sucesso!"
                ? "bg-green-400"
                : "bg-red-600"
            } text-white font-bold py-1 max-w-[50%] mx-auto rounded`}
          >
            {successContent}
          </div>
        </div>
      )}
      <div className="flex flex-scol md:flex-row gap-4 mb-2">
        <Input
          title="Código"
          value={codigo}
          {...register("codigo")}
          onChange={() => handleCodeChange}
        />
        {errors.codigo && <span className="mt-2">{errors.codigo.message}</span>}
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-2">
        <Input
          title="Descricão"
          value={data.descricao}
          {...register("descricao")}
        />
        {errors.descricao && (
          <span className="mt-2">{errors.descricao.message}</span>
        )}
      </div>
      <div className="w-full mb-4">
        <label className="font-bold">Tipo</label>
        <select
          className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          {...register("tipo")}
          onChange={handleStatusChange}
          value={tipo}
        >
          <option value="Escolha">Escolha</option>
          <option value="UD">UD</option>
          <option value="MT">MT</option>
          <option value="MM">MM</option>
          <option value="ML">ML</option>
          <option value="M">M</option>
          <option value="Unidunitê">Unidunitê</option>
        </select>
        {errors.tipo && <span className="mt-2">{errors.tipo.message}</span>}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={back} background="return">
          Voltar
        </Button>
        <Button>Atualizar</Button>
      </div>
    </form>
  );
};
export default FormUpdate;
