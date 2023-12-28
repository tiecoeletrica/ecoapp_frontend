import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Loading from "@/components/Loading";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

const dashboardPage = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  if (!session) {
    redirect("/public/sign-in");
  }
  return (
    <div className="relative w-full text-center">
      <div className="flex justify-center items-center h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loading />
          Carregando dados...
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
