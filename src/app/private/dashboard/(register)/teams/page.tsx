import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";

const getVehicles = async () =>
  api.get("/equipes").then((response) => {
    return response.data;
  });

const teamsPage = async () => {
  const response = await getVehicles();
  const session: propsSessionPage | null = await getServerSession(authOptions);
  return (
    <div>
      <Form data={response} token={session?.tokenUser || ""} />
    </div>
  );
};
export default teamsPage;
