import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../../../lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Programação page - welcom back {session?.user.username}
      </h2>
    );
  }

  return redirect("/sign-in");
};

export default page;
