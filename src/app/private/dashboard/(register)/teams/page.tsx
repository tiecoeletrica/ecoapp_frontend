import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";

const getVehicles = async () =>
  api.get("/equipes").then((response) => {
    return response.data;
  });
// const getUsers = async () =>
//   api.get("/colaboradores").then((response) => {
//     return response.data;
//   });

const teamsPage = async () => {
  const response = await getVehicles();
  // const usersReponse = await getUsers();

  const session: propsSessionPage | null = await getServerSession(authOptions);
  return (
    <div>
      <Form
        data={response}
        token={session?.tokenUser || ""}
        // users={usersReponse}
      />
    </div>
  );
};
export default teamsPage;
