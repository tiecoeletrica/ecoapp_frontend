import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Menu from "@/components/_ui/Menu";
import Turn from "@/components/_ui/Turn";

import { authOptions } from "../lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div className="flex">
        <Menu />
        <div>
          <Turn />
        </div>
      </div>
    );
  }

  return redirect("/sign-in");
};
export default Home;
