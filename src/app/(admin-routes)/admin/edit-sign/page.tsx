import { getServerSession } from "next-auth";

import EditInForm from "@/components/form/EditInForm";

import { authOptions } from "@/lib/auth";

// Update the interface to match the actual structure returned by getServerSession
interface Session {
  user: {
    nome: string;
    cpf: number;
    email: string;
    equipe_id: string;
    tipo: string;
    status: string;
  };
  // Add other properties if needed
}

const page = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session || !session.user) {
    return <div>Please log in</div>;
  }

  const {
    nome,
    email,
    cpf = 0,
    equipe_id = "",
    tipo = "",
    status = "",
  } = session.user;

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
