import { getServerSession } from "next-auth";

import EditInForm from "@/components/form/EditInForm";

import { authOptions } from "@/lib/auth";

interface Token {
  nome: string;
  cpf: number;
  email: string;
  equipe_id: string;
  tipo: string;
  status: string;
}
const page = async () => {
  const session: Token | null = await getServerSession(authOptions);
  const {
    nome,
    email,
    cpf = 0,
    equipe_id = "",
    tipo = "",
    status = "",
  } = session || { nome: "", email: "" };

  return (
    <div className="w-full">
      <EditInForm
        nome={nome}
        email={email}
        cpf={cpf}
        equipe_id={equipe_id}
        tipo={tipo}
        status={status}
      />
    </div>
  );
};

export default page;
