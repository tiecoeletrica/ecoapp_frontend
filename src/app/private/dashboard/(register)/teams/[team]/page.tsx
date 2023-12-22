import { getServerSession } from "next-auth";

import { Input } from "@/components/Input";

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
  const data = await getInfoAboutTeam(params.team);
  console.log(data);
  //               status: 1
  return (
    <div className="w-full mx-auto px-4 relative mt-10 ">
      <div className="flex flex-scol md:flex-row gap-4">
        <Input title="Equipe" />
        <Input title="Lider" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="Supervisor" />
        <Input title="Coordenador" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="Contrato" />
        <Input title="tipo" />
      </div>
    </div>
  );
};

export default turnPageId;
