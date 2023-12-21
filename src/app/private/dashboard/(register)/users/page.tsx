import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";

const getUsers = async () =>
  api.get("/colaboradores").then((response) => {
    return response.data;
  });

const usersPage = async () => {
  const response = await getUsers();
  const session: propsSessionPage | null = await getServerSession(authOptions);

  return (
    <div>
      <Form data={response} token={session?.tokenUser || ""} />
    </div>
  );
};
export default usersPage;
