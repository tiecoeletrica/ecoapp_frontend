import { getServerSession } from "next-auth";

import FormUpdate from "./components/FormUpdate";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutTeam(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(
    `https://touching-grizzly-logical.ngrok-free.app/equipes/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${session?.tokenUser}`,
      },
    },
  );
  const data = (await res).json();
  return data;
}

const turnPageId = async ({ params }: { params: { team: string } }) => {
  const response = await getInfoAboutTeam(params.team);
  return <FormUpdate data={response} id={params.team} />;
};

export default turnPageId;
