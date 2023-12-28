import { getServerSession } from "next-auth";

import FormUpdate from "./components/FormUpdate";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutActivies(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(
    `https://touching-grizzly-logical.ngrok-free.app/servicos/${id}`,
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
const turnPageId = async ({ params }: { params: { active: string } }) => {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  const response = await getInfoAboutActivies(params.active);
  return (
    <FormUpdate
      data={response}
      token={session?.tokenUser || ""}
      id={params.active}
    />
  );
};

export default turnPageId;
