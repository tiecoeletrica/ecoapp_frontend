import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutTeam(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(`https://backend-api-ej9i.onrender.com/equipes/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${session?.tokenUser}`,
    },
  });
  const data = (await res).json();
  return data;
}

const turnPageId = async ({ params }: { params: { team: string } }) => {
  const data = await getInfoAboutTeam(params.team);
  return <div>{JSON.stringify(data)}</div>;
};

export default turnPageId;
