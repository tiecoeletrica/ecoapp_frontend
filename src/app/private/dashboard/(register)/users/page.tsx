import Form from "./components/Form";

import api from "@/services/api";
const getUsers = async () =>
  api.get("/colaboradores").then((response) => {
    return response.data;
  });

const usersPage = async () => {
  const response = await getUsers();
  return (
    <div>
      <Form data={response} />
    </div>
  );
};
export default usersPage;
