import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";

const getServices = async () =>
  api.get("/servicos").then((response) => {
    return response.data;
  });
const servicePage = async () => {
  const response = await getServices();
  const session: propsSessionPage | null = await getServerSession(authOptions);
  return <Form data={response} token={session?.tokenUser || ""} />;
};

export default servicePage;
