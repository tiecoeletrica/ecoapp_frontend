import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Button } from "@/components/Button";

import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  if (session) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button background="return">teste</Button>
      </div>
    );
  }
  // if (session?.user) {
  //   return (
  //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  //       <Button background="return">teste</Button>
  //     </div>
  //   );
  // }

  return redirect("/public/sign-in");
}
