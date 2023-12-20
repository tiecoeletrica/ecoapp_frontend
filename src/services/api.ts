import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";
import axios from "axios";

const getSessionToken = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  return session?.tokenUser;
};

const sessionToken = await getSessionToken();
console.log(sessionToken);
const api = axios.create({
  baseURL: "https://touching-grizzly-logical.ngrok-free.app",
  headers: {
    Authorization: `Token ${sessionToken}`,
  },
});

export default api;
