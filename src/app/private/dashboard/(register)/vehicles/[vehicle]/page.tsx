import { getServerSession } from "next-auth";

import FormUpdate from "./components/FormUpdate";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutUser(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(
    `https://touching-grizzly-logical.ngrok-free.app/veiculos/${id}`,
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

const turnPageId = async ({ params }: { params: { vehicle: string } }) => {
  const response = await getInfoAboutUser(params.vehicle);
  return <FormUpdate data={response} />;
};

export default turnPageId;
