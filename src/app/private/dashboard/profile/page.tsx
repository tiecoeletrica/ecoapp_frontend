import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";

const profilePage = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  const username = session?.user.username || "";
  const email = session?.user.email || "";

  return <Form name={username} email={email} />;
};

export default profilePage;
