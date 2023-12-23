import { getServerSession } from "next-auth";

import FormUpdate from "./components/FormUpdate";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutUser(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(
    `https://touching-grizzly-logical.ngrok-free.app/colaboradores/${id}`,
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

const turnPageId = async ({ params }: { params: { user: string } }) => {
  const response = await getInfoAboutUser(params.user);
  return <FormUpdate data={response} />;
};

export default turnPageId;
