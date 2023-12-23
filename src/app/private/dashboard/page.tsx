import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

const dashboardPage = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/public/sign-in");
  }
  return <div className="w-full text-center mt-10">INDICADORES</div>;
};

export default dashboardPage;
