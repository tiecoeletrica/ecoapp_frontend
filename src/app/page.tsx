import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import OutForm from "@/components/form/OutForm";

import { authOptions } from "../lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div>
        {session.user?.username}
        <OutForm />
      </div>
    );
  }

  return redirect("/sign-in");
};
export default Home;
