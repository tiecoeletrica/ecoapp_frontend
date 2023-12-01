import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return <div>oi</div>;
  }

  return redirect("/sign-in");
};
export default Home;
