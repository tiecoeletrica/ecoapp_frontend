"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

interface TypesTurnId {
  id: string;
  nome: string;
  tipo: string;
  lider_id: string;
  supervisor_id: string;
  coordenador_id: string;
  contrato: string;
  equipe: string;
}

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserFormSchema = z.object({
  equipe: z.string().nonempty("Equipe obrigatória"),
  tipo: z.string().refine((value) => value !== "Escolha", {
    message: "Tipo obrigatório",
  }),
  lider: z.string().refine((value) => value !== "Escolha", {
    message: "Encarrgado obrigatório",
  }),
  contrato: z.string().refine((value) => value !== "Escolha", {
    message: "Contrato obrigatório",
  }),
  supervisor: z.string().transform((value) => {
    if (value == "Escolha") {
      return null;
    }
  }),
  coordenador: z.string().transform((value) => {
    if (value == "Escolha") {
      return null;
    }
  }),
});
type createUserFormData = z.infer<typeof createUserFormSchema>;

interface FormProps {
  data: TypesTurnId;
  id: string;
}
const FormUpdate = ({ data, id }: FormProps) => {
  const [successContent, setSuccessContent] = useState("");
  const [loading, setLoading] = useState(false);
  const supervisores = ["1", "2", "3", "4"];
  const coordenadores = ["1", "2", "3", "4"];
  const { back } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const [encarregado, setEncarregado] = useState(data.lider_id || "");
  const handleEncarregadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEncarregado(e.target.value);
  };
  const [tipo, setTipo] = useState(data.tipo || "");
  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(e.target.value);
  };
  const [supervisor, setSupervisor] = useState(data.supervisor_id || "");
  const handleSupervisorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSupervisor(e.target.value);
  };
  const [coordenador, setCoodenador] = useState(data.coordenador_id || "");
  const handleCoordenadorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCoodenador(e.target.value);
  };
  const [contrato, setContrato] = useState(data.contrato || "");
  const handleContratoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContrato(e.target.value);
  };
  const onSubmit = async (values: createUserFormData) => {
    setSuccessContent("");
    setLoading(true);

    const response = await fetch("/api/teams", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        supervisor_id: values.supervisor,
        coordenador_id: values.coordenador,
        lider_id: encarregado,
        equipe: values.equipe,
        tipo: values.tipo,
        contrato: values.contrato,
      }),
    });
    if (response.status == 201 || response.status == 200) {
      alert("Atualizado com sucesso");
    } else {
      alert("Erro no momento de atualizar!");
    }
    setLoading(false);
  };
  return (
    <form
      className="max-w-[1000px] w-full mx-auto mt-10 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row w-full gap-4 mb-2">
        <div className="w-full">
          <Input
            title="Equipe"
            type="text"
            placeholder="Equipe"
            {...register("equipe")}
            className="w-full "
            value={data.equipe}
          />
          {errors.equipe && (
            <span className="mt-2">{errors.equipe.message}</span>
          )}
        </div>
        <div className="w-full">
          <label className="font-bold">Tipo</label>
          <select
            {...register("tipo")}
            value={tipo}
            onChange={handleTipoChange}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          >
            <option value="Escolha">Escolha</option>
            <option value="LM">LM</option>
            <option value="LV">LV</option>
          </select>
          {errors.tipo && <span className="mt-2">{errors.tipo.message}</span>}
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 mb-2">
        <div className="w-full">
          <label className="font-bold">Encarregado</label>
          <select
            {...register("lider")}
            value={encarregado}
            onChange={handleEncarregadoChange}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          >
            <option value="Escolha">Escolha</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.lider && <span className="mt-2">{errors.lider.message}</span>}
        </div>
        <div className="w-full">
          <label className="font-bold">Contrato</label>
          <select
            {...register("contrato")}
            value={contrato}
            onChange={handleContratoChange}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          >
            <option value="Escolha">Escolha</option>
            <option value="COELBA">COELBA</option>
            <option value="CELPE">CELPE</option>
          </select>
          {errors.coordenador && (
            <span className="mt-2">{errors.contrato?.message}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 mb-4">
        <div className="w-full">
          <label className="font-bold">Coordenador</label>
          <select
            {...register("coordenador")}
            value={coordenador}
            onChange={handleCoordenadorChange}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
          >
            <option value="Escolha">Escolha</option>
            {coordenadores.map((coordenador) => (
              <option key={coordenador} value={coordenador}>
                {coordenador}
              </option>
            ))}
          </select>
          {errors.coordenador && (
            <span className="mt-2">{errors.coordenador.message}</span>
          )}
        </div>
        <div className="w-full">
          <label className="font-bold">Supervisor</label>
          <select
            {...register("supervisor")}
            className="border border-gray outline-none focus:no-underline h-10 w-full rounded"
            value={supervisor}
            onChange={handleSupervisorChange}
          >
            <option value="Escolha">Escolha</option>
            {supervisores.map((supervisor) => (
              <option key={supervisor} value={supervisor}>
                {supervisor}
              </option>
            ))}
          </select>
          {errors.supervisor && (
            <span className="mt-2">{errors.supervisor.message}</span>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <Button background={"return"} className="w-full" onClick={back}>
          Voltar
        </Button>
        <Button className="w-full" type="submit">
          Atualizar
        </Button>
      </div>
    </form>
  );
};
export default FormUpdate;
