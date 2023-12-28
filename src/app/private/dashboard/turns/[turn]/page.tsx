import { getServerSession } from "next-auth";

import Colaboradores from "./components/Colaboradores";
import Header from "./components/Header";
import Obras from "./components/Obras";
import Loading from "@/components/Loading";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutTurn(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(`https://backend-api-ej9i.onrender.com/turnos/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${session?.tokenUser}`,
    },
  });
  const data = (await res).json();
  return data;
}

export interface TurnPageData {
  turno: string[];
  colaboradores: string[];
  obras_turnos: string[];
  fotos: string[];
}
const turnPageId = async ({ params }: { params: { turn: string } }) => {
  const data: TurnPageData = await getInfoAboutTurn(params.turn);
  console.log(data);
  return (
    <div className="max-w-[1000px] w-full mx-auto">
      <Header />
      <Colaboradores />
      <Obras />
    </div>
  );
};

export default turnPageId;
