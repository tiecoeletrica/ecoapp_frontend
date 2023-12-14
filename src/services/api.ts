import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { Session } from "@/types/type-req";
import axios from "axios";

const getSessionToken = async () => {
  const session: Session | null = await getServerSession(authOptions);
  return session?.tokenUser;
};

const sessionToken = await getSessionToken();

const api = axios.create({
  baseURL: "http://192.168.0.72:3000/",
  headers: {
    Authorization: `Token ${sessionToken}`,
  },
});

export default api;
