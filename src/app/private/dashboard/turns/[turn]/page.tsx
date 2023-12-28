import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutTurn(id: string) {
  console.log(id);
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

const turnPageId = async ({ params }: { params: { turn: string } }) => {
  const data = await getInfoAboutTurn(params.turn);
  return <div>{JSON.stringify(data)} </div>;
};

export default turnPageId;
