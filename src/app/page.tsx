import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Menu from "@/components/_ui/Menu";

import { authOptions } from "../lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div className="flex">
        <Menu />
        <div className="h-full">
          <main className="bg-green-900">
            <div>
              <h1 className="sm:text-xs md:text-4xl">Teste de tamanho</h1>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return redirect("/sign-in");
};
export default Home;
