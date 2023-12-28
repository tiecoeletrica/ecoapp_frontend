import { getServerSession } from "next-auth";

import FormUpdate from "./components/FormUpdate";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutConstruction(id: string) {
  console.log(id);
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(
    `https://touching-grizzly-logical.ngrok-free.app/obras/${id}`,
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

const turnPageId = async ({ params }: { params: { construction: string } }) => {
  const response = await getInfoAboutConstruction(params.construction);
  return <FormUpdate data={response} id={params.construction} />;
};

export default turnPageId;
