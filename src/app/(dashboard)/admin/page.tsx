import { getServerSession } from "next-auth";

import { authOptions } from "../../../lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user) {
    return <h2>Admin page - welcom back {session?.user.username}</h2>;
  }

  return <h2>Please login to see this admin page</h2>;
};

export default page;
