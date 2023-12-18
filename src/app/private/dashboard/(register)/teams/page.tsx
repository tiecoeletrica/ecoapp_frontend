import Form from "./components/Form";

import api from "@/services/api";
const getVehicles = async () =>
  api.get("/equipes").then((response) => {
    return response.data;
  });

const teamsPage = async () => {
  const response = await getVehicles();
  return (
    <div>
      <Form data={response} />
    </div>
  );
};
export default teamsPage;
