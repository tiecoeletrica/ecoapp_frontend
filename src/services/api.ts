import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { propsSessionPage } from "@/types/next-auth";
import axios from "axios";

const getSessionToken = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  return session?.tokenUser;
};

const sessionToken = await getSessionToken();

const api = axios.create({
  baseURL: "http://192.168.0.11:3000",
  headers: {
    Authorization: `Token ${sessionToken}`,
  },
});

export default api;
