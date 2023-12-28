import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";

const getConstructions = async () =>
  api.get("/obras").then((response) => {
    return response.data;
  });

const constructionsPage = async () => {
  const response = await getConstructions();
  const session: propsSessionPage | null = await getServerSession(authOptions);
  return (
    <div>
      <Form data={response} token={session?.tokenUser || ""} />
    </div>
  );
};

export default constructionsPage;
