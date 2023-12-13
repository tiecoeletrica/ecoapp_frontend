import { getServerSession } from "next-auth";

import SearchUsers from "@/components/form/SearchUsers";

import { authOptions } from "@/lib/auth";
import axios from "axios";
interface Session {
  user: {
    nome: string;
    cpf: number;
    email: string;
    equipe_id: string;
    tipo: string;
    status: string;
  };
  tokenUser: string;
}

const Users = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session || !session.user || !session.tokenUser) {
    return <div>Please log in</div>;
  }
  const response = await axios.get("http://192.168.0.72:3000/colaboradores", {
    headers: {
      Authorization: `Token ${session.tokenUser}`,
    },
  });
  const data = response.data;

  return (
    <div className="h-screen p-4">
      <SearchUsers token={session.tokenUser} response={data} />
    </div>
  );
};

export default Users;
