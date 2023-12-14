import { getServerSession } from "next-auth";

import SearchUsers from "./components/SearchUsers/index";

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
  console.log(session?.tokenUser);
  const response = await axios.get(
    "https://backend-api-ej9i.onrender.com/colaboradores",
    {
      headers: {
        Authorization: `Token ${session.tokenUser}`,
      },
    },
  );
  const data = response.data;

  return (
    <div className="h-screen p-4">
      <SearchUsers token={session.tokenUser} response={data} />
    </div>
  );
};

export default Users;
