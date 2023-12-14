import { getServerSession } from "next-auth";

import SearchTurn from "@/app/(admin-routes)/admin/turno/components/SearchTurn";

import { authOptions } from "@/lib/auth";
import axios from "axios";

interface Session {
  user: {
    id: number;
    equipe_id: number;
    equipe: string;
    nome: string;
    data: string;
    placa: string;
  };
  tokenUser: string;
}

const turno = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session || !session.user || !session.tokenUser) {
    return <div>Please log in</div>;
  }

  const response = await axios.get("http://192.168.0.72:3000/turnos", {
    headers: {
      Authorization: `Token ${session.tokenUser}`,
    },
  });
  const data = response.data;
  return (
    <div className="h-screen p-4">
      <SearchTurn response={data} />
    </div>
  );
};

export default turno;
