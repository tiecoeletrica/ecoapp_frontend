import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Turn from "@/components/_ui/Turn";

import { authOptions } from "../../../lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user.username) {
    return (
      <div>
        <Turn />
      </div>
    );
  }
  return redirect("/sign-in");
};

export default page;
