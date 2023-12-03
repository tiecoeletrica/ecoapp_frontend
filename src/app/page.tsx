import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div className="bg-blue-800 h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Indicadores
        </div>
      </div>
    );
  }

  return redirect("/sign-in");
};
export default Home;
