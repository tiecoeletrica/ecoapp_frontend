import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

async function getInfoAboutUser(id: string) {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const res = fetch(`http://192.168.0.11:3000/colaboradores/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${session?.tokenUser}`,
    },
  });
  const data = (await res).json();
  return data;
}

const turnPageId = async ({ params }: { params: { user: string } }) => {
  const data = await getInfoAboutUser(params.user);
  return <div>{JSON.stringify(data)}</div>;
};

export default turnPageId;
