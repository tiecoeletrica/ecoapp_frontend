import { getServerSession } from "next-auth";

import AddVehicle from "./components/AddVehicle";

import { authOptions } from "@/lib/auth";
import axios from "axios";

interface Session {
  user: {
    id: number;
    placa: string;
    tipo: string;
    equipe_id: number;
  };
  tokenUser: string;
}

const Veiculos = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session || !session.user || !session.tokenUser) {
    return <div>Please log in</div>;
  }
  const response = await axios.get(
    "https://backend-api-ej9i.onrender.com/veiculos",
    {
      headers: {
        Authorization: `Token ${session.tokenUser}`,
      },
    },
  );
  const data = response.data;
  return (
    <div className="h-screen p-4">
      <AddVehicle response={data} />
    </div>
  );
};

export default Veiculos;
