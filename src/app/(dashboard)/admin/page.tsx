import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../../../lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user.username) {
    return <div>Admin page - welcom back {session?.user.username}</div>;
  }
  return redirect("/sign-in");
};

export default page;
